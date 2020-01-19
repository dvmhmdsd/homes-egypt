const Component = require(COMPONENT_CLASS_PATH);

class PropertyPageComponent extends Component {}

module.exports = {
    selector: 'property-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PropertyPageComponent,
    isUnique: false,
    component: 'PropertyPage',
    htmlFile: __dirname + '/../../property-page.component.html',
};