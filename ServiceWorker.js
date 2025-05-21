const cacheName = "Magnimus-Laser Tennis-0.1.0";
const contentToCache = [
    "Build/c927953e9bc164eb8fe1f47d782abeb6.loader.js",
    "Build/1420ead20126458e8dbd6669cb74510f.framework.js",
    "Build/1d6337852686aed57561f9223c6ebe43.data",
    "Build/874243c50fa9ac9c55735cb9623047ad.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
