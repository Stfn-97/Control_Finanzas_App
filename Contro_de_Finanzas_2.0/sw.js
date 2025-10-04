const CACHE_NAME = 'finance-control-v1';
const URLS_TO_CACHE = [
    '/',
    '/index.html'
];

// Evento de instalación: se abre el caché y se agregan los archivos principales.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Evento de activación: limpia cachés antiguos si es necesario.
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


// Evento fetch: intercepta las solicitudes de red.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache First: Si la respuesta está en el caché, la retorna.
                if (response) {
                    return response;
                }
                
                // Si no, la busca en la red.
                return fetch(event.request).then(
                    networkResponse => {
                        // Si la solicitud es válida, la clona y la guarda en caché para futuras visitas.
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return networkResponse;
                    }
                );
            })
    );
});