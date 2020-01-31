class Header {
  /**
   * {@inheritDoc}
   */
  constructor(settingsService, cache, router) {
    // currencies of the website
    this.currencies = [];

    this.settingsService = settingsService;

    this.cache = cache;

    this.router = router;

    this.info = {};
  }

  /**
   * Get all settings on load
   */
  async init() {
    this.currentRoute = this.router.route();
    this.queryStringSaleType = this.router.queryString.get('sale_type');

    this.settingsService.cached("list").then(response => {
      this.types = response.propertyTypes;

      this.info = {
        email: response.settings["site.email"],
        phone: response.settings["site.phone"].slice(3)
      };

      this.currencies = response.currencies;
    });
  }

  /**
   * Set the cache with the currency value
   */
  setCurrency(currency) {
    this.settingsService.updateCurrency(currency);

    this.currentCurrency = currency;

    this.detectChanges()
  }

  ready() {

  }
}
