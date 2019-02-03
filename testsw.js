const cacheName = 'exam-generator-cache-v1';

// Once the SW is installed, go ahead and fetch the resources to make this work offline
self.addEventListener('install', e => {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                './',
                './css/materialize.min.css',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
                './assets/images/icon-192x192.png'
            ]);
        })
    );
});

// When the browser fetches a url, either response with the cached object or fetch the actual url
self.addEventListener('fetch', event => {
    console.log('[ServiceWorker] Fetch');
    event.respondWith(
        caches.open(cacheName).then(cache => {
            return cache.match(event.request).then(res => {
                return res || fetch(event.request)
            });
        })
    );
});