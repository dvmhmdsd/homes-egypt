class PropertyPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list
     */
    constructor(router, cache, propertiesService) {
        this.name = "singleProperty";
        this.title = "Loading ...";

        this.propertiesService = propertiesService;

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

        let { property } = await this.propertiesService.get(this.router.params.id);

        this.property = property;
        
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
