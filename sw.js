
self.addEventListener("install", (event) => {
    console.log("SW installing");
});

self.addEventListener("activate", (event) => {
    console.log("SW activate");
});

self.addEventListener("fetch", (event) => {
    console.log("SW fetch =>", event.request);
});

self.addEventListener("messgae", (event) => {
    console.log("SW message");
});
