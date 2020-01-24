class PropertiesList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(propertiesService, cache, router) {
        this.loading = true;

        this.cache = cache;

        this.router = router;

        this.propertiesService = propertiesService;
        this.properties = null;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.lastPage = false;
        this.properties = [];
        this.page = this.router.queryString.get('page', 1);
        // get properties on load
        this.loadProperties();
    }

    /**
     * View more properties
     * 
     * @param {DOMElement} $el
     */
    viewMore() {
        this.loadProperties(++this.page);
    }

    /**
     * Get properties on load according to the url
     */
    loadProperties(page = null) {
        let query = this.router.queryString.all();

        if (page) {
            query.page = page;
        }

        this.loading = true;

        this.propertiesService.list(query).then(response => {
            this.loading = false;
            this.properties = this.properties.concat(response.properties);

            if (Is.empty(response.properties)) {
                this.lastPage = true;
            }
        });
    }
}