class FormSubmitService extends Endpoint.Service {
    contactUs(form) {
        return this.endpoint.post(this.path('/contact-us'), form);
    }
}

DI.register({
    class: FormSubmitService,
    alias: 'formSubmitService',
});