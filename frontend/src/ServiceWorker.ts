//import { Workbox } from "workbox-window";

// export function registerServiceWorker() {
//     if ("serviceWorker" in navigator) {
//         const wb = new Workbox("/sw.js");

//         wb.addEventListener("installed", (event) => {
//             if (event.isUpdate) {
//                 console.log("A new service worker is available. Please refresh.");
//             }
//         });

//         wb.register().catch((error) => {
//             console.error("Service Worker registration failed:", error);
//         });
//     }
// }

declare let self: ServiceWorkerGlobalScope;

export function registerServiceWorker() {
    if (import.meta.env.MODE === "production" && "serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/ServiceWorker.js")
                .then((registration) => {
                    console.log("Service Worker registered with scope:", registration.scope);
                })
                .catch((error) => {
                    console.error("Service Worker registration failed:", error);
                });
        });
    }
    // if ("serviceWorker" in navigator) {
    //     // Ensure this runs on localhost or a secure HTTPS environment
    //     if (window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
    //         const wb = new Workbox('/sw.js');

    //         wb.addEventListener('installed', (event) => {
    //             if (event.isUpdate) {
    //                 console.log('A new service worker is available. Please refresh.');
    //             }
    //         });

    //         wb.register().catch((error) => {
    //             console.error('Service Worker registration failed:', error);
    //         });
    //     } else {
    //         console.error('Service workers are only supported on localhost or HTTPS.');
    //     }
    // } else {
    //     console.error('Service workers are not supported in this browser.');
    // }
}

const currentVersion = String(import.meta.env.VITE_CHARPLANNER_DATA_VERSION);
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
self.addEventListener("install", (event: ExtendableEvent) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(JSON_FILES_TO_CACHE);
        })
    );
});

// Activate event - Clear old caches if the cache name has changed
self.addEventListener("activate", (event: ExtendableEvent) => {
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
self.addEventListener("fetch", (event: FetchEvent) => {
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