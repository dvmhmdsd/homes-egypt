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
    this.defaultSearch = {
      currency: '',
      minArea: '',
      maxArea: '',
      minBeds: '',
      maxBeds: '',
      minPrice: '',
      maxPrice: '',
      compound_id: null,
      sale_type: "", // "rent" / "sale" / "commercial" / new-homes
      regions: [],
      compounds: [],
      type: '',
      currencies: [],
      chosenRegions: [],
      propertyTypes: [],
      typesAvailable: [
        { label: "Rent", value: "rent" },
        { label: "sale", value: "sale" },
        { label: "Commercial", value: "commercial" },
        { label: "New Homes", value: "new-homes" }
      ],
    };

    this.featuredRegions = [];
    // properties will be passed to the home page
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  async init() {
    this.areaSizes = [];

    this.compoundList = [];

    for (let size = 50; size <= 4000; size += 50) {
      this.areaSizes.push({
        text: size.format() + ' meter',
        value: size,
      });
    }

    this.regionsPlaceholder = 'Select Location';
    this.searchForm = Object.clone(this.defaultSearch);
    this.regionsList = [];
    this.currencies = [];
    this.propertyTypes = [];
    this.numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
      return {
        text: String(number),
        value: number,
      };
    });

    this.settingsService.cached('list').then(response => {
      this.setupSettings(response);
    });
  }

  setupSettings(response) {
    this.settings = response;
    this.setPropertyTypes();

    this.searchForm = Object.merge(this.searchForm, this.router.queryString.all());

    // get regions
    this.originalRegions = response.regions;
    this.regionsList = response.regions.map(region => {
      return {
        text: region.name,
        value: region.id,
      };
    });

    this.featuredRegions = response.regions.filter(region => {
      return response.featuredRegions.includes(region.id);
    });

    if (!Is.empty(this.searchForm.regions)) {
      this.searchForm.chosenRegions = response.regions.filter(region => this.searchForm.regions.includes(region.id));

      this.collectCompounds();
    }

    // add featuredRegions to cache to use in other places
    this.cache.set("featuredRegions", this.featuredRegions);

    // get compounds
    this.compounds = response.compounds.map(compound => {
      return {
        text: compound.name,
        value: compound.id,
      };
    });

    this.smallerCompound = false;
    this.muchSmallerCompound = false;
    this.smallerType = false;
    let currentCompound = response.compounds.find(compound => compound.id == Number(this.searchForm.compound_id));

    if (currentCompound) {
      this.smallerCompound = currentCompound.name.includes(' ');
      this.muchSmallerCompound = currentCompound.name.repeatsOf(' ') >= 2;
    }

    let currentType = response.propertyTypes.find(type => type.id == Number(this.searchForm.type));

    if (currentType) {
      this.smallerType = currentType.name.includes(' ');
    } 

    this.currencies = response.currencies.map(currency => {
      return {
        text: currency.code,
        value: currency.code,
      };
    });
  }

  /**
   * Update sale type
   */
  updateSaleType(saleType) {
    if (this.searchForm.sale_type != 'commercial' && saleType == 'commercial') {
      this.searchForm.type = '';
    } else if (this.searchForm.sale_type == 'commercial' && saleType != 'commercial') {
      this.searchForm.type = '';
    }

    this.searchForm.sale_type = saleType;

    this.setPropertyTypes();
  }

  setPropertyTypes() {
    this.searchForm.type = null;
    // if sale type is commercial, then it will be only retail or office
    // other types will be the rest of the types
    // get properties types
    this.propertyTypes = this.settings.propertyTypes.filter(type => {
      return this.searchForm.sale_type == 'commercial' ?
        ['7', '8'].includes(type.id) :
        !['7', '8'].includes(type.id);
    });
  }

  /**
   * Reset Search form data
   */
  resetSearch() {
    this.searchForm = Object.clone(this.defaultSearch);
  
    this.smallerCompound = false;
    this.smallerType = false;

    // navigate to default url
    // this.router.navigateTo('/');
  }

  /**
   * Add a region to the chosen region
   *
   * @param {Object} region
   */
  chooseRegion(region) {
    this.searchForm.region = null;

    if (!region) return;

    this.regionsPlaceholder = 'Select More Locations';

    this.searchForm.region = Random.id();

    if (Is.numeric(region)) {
      region = this.originalRegions.find(regionItem => String(regionItem.id) == String(region));
    }

    Array.pushOnce(this.searchForm.chosenRegions, region);

    this.collectCompounds();
  }

  collectCompounds() {
    let selectedRegionsIds = collect(this.searchForm.chosenRegions).pluck('id').toArray();
    
    this.compoundList = this.settings.compounds.filter(compound => selectedRegionsIds.includes(compound.region_id));    

    if (this.searchForm.compound_id && ! this.compoundList.find(compound => compound.id == this.searchForm.compound_id)) {
      this.muchSmallerCompound = this.smallerCompound = false;
      this.searchForm.compound_id = null;
      
    }
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

    if (this.searchForm.chosenRegions.length == 0) {
      this.regionsPlaceholder = 'Select Location';
      this.searchForm.region = null;
    }

    this.collectCompounds();
    this.detectChanges();
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

    if (this.searchForm.sale_type) {
      queryString.push({
        name: 'sale_type',
        value: this.searchForm.sale_type,
      });
    }

    setTimeout(() => {
      this.router.navigateTo(`/?${$.param(queryString)}`);
    }, 100);
  }
}
