const Component = require(COMPONENT_CLASS_PATH);

class ContactFormComponent extends Component {}

module.exports = {
    selector: 'contact-form',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ContactFormComponent,
    isUnique: false,
    component: 'ContactForm',
    htmlFile: __dirname + '/../../contact-form.component.html',
};