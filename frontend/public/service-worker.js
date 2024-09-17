const currentVersion = "v1-19-0";
const CACHE_NAME = `charplanner-data-cache-${currentVersion}`;

// List of JSON files to cache
const JSON_FILES_TO_CACHE = [
    `/data/AttackElementCorrectParam-${currentVersion}.json`, // File with version in name
    `/data/CalcCorrectGraphEz-${currentVersion}.json`,
    `/data/CompatibleAowData-${currentVersion}.json`,
    `/data/ConsumableData-${currentVersion}.json`,
    `/data/EffectData-${currentVersion}.json`,
    `/data/EquipParamProtector-${currentVersion}.json`,
    `/data/EquipParamWeapon-${currentVersion}.json`,
    `/data/ReinforceParamWeapon-${currentVersion}.json`,
    `/data/StatusEffectData-${currentVersion}.json`,
    `/data/WeaponsData-${currentVersion}.json`,
];

// Install event - Caching the JSON files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Service Worker: Caching files");
                return cache.addAll(JSON_FILES_TO_CACHE);
            })
            .catch((error) => {
                console.error("Service Worker: Failed to cache during install", error);
            })
    );
    self.skipWaiting(); // Force activation of new service worker
});

// Activate event - Clear old caches if the cache name has changed
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - Serve cached JSON or fetch from the network
self.addEventListener("fetch", (event) => {
    const requestUrl = new URL(event.request.url);

    // Only handle JSON files
    if (requestUrl.pathname.endsWith(".json")) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                // If not in cache, fetch from network
                return fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        // Cache the new version and return the response
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    }
});