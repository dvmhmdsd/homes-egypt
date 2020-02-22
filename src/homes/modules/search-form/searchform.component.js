class Searchform {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(cache, settingsService, router, propertiesService, events) {
    this.loadingSearch;

    this.router = router;

    this.cache = cache;

    this.events = events;

    this.settingsService = settingsService;

    this.propertiesService = propertiesService;

    // show the corresponding form
    this.defaultSearch = {
      currency: '',
      min_area: '',
      minArea: '',
      maxArea: '',
      max_area: '',
      minBeds: '',
      maxBeds: '',
      minPrice: '',
      maxPrice: '',
      compound_id: null,
      compound: null,
      sale_type: "", // "rent" / "sale" / "commercial" / "new-homes"
      regions: [],
      compounds: [],
      type: '',
      currencies: [],
      chosenRegions: [],
      chosenCompounds: [],
      propertyTypes: [],
      typesAvailable: [
        { label: "Rent", value: "rent" },
        { label: "sale", value: "sale" },
        { label: "Commercial", value: "commercial" },
        { label: "New Homes", value: "new-homes" }
      ],
    };

    this.featuredRegions = [];
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  async init() {
    this.areaSizes = [];

    this.compoundList = [];

    for (let size = 20; size <= 4000; size += 10) {
      this.areaSizes.push({
        text: size.format() + ' meter',
        value: size,
      });
    }

    this.events.on("currency.change", () => {
      this.searchForm.min_price = null;
      this.searchForm.max_price = null;
    })

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

  setAreas() {
    let areasList = [];
    const addArea = area => {
      areasList.push({
        text: area.format() + " square meter",
        value: area
      });
    }

    let area = 50;
    while (area < 4000) {
      addArea(area);
      if (area < 600) {
        area += 50;
      } else if (area < 1700) {
        area += 100;
      } else if (area < 4000) {
        area += 200;
      }
    }

    return areasList;
  }

  setPrices() {
    let pricesList = [];
    const code = window.currentCurrency.code;

    const addPrice = price => {
      if (code !== "Default") {
        pricesList.push({
          text: price.format() + ' ' + code,
          value: price,
        });
      } else {
        pricesList.push({
          text: price.format() + ' ' + "EGP",
          value: price,
        });
      }
    };

    let type = this.searchForm.sale_type;
    if (code == "EGP" || code == "Default") {
      if (type == 'rent') {
        let price = 5000;
        while (price < 300000) {
          addPrice(price);

          if (price < 20000) {
            price += 1000;
          } else if (price < 50000) {
            price += 2500;
          } else if (price < 100000) {
            price += 5000;
          } else if (price < 300000) {
            price += 50000;
          } else {
            break;
          }
        }

        addPrice(300000);
      } else {
        let price = 100000;
        while (price < 40000000) {
          addPrice(price);

          if (price < 3000000) {
            price += 100000;
          } else if (price < 4500000) {
            price += 250000;
          } else if (price < 6000000) {
            price += 500000;
          } else if (price < 10000000) {
            price += 1000000;
          } else if (price < 20000000) {
            price += 5000000;
          } else {
            break;
          }
        }

        addPrice(40000000);
      }
    } else if (code == "USD" || code == "Euro") {
      if (type == 'rent') {
        let price = 100;
        while (price < 500000) {
          addPrice(price);

          if (price < 2000) {
            price += 100;
          } else if (price < 5000) {
            price += 250;
          } else if (price < 10000) {
            price += 500;
          } else if (price < 30000) {
            price += 1000;
          } else if (price < 100000) {
            price += 5000;
          } else if (price < 500000) {
            price += 50000;
          } else {
            break;
          }
        }
      } else {
        let price = 10000;
        while (price < 3000000) {
          addPrice(price);

          if (price < 30000) {
            price += 1000;
          } else if (price < 100000) {
            price += 5000;
          } else if (price < 1000000) {
            price += 100000;
          } else if (price < 3000000) {
            price += 500000;
          } else {
            break;
          }
        }
      }

      addPrice(3000000);
    }

    return pricesList;
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

    if (!Is.empty(this.searchForm.compounds)) {
      this.searchForm.chosenCompounds = response.compounds.filter(compound => this.searchForm.compounds.includes(compound.id));
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
    this.smallerMinArea = false;
    this.smallerMaxArea = false;
    
    let currentMinArea = this.cache.get("minArea")
    let currentMaxArea = this.cache.get("maxArea")
    if(currentMinArea && this.searchForm.min_area) {
      this.smallerMinArea = currentMinArea.includes(' ');
    }

    if(currentMaxArea && this.searchForm.max_area) {
      this.smallerMaxArea = currentMaxArea.includes(' ');
    }

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
    this.router.navigateTo('/');
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

  chooseCompound(compound) {
    this.searchForm.compound = null;

    if (!compound) return;

    this.searchForm.compound = Random.id();

    if (Is.numeric(compound)) {
      compound = this.compoundList.find(compoundItem => String(compoundItem.id) == String(compound));
    }

    Array.pushOnce(this.searchForm.chosenCompounds, compound);

  }

  collectCompounds() {
    let selectedRegionsIds = collect(this.searchForm.chosenRegions).pluck('id').toArray();

    this.compoundList = this.settings.compounds.filter(compound => selectedRegionsIds.includes(compound.region_id));

    if (this.searchForm.compound_id && !this.compoundList.find(compound => compound.id == this.searchForm.compound_id)) {
      this.muchSmallerCompound = this.smallerCompound = false;
      this.searchForm.compound_id = null;
    }

    // order by alphabetically
    this.compoundList = collect(this.compoundList).sortBy('name').toArray();
  }

  removeChosenCompound(index) {
    this.searchForm.chosenCompounds.splice(index, 1);

    this.detectChanges();
  }

  /**
   * Remove chosen region from chosenRegions list
   *
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
