import {setDefaultHandler} from 'workbox-routing';
import {NetworkFirst} from 'workbox-strategies';

const cacheName = 'install-cache'
const precacheURLs = [
  '/',
  '/new-page',
  '/new-page/deeper-page',
  '/manifest.webmanifest'
]

// On install precache the defined URLs
self.addEventListener('install', (event) => {
  const populateCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(precacheURLs);
  };

  event.waitUntil(populateCache());
});

// For all routes use NetworkFirst strategy
// Write to the same cache to  overwrite the precached routes
setDefaultHandler(
  new NetworkFirst({cacheName})
)