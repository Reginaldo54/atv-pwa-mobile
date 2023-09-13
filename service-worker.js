var cacheName = 'atvpwa+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',
        
        './assets/css/main.css',

        './assets/css/images/arrow.svg',

        './assets/css/images/overlay.png',

        './assets/js/breakpoints.min.js',

        './assets/js/browser.min.js',

        './assets/js/jquery.min.js',
        
        './assets/js/jquery.scrollex.min.js',
        
        './assets/js/jquery.scrolly.min.js',

        './assets/js/main.js',
        
        './assets/js/util.js',

        './assets/js/popper.min.js',

        './assets/sass/main.scss',

        './assets/sass/libs/_breakpoints.scss',
        './assets/sass/libs/_functions.scss',
        './assets/sass/libs/_html-grid.scss',
        './assets/sass/libs/_mixins.scss',
        './assets/sass/libs/_vars.scss',
        './assets/sass/libs/_vendor.scss',

        './assets/webfonts/fa-brands-400.eot',
        './assets/webfonts/fa-brands-400.svg',
        './assets/webfonts/fa-brands-400.ttf',
        './assets/webfonts/fa-brands-400.woff',
        './assets/webfonts/fa-brands-400.woff2',
        
        './assets/webfonts/fa-regular-400.eot',
        './assets/webfonts/fa-regular-400.svg',
        './assets/webfonts/fa-regular-400.ttf',
        './assets/webfonts/fa-regular-400.woff',
        './assets/webfonts/fa-regular-400.woff2',

        './icons/128.png',
        './icons/144.png',
        './icons/152.png',
        './icons/167.png',
        './icons/180.png',
        './icons/192.png',
        './icons/256.png',
        './icons/512.png',
        './icons/1024.png',

        './images/bg.jpg',
        './images/pic01.jpg',
        './images/pic02.jpg',
        './images/pic03.jpg',
        './images/pic04.jpg',
        './images/pic05.jpg',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});