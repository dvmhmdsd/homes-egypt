const Component = require(COMPONENT_CLASS_PATH);

class PropertiesListComponent extends Component {}

module.exports = {
    selector: 'properties-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PropertiesListComponent,
    isUnique: false,
    component: 'PropertiesList',
    htmlFile: __dirname + '/../../properties-list.component.html',
};