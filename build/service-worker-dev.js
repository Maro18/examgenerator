// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.
// See https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432

const cacheName = 'exam-generator-cache-v1';

// Once the SW is installed, go ahead and fetch the resources to make this work offline
self.addEventListener('install', e => {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '../',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            ]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', () => {
    console.log('[ServiceWorker] Activate');
    self.clients.matchAll({ type: 'window' }).then(windowClients => {
        for (let windowClient of windowClients) {
            // Force open pages to refresh, so that they have a chance to load the
            // fresh navigation response from the local dev server.
            windowClient.navigate(windowClient.url);
        }
    });
});