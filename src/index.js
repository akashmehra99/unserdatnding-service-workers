const APP = {
  SW: null,
  init() {
    if ("serviceWorker" in navigator) {
      // Register service worker hosted on the root of site using default scope
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/",
        })
        .then((registration) => {
          APP.SW =
            registration.installing ||
            registration.waiting ||
            registration.active;
          console.log("Service worker registered");
        })
        .catch((error) =>
          console.log("Not able to register service worker =>", error)
        );

      // Check if page already has a service worker
      if (navigator.serviceWorker.controller) {
        console.log("we have a service worker installed");
      }

      // Register a handler to detect when a new or updated sw is installed and active
      navigator.serviceWorker.oncontrollerchange = (event) => {
        console.log("new service worker activated => ", event);
      };

      // Remove / unregister sw
      //    navigator.serviceWorker.getRegistrations().then((registrations) => {
      //        for (let reg of registrations) {
      //            reg.unregister().then((isUnReg) => console.log(reg, " is unregistered => ", isUnReg));
      //        }
      //    })
      
      // Listen for messages from sw
      
    } else {
      console.error("Service worker not supported");
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
