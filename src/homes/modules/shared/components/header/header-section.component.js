class Header {
  /**
   * {@inheritDoc}
   */
  constructor(settingsService, cache, router) {
    // currencies of the website
    this.currencies;

    this.settings = settingsService;

    this.cache = cache;

    this.router = router;
  }

  /**
   * Get all settings on load
   */
  init() {
    this.settings.list().then(response => {
      // add the currencies comes from backend into the currencies array
      this.currencies = response.currencies;
    });
  }

  /**
   * Set the cache with the currency value
   */
  setCurrency(el) {
    this.cache.set("currency", el.dataset.currency);

    // reload the page to update the data
    this.router.refresh();
  }
}
