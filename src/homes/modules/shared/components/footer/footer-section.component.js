class Footer {
    /**
     * Constructor
     */
    constructor(cache, settingsService) {
        this.cache = cache;

        this.featuredRegions;

        this.settingsService = settingsService;

        this.info = {};
    }

    /**
     * {@inheritdoc}
     */
    init() {
        this.facebookUrl = 'https://m.facebook.com/Homes.egypt/';
        this.settingsService.cached('list').then(response => {
            if (response.settings['social.facebook']) {
                this.facebookUrl = response.settings['social.facebook'];
            }
            this.info = {
                email: response.settings['site.email'],
                phone: response.settings['site.phone'],
                facebook: response.settings['social.facebook'],
            }; 
        });
            
        this.featuredRegions = this.cache.get("featuredRegions");

        // this.regionsService.featured().then(regions => {
        //     this.featuredRegions = regions;
        // })
    }

    /**
     * {@inheritdoc}
     */
    ready() {}
}