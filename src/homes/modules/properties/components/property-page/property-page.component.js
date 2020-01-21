class PropertyPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list
     */
    constructor(router, cache, $) {
        this.name = "singleProperty";
        this.title = "Loading ...";

        this.showDesc = false;

        this.router = router;

        this.cache = cache;

        this.property = {};

        this.slides = [];

        this.ifCurrencyInDollar;

        this.mapSrc;

        
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        let http = DI.resolve("http");
        http
            .get(`https://homes-egypt.com/api/properties/${this.router.params.id}`)
            .then(response => {
                this.property = response.body.property;
                this.title = this.property.name;
                this.mapSrc = `https://maps.google.com/maps?ll=${this.property.address}&output=embed&z=17&t=m&hl=en&gl=US&mapclient=apiv3`;
                this.convertImagesSrc();
            });

        this.ifCurrencyInDollar =
            this.cache.get("currency") == "USD" ? true : false;
    }

    /**
     * Convert the image src coming from API from relative to absolute
     *
     * @returns {array}
     */
    convertImagesSrc() {
        this.property.images.map(img => {
            this.slides.push({ image: imageUrl(img) });
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { 
        // echo(jQuery.fn.owlCarousel)
        // $(".owl-carousel").owlCarousel();
        // $(".owl-carousel").owlCarousel();
    }
}
