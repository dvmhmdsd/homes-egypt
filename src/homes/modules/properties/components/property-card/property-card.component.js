class PropertyCard {
    // @macro(propertyPhoneNumber)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(cache) {
        this.cache = cache;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.property = this.prop("property");

        this.importantProperty = this.prop('star');

        this.property.imagesList = this.property.images.map(image => {
            return {
                image: window.isMobile ? image.image_mobile : image.image,
                link: propertyUrl(this.property),
            }
        });

        this.property.phoneNumber = this.phoneNumber = this.propertyPhoneNumber();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}