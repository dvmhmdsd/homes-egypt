class AdvertiseProperty {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(http, propertiesService, settingsService) {
        this.http = http;

        this.propertiesService = propertiesService;
        this.settingsService = settingsService;

        this.cities = [];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = false;
        this.success = false;
        this.imageInputs = [''];

        this.data = {};
        this.errors = {};

        this.cities = [];

        this.regions = [];

        // view step1 of the advertisement application
        this.step = 1;

        // types of the property - comes from header section
        this.propertyTypes = this.prop("types", []);

        this.saleTypes = [
            { text: 'Rent', value: 'rent' },
            { text: 'Sale', value: 'sale' },
        ];

        this.numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
            return {
                text: String(number),
                value: number,
            };
        }) || [];

        this.currencies = [];

        this.settingsService.cached('list').then(async response => {
            let currentCurrency = await this.settingsService.currentCurrency();

            this.currencies = response.currencies.map(currency => {
                if (currency.code == currentCurrency.code) {
                    this.currentCurrency = currency.id;
                }

                return {
                    text: currency.code,
                    value: currency.id,
                }
            });
        });
        this.citiesResponse = await this.settingsService.cached('cities');

        this.cities = this.citiesResponse.map(city => {
            return {
                text: city.city,
                value: city.city_id
            }
        });
    }

    isNextBtnShouldBeDisabled() {
        return this.isLoading || this.hasErrors() || 
                ! this.data.username || ! this.data.email || ! this.data.phone;            
    }

    /**
     * Get the regions of the corresponding city
     * 
     * 
     */
    getRegion(val) {
        let city = this.citiesResponse.find(city => {
            return city.city_id == val;
        });

        this.regions = city.regions.map(region => {
            return {
                text: region.name,
                value: region.id,
            };
        });
    }

    /**
     * Check if form has errors
     * @returns boolean 
     */
    hasErrors() {
        for (let key in this.errors) {
            if (! Is.empty(this.errors[key])) return true;
        } 
        
        return false;
    }

    /**
     * Send data of the form to the API
     * 
     * @param {DOMElement} $el 
     */
    async submit(form) {
        this.isLoading = true;
        await this.propertiesService.advertiseProperty(form);

        this.isLoading = false;
        this.success = true;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}