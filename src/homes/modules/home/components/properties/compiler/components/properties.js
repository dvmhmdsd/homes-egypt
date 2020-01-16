const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class PropertiesComponent extends ChildComponent {}

module.exports = {
    selector: 'properties',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: PropertiesComponent,
    isUnique: false,
    component: 'Properties',
    htmlFile: __dirname + '/../../properties.component.html',
};