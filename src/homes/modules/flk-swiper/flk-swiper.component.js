class FlkSwiper {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {}
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.imagesList = this.prop('images');
        this.alt = this.prop('alt', '');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {        
        this.swiper = new Swiper(this.container, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
        })
    }
}