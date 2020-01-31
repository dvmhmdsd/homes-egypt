class GoogleMap {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(http) {        
        if (!GoogleMap.loaded) {
            let apiKey = Config.get('google.apiKey', 'AIzaSyBwBRUTy0JfTgAnaWKkF4B9jHCpnzkPWF8&');
            // http.script(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${this.onLoad}`)
            http.script(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`, e => {
                this.onLoad();
            });

            GoogleMap.loaded = true;
        }
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() { 
        this.isLoadedMap = false;

        this.lat = Number(this.prop('lat'));
        this.lng = Number(this.prop('lng'));
        this.zoom = this.prop('zoom', 10);

        this.location = {
            lat: this.lat,
            lng: this.lng,
        };        
    }

    onLoad() {
        this.map = new google.maps.Map(this.mapElement, {
            center: this.location,
            zoom: this.zoom
        });
        
        var marker = new google.maps.Marker({position: this.location, map: this.map});

    }
}