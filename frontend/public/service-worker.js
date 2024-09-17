const currentDataVersion = "v1-19-0";
const currentAssetVersion = "v1-0-0";
const CHARPLANNER_CACHE_NAME = `charplanner-data-cache-${currentDataVersion}`;
const ASSET_CACHE_NAME = `assets-cache-${currentAssetVersion}`;

// List of JSON files to cache
const JSON_FILES_TO_CACHE = [
    `/data/AttackElementCorrectParam-${currentDataVersion}.json`,
    `/data/CalcCorrectGraphEz-${currentDataVersion}.json`,
    `/data/CompatibleAowData-${currentDataVersion}.json`,
    `/data/ConsumableData-${currentDataVersion}.json`,
    `/data/EffectData-${currentDataVersion}.json`,
    `/data/EquipParamProtector-${currentDataVersion}.json`,
    `/data/EquipParamWeapon-${currentDataVersion}.json`,
    `/data/ReinforceParamWeapon-${currentDataVersion}.json`,
    `/data/StatusEffectData-${currentDataVersion}.json`,
    `/data/WeaponsData-${currentDataVersion}.json`,
];

// List of asset files to cache
const ASSETS_TO_CACHE = [
    "/favicon.webp",
    "/border1.png",
    "/border2.png",
    "/highqualitygold.jpg",
    "/nettunnelbg.png",
    "/onofframpsbg.png",
    "/mantinia_regular-webfont.woff2",
    "/mantinia_regular-webfont.woff",
];

// Install event - Caching the JSON files
self.addEventListener("install", (event) => {
    event.waitUntil(
        // Open and cache data files
        caches.open(CHARPLANNER_CACHE_NAME)
            .then((cache) => {
                //console.log("Service Worker: Caching files");
                return cache.addAll(JSON_FILES_TO_CACHE);
            })
            .catch((_error) => {
                //console.error("Service Worker: Failed to cache during install", error);
            })
    );

    event.waitUntil(
        // Open and cache asset files (images, fonts)
        caches.open(ASSET_CACHE_NAME)
            .then((cache) => {
                //console.log('Service Worker: Caching assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .catch((_error) => {
                //console.error('Service Worker: Failed to cache assets during install', error);
            })
    );

    self.skipWaiting(); // Activate the service worker immediately
});

// Activate event - Clear old caches if the cache name has changed
self.addEventListener("activate", (event) => {
    // if version changes old cache names not part of whitelist therefore get deleted
    const cacheWhitelist = [CHARPLANNER_CACHE_NAME, ASSET_CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (!cacheWhitelist.includes(cacheName)) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .catch((_error) => {
                //console.error('Service Worker: Failed to clean up old caches', error);
            })
    );
});

// Fetch event - Serve cached JSON or fetch from the network
self.addEventListener("fetch", (event) => {
    const requestUrl = new URL(event.request.url);

    // Only handle JSON files
    if (requestUrl.pathname.endsWith(".json")) {
        // Handle requests for JSON files
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // If not in cache, fetch from network
                    return fetch(event.request).then((networkResponse) => {
                        return caches.open(CHARPLANNER_CACHE_NAME).then((cache) => {
                            // Cache the new version and return the response
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    });
                })
                .catch((_error) => {
                    //console.error('Service Worker: Fetch failed for JSON file', error);
                })
        );
    } else if (requestUrl.pathname.match(/\.(jpg|jpeg|png|gif|ico|webp|woff|woff2)$/)) {
        // Handle requests for images and fonts
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request).then((networkResponse) => {
                        return caches.open(ASSET_CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    });
                })
                .catch((_error) => {
                    //console.error('Service Worker: Fetch failed for asset', error);
                })
        );
    }
});