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

    settingsService.live.cached('list').then(response => {
      window.settings = response;

      window.settings.currencies.unshift({
        value: 'default',
        code: 'Default',
      });

      if (currency) {
        settingsService.updateCurrency(currency);
      }

      settingsService.currentCurrency().then(currency => {
        window.currentCurrency = currency;
        app.resume();
      });

    });
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


/**
 * Convert the given value from the given currency to current currency
 * 
 * @param {object} property 
 */
function currencyConverter(property) {
  // the price value is given in USD 
  return Math.floor(
    Number(property.priceInDollar) / Number(window.currentCurrency.value),
  ).format();
  let { currencies } = window.settings;

  if (!currencyCode) {
    let currentCurrency = window.currentCurrency;
    currencyCode = currentCurrency.code;
  }

  let convertedCurrency = currencies.find(currency => currency.code == currencyCode);
  // current currency

  // conversion equation: price * current currency value / given currency value
  return Math.floor(
    value * Number(window.currentCurrency.value) / Number(convertedCurrency.value),
  );
  echo(convertedCurrency.value)
  return Math.floor(
    1 / Number(convertedCurrency.value) * value,
  );
}


function setting(key) {
  return window.settings.settings[key] || null;
}

