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
      currency: this.cache.get('currency'),
      type: "rent", // "rent" / "sale" / "commercial" / new-homes
      regions: [],
      compounds: [],
      currencies: [],
      chosenRegions: [],
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
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.regionsList = [];
    this.numbersArray = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9, 10];
    this.searchForm = Object.merge(this.searchForm, this.router.queryString.all());

    if (! this.searchForm.type) {
      this.searchForm.type = 'rent';
    }
    
    let response =
      this.cache.get("generalSettings");

    if (!response) {
      this.settingsService.list().then(res => {
        this.cache.set("generalSettings", res);
        this.setupSettings(res);
      })
    } else {
      this.setupSettings(response);
    }
  }

  setupSettings(response) {
    this.searchForm.regions = response.regions;
    // get regions
    this.regionsList = response.regions.map(region => {
      return {
        text: region.name,
        value: region.id,
      };
    });

    this.searchForm.featuredRegions = response.regions.filter(region => {
      return response.featuredRegions.includes(region.id); 
    });

    if (! Is.empty(this.searchForm.regions)) {
      this.searchForm.chosenRegions = response.regions.filter(region => this.searchForm.regions.includes(region.id));
    }

    // add featuredRegions to cache to use in other places
    this.cache.set("featuredRegions", this.searchForm.featuredRegions);

    // get properties types
    this.searchForm.propertyTypes = response.propertyTypes.map(type => {
      return {
        text: type.name,
        value: type.id,
      };
    });
    
    this.numbersArray = this.numbersArray.map((num, index) => {
      return {
        text: `${index + 1}`,
        value: index + 1
      }
    });

    // get compounds
    this.searchForm.compounds = response.compounds.map(compound => {
      return {
        text: compound.id,
        value: compound.name,
      };
    });

    this.currencies = response.currencies.map(currency => {
      return {
        text: currency.code,
        value: currency.code,
      };
    });
  }

  /**
   * Add a region to the chosen region
   *
   * @param {Object} region
   */
  chooseRegion(region) {
    echo(region)
    if (typeof region != "object") {
      region = this.searchForm.regions.find((regionItem) => {
        return regionItem.name === region
      });
    }
    Array.pushOnce(this.searchForm.chosenRegions, region);
  }


  /**
   * Remove chosen region from chosenRegions list
   *
   * @param {DOMElement} $el
   * @param {Number} index
   */
  removeChosenRegion(index) {
    // remove from the list
    this.searchForm.chosenRegions.splice(index, 1);
  }
  
  /**
   * Submit form with form values to get properties
   *
   * @param {DOMElement} $el
   */
  getProperties($el) {
    let queryString = $($el).serializeArray().filter(function (i) {
      return i.value;
    });

    queryString.push({
      name: 'sale_type',
      value: this.searchForm.type,
    });

    return this.router.navigateTo(`/?${$.param(queryString)}`);
  }
}
