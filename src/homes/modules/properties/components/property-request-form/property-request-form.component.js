class PropertyRequestForm {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(settingsService) {
        this.settings = settingsService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.info = {};
        this.property = this.prop('property');
        this.settings.info(info => {
            this.info = info;
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}