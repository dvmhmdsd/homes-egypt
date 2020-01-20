Config.extend({
    http: {
        endpoint: {
            baseUrl: 'https://homes-egypt.com/api',
            apiKey: '', // api key if required i.e Authorization: key {some-key}, add only the key without the `key` word
            baseRoute: '', // base route that will be added at the end of the base url
        }
    },
    meta: {
        appendAppName: false,
        appNameSeparator: ' | ',
    },
    user: {
        loginKey: '_u',
        accessTokenKey: '_at',
    },
    slider: {
        loop: true,
        delay: 1000,
        bullets: false,
        navigation: false,
        navigationIcon: {
            prev: "fa fa-chevron-left",
            next: "fa fa-chevron-right",
        },
        // "navigationIcon.prev": "fa fa-chevron-left"
    },
    form: {
        imagePreview: assets('images/placeholder.png'),
    }
});