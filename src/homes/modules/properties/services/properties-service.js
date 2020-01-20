class PropertiesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/properties');
    }
}

DI.register({
    class: PropertiesService,
    alias: 'propertiesService',
});