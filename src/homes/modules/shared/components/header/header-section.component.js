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

    this.images = [];
  }

  /**
   * Get all settings on load
   */
  init() {
    this.response =
      this.cache.get("settings")

    if (!this.response) {
      this.settings.list().then(res => {
        this.cache.set("settings", res);
        return res;
      }).then((res) => {
        this.setupSettings(res);
      });
    } else {
      this.setupSettings(this.response)
    }

    // view step1 of the advertisement application
    this.step = "step-1";
  }

  /**
   * Set up the general settings according to the response (cache or network)
   * 
   * @param {Object} response 
   */
  setupSettings(response) {
    this.currencies = response.currencies;

    this.info.email = response.settings["site.email"]
    this.info.phone = response.settings["site.phone"].slice(3);
  }

  /**
   * Duplicte the image input component
   * 
   * @param {DOMElement} $el
   */
  duplicateInput($el) {
    let input = $el.parentElement.children[0].cloneNode(true);
    // document.querySelector(".image-input").insertAdjacentHTML("afterbegin", input);
    document.querySelector(".image-input").appendChild(input);
    // echo(input)
  }

  /**
   * Add inputs to the dom on load
   */
  // addInputs() {
  //   echo(this.images)
  //   this.images.forEach(image => {
  //   })
  // }

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

    // add images input
    this.images.push(this.imageInput);

    // this.addInputs()
  }
}
