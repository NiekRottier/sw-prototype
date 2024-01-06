// Update version number when updating the service worker
const CACHE_VERSION = 'v1'
const SUPPORTED_CACHES = [CACHE_VERSION]
const precacheURLs = [
  '/',
  '/next-page',
  '/next-page/deeper-page',
  '/manifest.webmanifest'
]

const deleteOldCaches = async () => {
  const keyList = await caches.keys()
  const cachesToDelete = keyList.filter((key) => !SUPPORTED_CACHES.includes(key));
  cachesToDelete.forEach(cache => {
    console.log('Deleting cache:', cache)
    caches.delete(cache)
  })
}

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(CACHE_VERSION)
  await cache.addAll(resources)
};

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_VERSION)
  await cache.put(request, response);
}

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request)
  if (responseFromCache) {
    console.log('Response from cache')
    return responseFromCache
  }

  console.log('Fetching:', request.url)
  const responseFromNetwork = await fetch(request)
  putInCache(request, responseFromNetwork.clone())
  return responseFromNetwork
}

const networkFirst = async (request) => {
  try {
    console.log('Fetching:', request.url)
    const responseFromNetwork = await fetch(request)
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    console.warn('Failed to fetch, reverting to cache')
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
      console.log('Response from cache')
      return responseFromCache
    } else {
      console.error('No network or cache detected')
      return new Response("No network or cache detected", {
        status: 408,
        headers: { "Content-Type": "text/plain" },
      });
    }
  }
}

self.addEventListener('install', event => {
  console.log('Service worker installed')
  event.waitUntil(
    addResourcesToCache(precacheURLs),
  );
})

self.addEventListener('activate', event => {
  console.log('Service worker activated')
  deleteOldCaches()
})

self.addEventListener('fetch', event => {
  event.respondWith(networkFirst(event.request))
})