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
        this.propertiesToShow = [];
        // get properties on load
        this.getPropertiesOnLoad();
    }

    /**
     * View more properties
     * 
     * @param {DOMElement} $el
     */
    viewMore($el) {
        let propertiesShown = this.propertiesToShow;
        
        this.queryString = this.router.queryString.all();

        if (propertiesShown.length < this.properties.length) {
            // add 6 items every time
            propertiesShown.push(...this.properties.slice(propertiesShown.length, propertiesShown.length + 18));
        } else {
            // $el.style.display = "none";
            // load more from server
            // 1. add the number of the page as a global var
            if (!this.queryString.page && !this.page) {
                this.page = 2;
                this.queryString.page = this.page;
            }
            else {
                this.page += 1;
                this.queryString.page = this.page;
            }
            // 2. set loading to true
            this.loading = true
            // 3. get data from server with query page=(number of page)+1
            this.propertiesService.list(this.queryString).then(res => {
                this.properties.push(...res.properties);
                propertiesShown.push(...this.properties.slice(propertiesShown.length, propertiesShown.length + 18));
                echo(res.properties)
                this.loading = false
            })
            // 4. add it to the properties list
            // 5. add  first 6 items to propertiesToShow list
            // 6. set loading to false
        }

    }

    /**
     * Get properties on load according to the url
     */
    getPropertiesOnLoad() {
        let query = this.router.queryString.all();

        this.loading = true;

        this.propertiesService.list(query).then(response => {
            this.properties = response.properties;
            this.loading = false;
            this.viewMore();
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
        
    }
}