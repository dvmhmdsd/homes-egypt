class Searchform {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(cache, settingsService, router, propertiesService) {
    this.loadingSearch;

    this.router = router;

    this.cache = cache;

    this.settingsService = settingsService;

    this.propertiesService = propertiesService;

    // show the corresponding form
    this.searchForm = {
      type: "rent", // "rent" / "sale" / "commercial" / new-homes
      regions: [],
      compounds: [],
      currencies: [],
      chosenRegions: [],
      chosenRegionsNames: [],
      propertyTypes: [],
      typesAvailable: [
        { label: "for rent", value: "rent" },
        { label: "sale", value: "sale" },
        { label: "commercial", value: "commercial" },
        { label: "new homes", value: "new-homes" }
      ],
      featuredRegions: []
    };

    // properties will be passed to the home page
    this.properties;

    this.activateForm();
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    let response =
      this.cache.get("settings");

    if (!response) {
      this.settingsService.list().then(res => {
        this.cache.set("settings", res);
        return res;
      }).then((res) => {
        this.setupSettings(res);
      })
    } else {
      this.setupSettings(response);
    }
  }

  setupSettings(response) {
    // get regions
    this.searchForm.regions = response.regions;

    // match regions' ids with the corresponding region
    this.searchForm.regions.forEach(region => {
      if (
        Array.get(
          response.featuredRegions,
          regionItem => regionItem == region.id
        ) &&
        this.searchForm.featuredRegions.length < response.featuredRegions.length
      ) {
        this.searchForm.featuredRegions.push(region);
      }
    });

    // add featuredRegions to cache to use in other places
    this.cache.set("featuredRegions", this.searchForm.featuredRegions);

    // get properties types
    this.searchForm.propertyTypes = response.propertyTypes;

    // get currencies
    this.searchForm.currencies = response.currencies;

    // get compounds
    this.searchForm.compounds = response.compounds;
  }

  /**
   * Get region object with its name
   */
  getRegion(name) {
    return Array.get(this.searchForm.regions, reg => reg.name == name);
  }

  /**
   * Add a region to the chosen region
   *
   * @param {Object} region
   */
  chooseRegion(region) {
    let chosenRegions = this.searchForm.chosenRegions;
    let chosenRegionsNames = this.searchForm.chosenRegionsNames;

    region = this.getRegion(region);

    // add region to the array if it's empty
    if (chosenRegions.length === 0) {
      chosenRegions.push(region.id);
      chosenRegionsNames.push(region.name);
      return;
    } else {
      // count all the similar regions in the chosenRegions Array
      let similarRegionsCounter = 0;
      for (let chRegion of chosenRegions) {
        if (chRegion.id === region.id) {
          similarRegionsCounter++;
          break;
        }
      }

      // Don't add the region if there's similar regions in the chosen regions in the array
      if (similarRegionsCounter === 0) {
        chosenRegions.push(region.id);
        chosenRegionsNames.push(region.name);
      }
    }
  }

  /**
   * Remove chosen region from chosenRegions list
   *
   * @param {DOMElement} $el
   * @param {Number} index
   */
  removeChosenRegion($el, index) {
    // remove from DOM
    $el.parentElement.remove();

    // remove from the list
    this.searchForm.chosenRegions.splice(index, 1);
  }

  /**
   * Update URL after getting properties
   *
   * @param {Object} options
   */
  updateURL(options) {
    // update url
    let query = Object.keys(options)
      .map(key => key + "=" + options[key])
      .join("&");

    this.router.navigateTo(`/?${query}`);
  }

  /**
   * Make query object form form values
   *
   * @param {DOMElement} $el
   * @returns {Object}
   */
  makeQueryObject($el) {
    let formQueries = {};

    // convert form values into object
    $el.querySelectorAll("input").forEach(field => {
      if (!field.name || field.value.trim() == "") {
        return;
      }
      formQueries[field.name] = field.value;
    });

    // add chosen regions list to the form
    if (this.searchForm.chosenRegions.length > 0)
      formQueries["regions"] = this.searchForm.chosenRegions;

    // add form type
    formQueries.sale_type = this.searchForm.type;

    return formQueries;
  }

  /**
   * Get the types of commercial
   */
  getCommercialTypes() {
    return this.searchForm.propertyTypes.filter(type => {
      return type.id == "7" || type.id == "8";
    });
  }

  /**
   * Get the types of new homes
   */
  getCompoundsTypes() {
    return this.searchForm.propertyTypes.filter(type => {
      return type.id !== "7" || type.id !== "8";
    });
  }

  /**
   * Submit form with form values to get properties
   *
   * @param {DOMElement} $el
   */
  getProperties($el) {
    let options = this.makeQueryObject($el);

    this.loadingSearch = true;

    // get the list
    this.propertiesService.list(options).then(response => {
      this.properties = response.properties;
      this.loadingSearch = false;

      this.updateURL(options);
    });

    // pass the properties comes from search into the home page
    let searchCallback = this.inputs.getEvent("search");

    searchCallback(this.properties);
  }

  /**
   * Activate form type according query
   */
  activateForm() {
    let type = this.router.queryString.all()["sale_type"];

    // activate form
    if (type) this.searchForm.type = type;
    else this.searchForm.type = "rent";
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {
    // add the active class on rental button after the dom is ready
    for (let index = 0; index < this.buttonsPanel.length; index++) {
      let childEl = this.buttonsPanel[index];

      if (childEl.dataset.type == this.searchForm.type) {
        childEl.classList.add("type-active");
      } else {
        childEl.classList.remove("type-active");
      }
    }
  }
}
