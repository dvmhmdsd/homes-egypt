const Component = require(COMPONENT_CLASS_PATH);

class SingleComponent extends Component {}

module.exports = {
    selector: 'single',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: SingleComponent,
    isUnique: false,
    component: 'Single',
    htmlFile: __dirname + '/../../single.component.html',
};