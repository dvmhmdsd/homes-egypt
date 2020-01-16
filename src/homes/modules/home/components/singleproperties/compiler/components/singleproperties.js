const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class SinglepropertiesComponent extends ChildComponent {}

module.exports = {
    selector: 'singleproperties',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: SinglepropertiesComponent,
    isUnique: false,
    component: 'Singleproperties',
    htmlFile: __dirname + '/../../singleproperties.component.html',
};