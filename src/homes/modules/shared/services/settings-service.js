class SettingsService extends Endpoint.Service {
  constructor(router, events) {
    super();
    this.router = router;

    this.events = events;
  }

  /**
   * {@inheritDoc}
   */
  boot() {
    this.setRoute("/settings");
    this.cacheMap = {
      list: "generalSettings"
    };
  }

  async currentCurrency() {
    if (this.cache.has('currency')) {
      return this.cache.get('currency');
    }

    let currencyCode = this.router.queryString.get('currency');

    if (!currencyCode) {
      return {
        value: 'default',
        code: 'Default',
      }
    }

    let { currencies } = await this.cached('list');

    return currencies.find(currencyElement => currencyElement.code == currencyCode);
  }

  getCurrencyByCode(currencyCode) {
    return window.settings.currencies.find(currencyObject => currencyObject.code == currencyCode);
  }

  updateCurrency(currency) {
    if (Is.string(currency)) {
      currency = this.getCurrencyByCode(currency);
    }

    window.currentCurrency = currency;
    this.cache.set('currency', currency);

    this.events.trigger("currency.change", currency);
  }

  cities() {
    return this.endpoint.get('/cities');
  }

  info(callback) {
    this.cached('list').then(response => {
      callback({
        email: response.settings["site.email"],
        phone: response.settings["site.phone"],
      });
    });
  }
}

DI.register({
  class: SettingsService,
  alias: "settingsService"
});
