class Footer {
    /**
     * Constructor
     */
    constructor(cache, settingsService, router) {
        this.cache = cache;

        this.featuredRegions;

        this.settingsService = settingsService;

        this.info = {};

        this.router = router;
    }

    /**
     * {@inheritdoc}
     */
    init() {
        this.qs = this.router.queryString.QueryString;
        
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