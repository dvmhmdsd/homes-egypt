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

        if (propertiesShown.length < this.properties.length) {
            // add 6 items every time
            propertiesShown.push(...this.properties.slice(propertiesShown.length, propertiesShown.length + 6));
        } else {
            $el.style.display = "none";
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
        });
    }

    /**
     * Convert the image src coming from API from relative to absolute
     */
    convertImagesSrc(data) {
        echo(data)
        data.map(property => {
            property.images.map(img => {
                img.image = imageUrl(img.image);
                img.link = `/properties/${ property.old_id }/${seo(property.name)}`;
            });
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
        // echo(this.inputs.getProp("getProperties"))
    }
}