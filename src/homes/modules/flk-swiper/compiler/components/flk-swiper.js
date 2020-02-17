const Component = require(COMPONENT_CLASS_PATH);

class FlkSwiperComponent extends Component {}

module.exports = {
    selector: 'flk-swiper',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkSwiperComponent,
    isUnique: false,
    component: 'FlkSwiper',
    htmlFile: __dirname + '/../../flk-swiper.component.html',
};