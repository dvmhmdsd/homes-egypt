class SettingsService extends Endpoint.Service {
  constructor(router) {
    super();
    this.router = router;
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

  currentCurrency() {
    return this.cache.get('currency') || this.router.queryString.get('currency') || 'USD';
  }

  updateCurrency(currency) {
    this.cache.set('currency', currency);
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
