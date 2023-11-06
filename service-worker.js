// Service worker installation event
self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
  });
  
  // Service worker activation event
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
  });
  
  // Service worker fetch event
  self.addEventListener('fetch', function(event) {
    console.log('Fetching: ', event.request.url);
    event.respondWith(fetch(event.request));
  });