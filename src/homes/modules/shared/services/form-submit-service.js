class FormSubmitService extends Endpoint.Service {
    constructor(http) {
        super();
        this.http = http;
    }
    /**
     * {@inheritDoc} 
     */
    boot() {
    }

    sendData(url, $el) {
        let data = this.formatData($el);
        
        return this.http.post(url, data);
    }

    formatData($el) {
        let formData = $($el).serializeArray();
        let data = {};
        // convert form data to object
        formData.forEach(item => {
            data[item.name] = item.value
        });

        return data;
    }
}

DI.register({
    class: FormSubmitService,
    alias: 'formSubmitService',
});