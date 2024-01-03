self.addEventListener('install', event => {
  console.log('Service worker installed')
})

self.addEventListener('activate', event => {
  console.log('Service worker activated')
})

const putInCache = async (request, response) => {
  const cache = await caches.open('vanilla-sw-cache-v1');
  await cache.put(request, response);
}

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request)
  if (responseFromCache) {
    console.log('Response from cache')
    return responseFromCache
  }

  console.log('Fetching ', request.url);
  const responseFromNetwork = await fetch(request)
  putInCache(request, responseFromNetwork)
  return responseFromNetwork
}

self.addEventListener('fetch', event => {
  event.respondWith(cacheFirst(event.request))
})