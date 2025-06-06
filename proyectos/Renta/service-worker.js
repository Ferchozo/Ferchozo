const CACHE_NAME = 'rentabilidad-v1';
const urlsToCache = [
  '/',
  '/renta.html',
  '/renta.css',
  '/renta.js',
  '/libs/xlsx.full.min.js',
  '/renta2.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
