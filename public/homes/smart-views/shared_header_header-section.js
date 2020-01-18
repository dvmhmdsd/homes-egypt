_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency'],
                children: {},
                render: function (component) {
                    let el5hpyt = eo('section',null,null,`class`,`info-header`);
let elJMfyw = eo('div',null,null,`class`,`container d-flex`);
let elbNaW3 = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let eleXzsy = eo('li',null,null,`class`,`info-item`);
let elV9c5E = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elaKk3H = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let eliu8t8 = eo('li',null,null,`class`,`info-item`);
let el9EWTS = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elmoEEU = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let elTDl1g = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elHsg3G = eo('li',null,null,`class`,`dropdown info-item`);
let elIKMmg = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let elsoCAM = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iilBGu = '3MQWC6p' + i;
let elUlAHy = eo('li','dBfeSzdwhdUV' + i+iilBGu,null,`class`,`dropdown-item`);
let elBph9R = eo('button','1zEff'+iilBGu,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elDzTyL = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let elQzkvm = eo('div',null,null,`class`,`container`);
let elqAXMj = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let ely7BXt = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let elKM_KV = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`/public/homes/images/logo.png`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let el17H19 = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let elrIRsD = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elxWmcF = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elO9On3 = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let elLFDf3 = eo('li',null,null,`class`,`nav-item`);
let elFHw3M = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elxAoh_ = eo('li',null,null,`class`,`nav-item`);
let elFNSh9 = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let elfUwDA = eo('li',null,null,`class`,`nav-item`);
let elOuu0_ = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let elQpOC0 = eo('li',null,null,`class`,`nav-item`);
let elfBMU5 = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let elTY5Zd = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elYmIwe = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elD23qP = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elHc4_1 = eo('div',null,null,`class`,`modal-content`);
let elp6NRj = eo('div',null,null,`class`,`modal-header`);
let elzWe9D = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let elRoDRB = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elGOvVm = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elbRir0 = eo('div',null,null,`class`,`modal-body`);
let eluumHk = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! eluumHk.formHandler) {
                    window.cfrmdlr = eluumHk.formHandler = new FormHandler(eluumHk, component);
                } else {
                    window.cfrmdlr = eluumHk.formHandler;
                }
            let elAGkvW = eo('div',null,null,`class`,`form-group`);
let elK5vl1 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluumHk.formHandler.addError(undefined, 'required', trans('validation.required'));}return eluumHk.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndNZUZ = eluumHk.formHandler.getError(undefined);
this.setState('stT9seQ', cndNZUZ);
if (cndNZUZ) { 
let elVkzxg = eo('div','4wcf',null,`class`,`error-msg`);
text(eluumHk.formHandler.getError(undefined));
ec('div');
}ec('div');
let elzS40o = eo('div',null,null,`class`,`form-group`);
let eljR8l8 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluumHk.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eluumHk.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return eluumHk.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cnd7YPY = eluumHk.formHandler.getError(undefined);
this.setState('stQLnDB', cnd7YPY);
if (cnd7YPY) { 
let el4zw2J = eo('div','1Rff',null,`class`,`error-msg`);
text(eluumHk.formHandler.getError(undefined));
ec('div');
}let elIWNbx = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elVIJo9 = eo('div',null,null,`class`,`form-group`);
let elmURQZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluumHk.formHandler.addError(undefined, 'required', trans('validation.required'));}return eluumHk.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndGISj = eluumHk.formHandler.getError(undefined);
this.setState('stDG4wO', cndGISj);
if (cndGISj) { 
let elwYS9M = eo('div','yQWf',null,`class`,`error-msg`);
text(eluumHk.formHandler.getError(undefined));
ec('div');
}ec('div');
let elKHy3x = eo('div',null,null,`class`,`form-group`);
let elXwMtI = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluumHk.formHandler.addError(undefined, 'required', trans('validation.required'));}return eluumHk.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cndNISI = eluumHk.formHandler.getError(undefined);
this.setState('stKU4xe', cndNISI);
if (cndNISI) { 
let el_RZoo = eo('div','0vuf',null,`class`,`error-msg`);
text(eluumHk.formHandler.getError(undefined));
ec('div');
}ec('div');
let elXElh6 = eo('div',null,null,`class`,`form-group`);
let elRW2s7 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluumHk.formHandler.addError(undefined, 'required', trans('validation.required'));}return eluumHk.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndG0IO = eluumHk.formHandler.getError(undefined);
this.setState('stRX9uE', cndG0IO);
if (cndG0IO) { 
let elVrfkV = eo('div','v8Pf',null,`class`,`error-msg`);
text(eluumHk.formHandler.getError(undefined));
ec('div');
}ec('div');
let elJB6zH = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let elJACvy = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elJofYi = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elowLEG = eo('div',null,null,`class`,`modal-content`);
let elY6Q6C = eo('div',null,null,`class`,`modal-header`);
let elilO2m = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elIMJyG = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elTEsZ3 = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elDZc9h = eo('div',null,null,`class`,`modal-body`);
ec('div');
ec('div');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });