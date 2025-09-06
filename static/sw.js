// Service Worker for Performance Caching
// Provides faster loading through intelligent caching strategies

const CACHE_NAME = 'filippoguerranti-v1';
const STATIC_ASSETS = [
  '/',
  '/main.css',
  '/fonts.css',
  '/custom.css',
  '/syntax-theme-light.css',
  '/syntax-theme-dark.css',
  '/js/main.js',
  '/js/themetoggle.js',
  '/js/toc.js',
  '/js/codeblock.js',
  '/js/casetoggle.js',
  '/js/note.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cache successful responses for static assets
            const responseToCache = response.clone();
            const url = new URL(event.request.url);
            
            // Cache static assets (CSS, JS, fonts, images)
            if (url.pathname.match(/\.(css|js|woff2?|png|jpg|jpeg|svg|ico)$/)) {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});