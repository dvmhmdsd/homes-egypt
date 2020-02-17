class PropertyPage {
    // @macro(propertyPhoneNumber)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list
     */
    constructor(router, cache, meta, propertiesService) {
        this.name = "singleProperty";
        this.title = "Loading ...";
        this.propertiesService = propertiesService;
        this.router = router;
        this.cache = cache;
        this.meta = meta;

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

        if (this.property.address) {
            let [lat, lng] = this.property.address.split(',');
            this.location.lat = lat;
            this.location.lng = lng;
        }

        this.loading = false;

        this.ifCurrencyInDollar = this.cache.get("currency") == "USD";
        this.phoneNumber = this.propertyPhoneNumber();

        this.meta.setTitle(this.property.name)
                  .setDescription(this.property.short_description || this.property.description)
                 .setImage(this.property.images[0].image);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}
