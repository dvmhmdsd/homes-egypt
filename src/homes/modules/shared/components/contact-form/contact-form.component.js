class ContactForm {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(formSubmitService) {
        this.formSubmit = formSubmitService;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {}

    send($el) {
        this.formSubmit.sendData("/contact-us/send", $el);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}