const Component = require(COMPONENT_CLASS_PATH);

class LoadingComponent extends Component {}

module.exports = {
    selector: 'loading',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: LoadingComponent,
    isUnique: false,
    component: 'Loading',
    htmlFile: __dirname + '/../../loading.component.html',
};