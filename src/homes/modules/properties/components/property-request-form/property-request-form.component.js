class PropertyRequestForm {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(settingsService, formSubmitService) {
        this.settings = settingsService;

        this.formSubmit = formSubmitService;
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
     * Send data of the form to the back-end API
     * 
     * @param {DOMElement} $el
     */
    send($el) {
        let formData = $($el).serializeArray();
        let data = {};
        // convert form data to object
        formData.forEach(item => {
            data[item.name] = item.value
        });

        this.formSubmit.sendData("https://homes-egypt.com/api/property", data).then(res => {
            echo(res)
        })
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}