importScripts('workbox-sw.prod.v2.0.3.js');

// Create Workbox service worker instance
const workboxSW = new WorkboxSW({ clientsClaim: true });

// Placeholder array which is populated automatically by workboxBuild.injectManifest()
// workboxSW.precache(['static/css/home.style.css']);

workboxSW.precache([
  {
    "url": "static/css/home.style.bundle.js",
    "revision": "77df776f6cf13f1b762fbf930bbe9b45"
  },
  {
    "url": "static/css/home.style.css",
    "revision": "0fddd3f03ce9758f6c7485f7be52057c"
  },
  {
    "url": "static/js/anotherpage.bundle.js",
    "revision": "ef42b6123e785c3252dc2f041729cd45"
  },
  {
    "url": "static/js/commons.js",
    "revision": "8c0548fd87b75ae8de2eaa9d0b0b636d"
  },
  {
    "url": "static/js/home.bundle.js",
    "revision": "78eba047e8bbdf8a3241d0991d0ca2ff"
  },
  {
    "url": "static/js/search.bundle.js",
    "revision": "4bdff0be2c14f10dc87de20847b1e355"
  }
])

workboxSW.router.registerRoute('/bolig/**',
  workboxSW.strategies.cacheFirst({
    cacheName: 'bolig',
    cacheExpiration: {
      maxEntries: 20,
      maxAgeSeconds: 60 * 60 * 24
    }
  })
);

workboxSW.router.registerRoute('https://services.kortforsyningen.dk/**',
  workboxSW.strategies.cacheFirst({
    cacheName: 'kort',
    cacheExpiration: {
      maxEntries: 20,
      maxAgeSeconds: 60 * 60 * 24
    }
  })
);
