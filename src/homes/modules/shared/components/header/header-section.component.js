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

    this.info = {};
  }

  /**
   * Get all settings on load
   */
  init() {
    let response =
      this.cache.get("settings") ||
      this.settings.list().then(res => {
        this.cache.set("settings", response);
        return res;
      });

      this.currencies = response.currencies;

      this.info.email = response.settings["site.email"]
      this.info.phone = response.settings["site.phone"].slice(3);
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
