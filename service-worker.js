self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("zqf-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "about.html",
        "books.html",
        "courses.html",
        "krishna.html",
        "contact.html"
      ]);
    })
  );
});
