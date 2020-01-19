// This is just for encapsulation so it doesn't conflict with other global variables.
(function() {
  // run any operations here
  // this file is loaded before the router is ready so you can subscribe to events or run initial operations here.
  // Please DO NOT write any instant executable code outside the ready method.
  let events = DI.resolve("events");

  // inject the cache package
  let cache = DI.resolve("cache");

  // once the application is ready, execute the given callback to
  // the event before the router scanner starts.
  events.on("app.ready", () => {
    // add currency to cache on load the app
    if (!cache.get("currency")) cache.set("currency", "EGP");   
  });
})();

// let settings = cache.get('settings')

// shareable.share('settings', settings)

// if (shareableeeeeeeeeeeeeeee.isSharing('settings')) {
//   let test = shareable.getShared('settings')
// } else {
//   shareable.observe('settings', settings => {
//     test = t;
//   });
// }

function imageUrl(image) {
  return "https://homes-egypt.com/public/" + image;
}
