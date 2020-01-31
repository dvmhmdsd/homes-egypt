// This is just for encapsulation so it doesn't conflict with other global variables.
(function () {
  // run any operations here
  // this file is loaded before the router is ready so you can subscribe to events or run initial operations here.
  // Please DO NOT write any instant executable code outside the ready method.
  let events = DI.resolve("events");

  // inject the cache package
  let cache = DI.resolve("cache");

  // once the application is ready, execute the given callback to
  // the event before the router scanner starts.
  events.on("app.ready", async app => {
    let router = DI.resolve('router'),
    settingsService = DI.resolve("SettingsService");

    let currency = router.queryString.get('currency');

    app.hold(
      `
      <div class="loader-container d-flex justify-content-center align-items-center">
        <div class="loader"></div>
    </div>
      `
    );

    window.settings =  await settingsService.live.cached('list');

    if (currency) {
      settingsService.updateCurrency(currency);
    }

    settingsService.currentCurrency().then(currency => {
      window.currentCurrency = currency;
    });

    settingsService.live.cached('cities');

    app.resume();
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

// function initMap(position) {
//   // The map
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 17, center: position});
//   // The marker
//   var marker = new google.maps.Marker({position, map: map});
// }


function currencyConverter(value, currencyCode = null) {  
  let { currencies } = window.settings;

  if (!currencyCode) {
    let currentCurrency = window.currentCurrency;
    currencyCode = currentCurrency.code;
  }

  let convertedCurrency = currencies.find(currency => currency.code == currencyCode);
  // current currency

  value = Number(value);

  // conversion equation: price * current currency value / given currency value
  return Math.floor(
    value * Number(window.currentCurrency.value) / Number(convertedCurrency.value),
  );
}
