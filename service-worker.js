self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("chem-inventory-cache").then((cache) => {
      return cache.addAll([
        "/",
        "./index.html",
        "./styles.css",
        "./script.js",
        "./images/1.png",
        "./images/2.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
