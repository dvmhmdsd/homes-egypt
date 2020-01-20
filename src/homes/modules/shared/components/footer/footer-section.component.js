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
        this.settingsService.cached('list').then(response => {
            this.info = {
                email: response.settings['site.email'],
                phone: response.settings['site.phone'],
                facebook: response.settings['social.facebook'],
            }; 
        });

        // this.settingsService.live.cached('list').then(response => {
        //     this.settings = response.settings; 
        // });
        
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