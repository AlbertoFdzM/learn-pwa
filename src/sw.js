/* globals caches fetch */
// Use a cacheName for cache versioning
var cacheName = 'v1:static'

// During the installation phase, you'll usually want to cache static assets.
this.addEventListener('install', function (ev) {
  // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
  ev.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        './',
        './css/style.css',
        './knockout-latest.debug.js',
        './page.js',
        './arrivals.js',
        './main.js',
        './css/fonts/roboto.woff',
        './offline.html'
      ]).then(function () {
        this.skipWaiting()
      })
    })
  )
})

// when the browser fetches a URL…
this.addEventListener('fetch', function (event) {
  // … either respond with the cached object or go ahead and fetch the actual URL
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        // retrieve from cache
        return response
      }
      // fetch as normal
      return fetch(event.request)
    })
  )
})
