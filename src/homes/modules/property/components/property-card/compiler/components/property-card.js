const Component = require(COMPONENT_CLASS_PATH);

class PropertyCardComponent extends Component {}

module.exports = {
    selector: 'property-card',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PropertyCardComponent,
    isUnique: false,
    component: 'PropertyCard',
    htmlFile: __dirname + '/../../property-card.component.html',
};