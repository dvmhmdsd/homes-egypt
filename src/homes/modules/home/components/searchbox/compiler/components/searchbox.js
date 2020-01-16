const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class SearchboxComponent extends ChildComponent {}

module.exports = {
    selector: 'searchbox',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: SearchboxComponent,
    isUnique: false,
    component: 'Searchbox',
    htmlFile: __dirname + '/../../searchbox.component.html',
};