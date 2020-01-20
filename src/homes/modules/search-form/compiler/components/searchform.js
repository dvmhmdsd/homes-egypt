const Component = require(COMPONENT_CLASS_PATH);

class SearchformComponent extends Component {}

module.exports = {
    selector: 'searchform',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: SearchformComponent,
    isUnique: false,
    component: 'Searchform',
    htmlFile: __dirname + '/../../searchform.component.html',
};