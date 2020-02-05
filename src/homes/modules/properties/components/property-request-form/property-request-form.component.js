class PropertyRequestForm {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(settingsService, propertiesService) {
        this.settings = settingsService;

        this.propertiesService = propertiesService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isLoading = false;

        this.isSent = false;

        this.info = {};
        this.property = this.prop('property');

        this.settings.info(info => {
            this.info = info;
        });
    }

    /**
     * Send data of the form to the back-end API
     * 
     * @param {DOMElement} $el
     */
    async send(form) {
        this.isLoading = true;
        await this.propertiesService.request(form);

        this.isLoading = false;
        
        this.isSent = true;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}