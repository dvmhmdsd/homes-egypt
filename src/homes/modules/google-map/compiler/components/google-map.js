const Component = require(COMPONENT_CLASS_PATH);

class GoogleMapComponent extends Component {}

module.exports = {
    selector: 'google-map',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: GoogleMapComponent,
    isUnique: false,
    component: 'GoogleMap',
    htmlFile: __dirname + '/../../google-map.component.html',
};