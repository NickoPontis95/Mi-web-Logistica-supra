const CACHE_NAME = "logistica-supra-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./index2.html",
    "./index3.html",
    "./index4.html",
    "./manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ARCHIVOS);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((nombres) => {
            return Promise.all(
                nombres
                    .filter((nombre) => nombre !== CACHE_NAME)
                    .map((nombre) => caches.delete(nombre))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((respuesta) => {
            return respuesta || fetch(event.request);
        })
    );
});const CACHE_NAME = "logistica-supra-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./index2.html",
    "./index3.html",
    "./index4.html",
    "./manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ARCHIVOS);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((nombres) => {
            return Promise.all(
                nombres
                    .filter((nombre) => nombre !== CACHE_NAME)
                    .map((nombre) => caches.delete(nombre))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((respuesta) => {
            return respuesta || fetch(event.request);
        })
    );
});const CACHE_NAME = "logistica-supra-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./index2.html",
    "./index3.html",
    "./index4.html",
    "./manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ARCHIVOS);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((nombres) => {
            return Promise.all(
                nombres
                    .filter((nombre) => nombre !== CACHE_NAME)
                    .map((nombre) => caches.delete(nombre))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((respuesta) => {
            return respuesta || fetch(event.request);
        })
    );
});