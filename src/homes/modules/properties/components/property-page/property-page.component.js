class PropertyPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list
     */
    constructor(router, cache, settingsService, propertiesService) {
        this.name = "singleProperty";
        this.title = "Loading ...";

        this.propertiesService = propertiesService;
        this.settingsService = settingsService;

        this.router = router;

        this.cache = cache;

        this.property = {};

        this.ifCurrencyInDollar;

        this.mapSrc;

        this.info = {};

        this.loading = true;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.loading = true;

        this.location = {};
      
        // if ( !this.cache.get(this.router.params.id)) {
        //     let { property } = await this.propertiesService.get(this.router.params.id);

        //     this.property = property;
            
        //     this.cache.set(this.router.params.id, property);
        // } else {
        //     this.property = this.cache.get(this.router.params.id);
        // }

        let { property } = await this.propertiesService.get(this.router.params.id);

        this.property = property;

        let {settings} = await this.settingsService.cached('list');

        this.callNumber = this.property.whatsapp_mobile || settings['site.phone'];

        if (this.property.address) {
            let [lat, lng] = this.property.address.split(',');
            this.location.lat = lat;
            this.location.lng = lng;
        }
        
        this.title = this.property.name;

        this.loading = false;

        this.ifCurrencyInDollar = this.cache.get("currency") == "USD";
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}
