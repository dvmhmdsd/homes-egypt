class PropertyCard {
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
        this.property = this.inputs.getProp("property")
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}