const CACHE = 'hanzi-v1';
const URLS = [
    '/Hanzi/index.html',
    '/Hanzi/manifest.json',
    '/Hanzi/css/themes.css',
    '/Hanzi/js/firebase-init.js',
    '/Hanzi/js/themes.js',
    '/Hanzi/data/hsk-data.js',
    '/Hanzi/icons/icon-192.svg',
    '/Hanzi/icons/icon-512.svg',
    '/Hanzi/pages/login.html',
    '/Hanzi/pages/register.html',
    '/Hanzi/pages/marks.html',
    '/Hanzi/pages/grammar.html',
    '/Hanzi/pages/profile.html'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE).then(function(c) {
            return c.addAll(URLS);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(r) {
            return r || fetch(e.request).then(function(res) {
                return caches.open(CACHE).then(function(c) {
                    c.put(e.request, res.clone());
                    return res;
                });
            });
        })
    );
});
