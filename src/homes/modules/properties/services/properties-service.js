class PropertiesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/properties');
    }

    request(form) {
        return this.endpoint.post(this.path(`/requests`), form);
    }

    advertiseProperty(form) {
        return this.endpoint.post(this.path('/advertise'), form);   
    }
}

DI.register({
    class: PropertiesService,
    alias: 'propertiesService',
});