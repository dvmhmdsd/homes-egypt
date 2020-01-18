class Footer {
    /**
     * Constructor
     */
    constructor(cache) {
        this.cache = cache;

        this.featuredRegions;

        this.info = {};
    }

    /**
     * {@inheritdoc}
     */
    init() {
        this.info.email = this.cache.get("settings").settings["site.email"];
        this.info.phone = this.cache.get("settings").settings["site.phone"];
        this.info.facebook = this.cache.get("settings").settings["social.facebook"];
        
        this.featuredRegions = this.cache.get("featuredRegions");
    }

    /**
     * {@inheritdoc}
     */
    ready() {}
}