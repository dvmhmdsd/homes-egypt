const Component = require(COMPONENT_CLASS_PATH);

class AdvertisePropertyComponent extends Component {}

module.exports = {
    selector: 'advertise-property',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdvertisePropertyComponent,
    isUnique: false,
    component: 'AdvertiseProperty',
    htmlFile: __dirname + '/../../advertise-property.component.html',
};