class SinglePropertyPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, cache) {
        this.name = 'singleProperty';
        this.title = "Loading ...";

        this.showDesc = false;
        
        this.router = router;

        this.http = DI.resolve('http');

        this.cache = cache;

        this.property = {};

        this.ifCurrencyInDollar;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.http.get(`https://homes-egypt.com/api/properties/${this.router.params.id}`).then(response => {
            this.property = response.body.property;
            this.title = this.property.name;
        });

        this.ifCurrencyInDollar = this.cache.get("currency") == "USD" ? true : false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}