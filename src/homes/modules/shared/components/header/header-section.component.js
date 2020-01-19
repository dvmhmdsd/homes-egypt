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
      this.cache.get("settings")

    if (response) {
      this.settings.list().then(res => {
        this.cache.set("settings", res);
        return res;
      }).then((res) => {
        this.setupSettings(res);
      });
    } else {
      this.setupSettings(response)
    }

    // view step1 of the advertisement application
    this.step = "step-1";
  }

  setupSettings(response) {
    this.currencies = response.currencies;

    this.info.email = response.settings["site.email"]
    this.info.phone = response.settings["site.phone"].slice(3);
  }

  /**
   * Watch the step property if it's changed -> change the button class
   */
  watchStep() {
    if (this.step == "step-1") {
      this.stepOneBtn.classList.add("btn-active")
      this.stepTwoBtn.classList.remove("btn-active")
    } else if (this.step == "step-2") {
      this.stepOneBtn.classList.remove("btn-active")
      this.stepTwoBtn.classList.add("btn-active")
    }
  }

  /**
   * Set the cache with the currency value
   */
  setCurrency(el) {
    this.cache.set("currency", el.dataset.currency);

    // reload the page to update the data
    this.router.refresh();
  }

  ready() {
    this.watchStep();
  }
}
