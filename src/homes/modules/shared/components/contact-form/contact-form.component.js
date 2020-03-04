class ContactForm {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(formSubmitService) {
    this.formSubmitService = formSubmitService;
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {}

  async send(form) {
    this.isLoading = true;

    this.submitSuccess = false;

    try {
      await this.formSubmitService.contactUs(form);

      this.isLoading = false;

      this.submitSuccess = true;

      setTimeout(() => {
        this.modal.close();
      }, 1500);
    } catch (err) {
      throw err;
    }
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {}
}
