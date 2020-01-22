const Component = require(COMPONENT_CLASS_PATH);

class PropertyRequestFormComponent extends Component {}

module.exports = {
    selector: 'property-request-form',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PropertyRequestFormComponent,
    isUnique: false,
    component: 'PropertyRequestForm',
    htmlFile: __dirname + '/../../property-request-form.component.html',
};