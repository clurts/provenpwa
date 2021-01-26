if('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(reg => console.log("the service worker was registered", reg))
        .catch(err => console.log("There was an error...", err));
}
console.log(navigator);
