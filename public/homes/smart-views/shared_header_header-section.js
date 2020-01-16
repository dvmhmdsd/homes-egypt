_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['cache','currencies','setCurrency'],
                children: {},
                render: function (component) {
                    let el_IZL1 = eo('section',null,null,`class`,`info-header`);
let eljuwuH = eo('div',null,null,`class`,`container d-flex`);
let elhG3r2 = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let elnRpwN = eo('li',null,null,`class`,`info-item`);
let elI3Fna = eo('a',null,null,`href`,`tel:01288744799`);
let elZlIjI = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(`01288744799`);
ec('a');
ec('li');
let el1tfGx = eo('li',null,null,`class`,`info-item`);
let elfjiZ2 = eo('a',null,null,`href`,`mailto:Info@Homes-Egypt.Com`);
let elYtNdh = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(`Info@Homes-Egypt.Com`);
ec('a');
ec('li');
ec('ul');
let elvEaIt = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elrSspF = eo('li',null,null,`class`,`dropdown info-item`);
let elaxE3M = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let elthXA9 = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iiqF0B = '8NTQGEE' + i;
let elaj6Vz = eo('li','nFJ7wCtsAext' + i+iiqF0B,null,`class`,`dropdown-item`);
let elGYP7m = eo('button','Hozff'+iiqF0B,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elHTTMQ = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let elP5ssY = eo('div',null,null,`class`,`container`);
let elsD8X0 = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let el1E_gI = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let elii0rE = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`/public/homes/images/logo.png`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let eltIQCA = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let ellPE55 = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elt3T70 = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let el19BLJ = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let elqkFBl = eo('li',null,null,`class`,`nav-item`);
let eluv7Xw = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elavIWk = eo('li',null,null,`class`,`nav-item`);
let elWZSuz = eo('a',null,null,`class`,`nav-link`,`href`,``);
text(`sale`);
ec('a');
ec('li');
let elNLXZ1 = eo('li',null,null,`class`,`nav-item`);
let elXmSlh = eo('a',null,null,`class`,`nav-link`,`href`,``);
text(`rent`);
ec('a');
ec('li');
let elzXtaA = eo('li',null,null,`class`,`nav-item`);
let eliWcHb = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let eliPGnY = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elMiGWv = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let el0YABR = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elIzUqu = eo('div',null,null,`class`,`modal-content`);
let elwLyRj = eo('div',null,null,`class`,`modal-header`);
let elieQa7 = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let elMlcU_ = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elPLpMJ = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elB98uv = eo('div',null,null,`class`,`modal-body`);
let elDpnVR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elDpnVR.formHandler) {
                    window.cfrmdlr = elDpnVR.formHandler = new FormHandler(elDpnVR, component);
                } else {
                    window.cfrmdlr = elDpnVR.formHandler;
                }
            let elXYDxa = eo('div',null,null,`class`,`form-group`);
let elDPNJi = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDpnVR.formHandler.addError(undefined, 'required', trans('validation.required'));}return elDpnVR.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndhJvX = elDpnVR.formHandler.getError(undefined);
this.setState('stUrW0_', cndhJvX);
if (cndhJvX) { 
let elxeQ0U = eo('div','1twf',null,`class`,`error-msg`);
text(elDpnVR.formHandler.getError(undefined));
ec('div');
}ec('div');
let elhnq_Y = eo('div',null,null,`class`,`form-group`);
let el3sCWh = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDpnVR.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elDpnVR.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elDpnVR.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndFXJM = elDpnVR.formHandler.getError(undefined);
this.setState('stdPkVk', cndFXJM);
if (cndFXJM) { 
let elrmxYQ = eo('div','fadf',null,`class`,`error-msg`);
text(elDpnVR.formHandler.getError(undefined));
ec('div');
}let elrAxuy = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elT08vH = eo('div',null,null,`class`,`form-group`);
let elvHbAI = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDpnVR.formHandler.addError(undefined, 'required', trans('validation.required'));}return elDpnVR.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndLMDq = elDpnVR.formHandler.getError(undefined);
this.setState('stxsxsW', cndLMDq);
if (cndLMDq) { 
let elNP_CS = eo('div','bqpf',null,`class`,`error-msg`);
text(elDpnVR.formHandler.getError(undefined));
ec('div');
}ec('div');
let elHpAsB = eo('div',null,null,`class`,`form-group`);
let elimRSE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDpnVR.formHandler.addError(undefined, 'required', trans('validation.required'));}return elDpnVR.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cnduhqc = elDpnVR.formHandler.getError(undefined);
this.setState('stuF0rr', cnduhqc);
if (cnduhqc) { 
let elAuM56 = eo('div','JnNf',null,`class`,`error-msg`);
text(elDpnVR.formHandler.getError(undefined));
ec('div');
}ec('div');
let eluHE6r = eo('div',null,null,`class`,`form-group`);
let el_tm2z = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDpnVR.formHandler.addError(undefined, 'required', trans('validation.required'));}return elDpnVR.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndYe4v = elDpnVR.formHandler.getError(undefined);
this.setState('stGte18', cndYe4v);
if (cndYe4v) { 
let elFGdL6 = eo('div','iCpf',null,`class`,`error-msg`);
text(elDpnVR.formHandler.getError(undefined));
ec('div');
}ec('div');
let elQAJOx = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let el_SwpW = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elbRLgG = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elg1rAV = eo('div',null,null,`class`,`modal-content`);
let el00BmS = eo('div',null,null,`class`,`modal-header`);
let elvoYzo = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elYMN1b = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elUddgz = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elBHRtU = eo('div',null,null,`class`,`modal-body`);
ec('div');
ec('div');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });