const Component = require(COMPONENT_CLASS_PATH);

class SinglePropertyPageComponent extends Component {}

module.exports = {
    selector: 'singleProperty-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: SinglePropertyPageComponent,
    isUnique: true,
    component: 'SinglePropertyPage',
    htmlFile: __dirname + '/../../singleProperty-page.component.html',
};