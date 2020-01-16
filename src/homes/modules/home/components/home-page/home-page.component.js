class HomePage {
  /**
   * Constructor
   */
  constructor(settingsService, propertiesService, cache) {
    this.name = "home";
    this.title = "Homes Egypt";

    this.cache = cache;

    this.settingsService = settingsService;

    this.propertiesService = propertiesService;

    // show the corresponding form
    this.searchForm = {
      type: "rent", // "rent" / "sale" / "commercial" / new_homes
      regions: [],
      compounds: [],
      currencies: [],
      chosenRegions: [],
      propertyTypes: [],
      typesAvailable: [
        { label: "for rent", value: "rent" },
        { label: "sale", value: "sale" },
        { label: "commercial", value: "commercial" },
        { label: "new homes", value: "new_homes" }
      ],
      featuredRegions: []
    };

    // properties
    this.properties = [];
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.settingsService.list().then(response => {
      // echo(response.featuredRegions)

      // get regions
      this.searchForm.regions = response.regions;

      // match regions' ids with the corresponding region
      response.featuredRegions.map(regionId => {
        this.searchForm.regions.forEach(region => {
          if (region.id === regionId) {
            this.searchForm.featuredRegions.push(region);
            return;
          }
        });
      });

      // get properties types
      this.searchForm.propertyTypes = response.propertyTypes;

      // get currencies
      this.searchForm.currencies = response.currencies;

      // get compounds
      this.searchForm.compounds = response.compounds;
    });
  }

  /**
   * Remove chosen region from chosenRegions list
   *
   * @param {DOMElement} $el
   * @param {number} index
   */
  removeChosenRegion($el, index) {
    // remove from DOM
    $el.parentElement.remove();

    // remove from the list
    this.searchForm.chosenRegions.splice(index, 1);
  }

  /**
   * Activate form type
   *
   * @param {DOMElement} $el
   * @param {Object} type
   */
  activateType($el, type) {
    // set the type of the form type
    this.searchForm.type = type.value;

    // remove "type-active" from other buttons
    for (
      let index = 0;
      index < document.querySelectorAll(".types-panel-btn").length;
      index++
    ) {
      let childEl = document.querySelectorAll(".types-panel-btn")[index];

      if (childEl.classList.contains("type-active")) {
        childEl.classList.remove("type-active");
      }
    }

    // add "type-active" class to the clicked button"
    $el.classList.add("type-active");
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
   * @param {Object} event
   * @param {DOMElement} $el
   */
  getProperties(event, $el) {
    event.preventDefault();
    let formQueries = {};

    // convert form values into object
    Object.values($el).forEach(field => {
      if (!field.name || field.value.trim() == "") {
        return;
      }
      formQueries[field.name] = field.value;
    });

    // add chosen regions list to the form
    formQueries.regions = this.searchForm.chosenRegions;

    // add form type
    formQueries.sale_type = this.searchForm.type;

    // get the list
    this.propertiesService.list(formQueries).then(response => {
      this.properties = response.properties;
      echo(response.properties);
    });
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {
    // add the active class on rental button after the dom is ready
    for (
      let index = 0;
      index < document.querySelectorAll(".types-panel-btn").length;
      index++
    ) {
      let childEl = document.querySelectorAll(".types-panel-btn")[index];

      if (childEl.dataset.type == this.searchForm.type) {
        childEl.classList.add("type-active");
      } else {
        childEl.classList.remove("type-active");
      }
    }
  }
}
