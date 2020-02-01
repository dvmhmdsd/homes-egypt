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
        this.loading = true;
        this.loadedPropertiesInBackground = [];
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
    async loadProperties(page = null) {
        if (!Is.empty(this.loadedPropertiesInBackground)) {
            this.properties = this.properties.concat(this.loadedPropertiesInBackground.splice(0, 36));
        } else {
            this.loading = true;
        }

        let query = this.router.queryString.all();

        if (page) {
            query.page = page;
        }

        let response = await this.propertiesService.list(query);

        this.properties = this.properties.concat(response.properties);

        if (Is.empty(response.properties) || response.properties.length < 36) {
            this.lastPage = true;
        } else {
            this.loadHiddenProperties(query);
        }
        
        this.loading = false;
    }

    loadHiddenProperties(query) {
        if (!query.page) {
            query.page = 1;
        }

        query.page += 1;
        this.propertiesService.list(query).then(response => {
            if (Is.empty(response.properties) || response.properties.length < 36) {
                this.lastPage = true;
            }

            this.loadedPropertiesInBackground = this.loadedPropertiesInBackground.concat(response.properties);
        });
    }

    ready() {
        return;
        window.addEventListener('scroll', async (e) => {
            if (this.isLoading) return;

            if (this.lastPage) return;

            this.lazyLoadingWhenReachingThisElement = $(this.newsListElement).find('.news-item').eq(-5);

            let topOfElement = this.lazyLoadingWhenReachingThisElement.offset().top;
            let bottomOfElement = this.lazyLoadingWhenReachingThisElement.offset().top + this.lazyLoadingWhenReachingThisElement.outerHeight();
            let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
            let topOfScreen = $(window).scrollTop();

            if ((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement)) {
                // the element is visible, do something

                this.isLoading = true;

                let { records } = await this.endpointService.get(this.newsEndpoint, {
                    data: {
                        page: ++this.currentPage,
                    }
                });

                this.newsList = this.newsList.concat(records);

                this.isLoading = false;
            } else {
                // the element is not visible, do something else
            }
        });
    }
}