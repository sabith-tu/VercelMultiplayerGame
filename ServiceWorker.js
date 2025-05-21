const cacheName = "Magnimus-Laser Tennis-0.1.0";
const contentToCache = [
    "Build/0443cb0b565f2da3e778394a384ad8cc.loader.js",
    "Build/1420ead20126458e8dbd6669cb74510f.framework.js",
    "Build/891ba57d47195b78116fb32b79e0d29f.data",
    "Build/fe8a8c156c8584091c0aeb17f8e50f0c.wasm",
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
