const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class PropertyCardMobileComponent extends ChildComponent {}

module.exports = {
    selector: 'property-card-mobile',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: PropertyCardMobileComponent,
    isUnique: false,
    component: 'PropertyCardMobile',
    htmlFile: __dirname + '/../../property-card-mobile.component.html',
};