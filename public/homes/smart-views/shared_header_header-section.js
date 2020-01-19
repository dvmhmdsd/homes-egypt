_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency','step','watchStep','response'],
                children: {},
                render: function (component) {
                    let el_GRs5 = eo('section',null,null,`class`,`info-header`);
let el1XdWj = eo('div',null,null,`class`,`container d-flex`);
let elvgCB8 = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let el9YZRI = eo('li',null,null,`class`,`info-item`);
let elJVP2n = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elthFnb = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let elyhcdo = eo('li',null,null,`class`,`info-item`);
let elpg1YC = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elvD36y = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let eljh1dr = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let el16vTG = eo('li',null,null,`class`,`dropdown info-item`);
let elRyORI = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let el36XFN = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iiSvpv = 'Hl4sgFi' + i;
let elMMDir = eo('li','BmOt9k2cGoT8' + i+iiSvpv,null,`class`,`dropdown-item`);
let elldkud = eo('button','AOxff'+iiSvpv,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elX66H9 = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let elioOy8 = eo('div',null,null,`class`,`container`);
let elgGts2 = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let elAPpBO = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let elhWjxk = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`/public/homes/images/logo.png`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let elUCpW0 = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let elmTDoV = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elPRyUK = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elFlquk = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let el1CBnE = eo('li',null,null,`class`,`nav-item`);
let elw56a0 = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let el3UkcU = eo('li',null,null,`class`,`nav-item`);
let el3Syzm = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let eljCERg = eo('li',null,null,`class`,`nav-item`);
let elzbzj2 = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let elacZ84 = eo('li',null,null,`class`,`nav-item`);
let ele9fEA = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let el59EDF = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise
        property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elqnLCX = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elG8qTt = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elRSrOe = eo('div',null,null,`class`,`modal-content`);
let elP6EJ3 = eo('div',null,null,`class`,`modal-header`);
let elvcrIo = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let elLr2sa = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elRXUC9 = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let el_5DeC = eo('div',null,null,`class`,`modal-body`);
let elMy_DY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`);

                if (! elMy_DY.formHandler) {
                    window.cfrmdlr = elMy_DY.formHandler = new FormHandler(elMy_DY, component);
                } else {
                    window.cfrmdlr = elMy_DY.formHandler;
                }
            let elYwwpF = eo('div',null,null,`class`,`form-group`);
let el_PjKb = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMy_DY.formHandler.addError(undefined, 'required', trans('validation.required'));}return elMy_DY.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cnd7kLa = elMy_DY.formHandler.getError(undefined);
this.setState('st03b36', cnd7kLa);
if (cnd7kLa) { 
let el7vGm3 = eo('div','HHrf',null,`class`,`error-msg`);
text(elMy_DY.formHandler.getError(undefined));
ec('div');
}ec('div');
let elTVDMI = eo('div',null,null,`class`,`form-group`);
let elKDFPG = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMy_DY.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elMy_DY.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elMy_DY.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndQwVl = elMy_DY.formHandler.getError(undefined);
this.setState('stM6KnU', cndQwVl);
if (cndQwVl) { 
let elPQfAY = eo('div','8u7f',null,`class`,`error-msg`);
text(elMy_DY.formHandler.getError(undefined));
ec('div');
}let elxxxMz = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elEUlIX = eo('div',null,null,`class`,`form-group`);
let elS5pAz = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMy_DY.formHandler.addError(undefined, 'required', trans('validation.required'));}return elMy_DY.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndAvSZ = elMy_DY.formHandler.getError(undefined);
this.setState('stsevYe', cndAvSZ);
if (cndAvSZ) { 
let elgVhJ1 = eo('div','qyCf',null,`class`,`error-msg`);
text(elMy_DY.formHandler.getError(undefined));
ec('div');
}ec('div');
let elNm34J = eo('div',null,null,`class`,`form-group`);
let elcnUh0 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMy_DY.formHandler.addError(undefined, 'required', trans('validation.required'));}return elMy_DY.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cndtCfR = elMy_DY.formHandler.getError(undefined);
this.setState('stdduba', cndtCfR);
if (cndtCfR) { 
let elOwIv9 = eo('div','CMOf',null,`class`,`error-msg`);
text(elMy_DY.formHandler.getError(undefined));
ec('div');
}ec('div');
let elgbUJY = eo('div',null,null,`class`,`form-group`);
let ell59iM = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMy_DY.formHandler.addError(undefined, 'required', trans('validation.required'));}return elMy_DY.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndbRCe = elMy_DY.formHandler.getError(undefined);
this.setState('stUtzYW', cndbRCe);
if (cndbRCe) { 
let el0R3vy = eo('div','l7Gf',null,`class`,`error-msg`);
text(elMy_DY.formHandler.getError(undefined));
ec('div');
}ec('div');
let elz2sRL = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let elN9iWc = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elLH9vl = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let eloG6D9 = eo('div',null,null,`class`,`modal-content`);
let el8YOku = eo('div',null,null,`class`,`modal-header`);
let elojZmN = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elrJZng = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elAhZWe = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elIyaIX = eo('div',null,null,`class`,`modal-body`);
let elQixi3 = eo('section',null,null,`class`,`forms-panel d-flex justify-content-between`);
let el6xWmI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`class`,`user-info info-button`,`data-id`,`step-1`);
component.stepOneBtn = el6xWmI;
let elztruK = eo('span');
text(`1`);
ec('span');
text(`user info`);
ec('button');
let elTqOSx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`property-info info-button`,`data-id`,`step-2`);
component.stepTwoBtn = elTqOSx;
let elFfdn_ = eo('span');
text(`2`);
ec('span');
text(`property`);
ec('button');
ec('section');
let el1iWhq = eo('section',null,null,`class`,`property-form`);
let elX9Au5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/add-property/submit`);

                if (! elX9Au5.formHandler) {
                    window.cfrmdlr = elX9Au5.formHandler = new FormHandler(elX9Au5, component);
                } else {
                    window.cfrmdlr = elX9Au5.formHandler;
                }
            let cnd8vPg = component.step == 'step-1';
this.setState('st1xBWG', cnd8vPg);
if (cnd8vPg) { 
let elZcKDP = eo('div','Dk2f',null,`id`,`step-1`,`class`,`d-flex flex-wrap justify-content-between`);
let ellwFGP = eo('div','xnOf',null,`class`,`form-group col-md-6`);
let elhGPr3 = eo('div','P_Yf',null,`class`,`form-group`);
elhGPr3.cls = {'group-error': !!elX9Au5.formHandler.getError(`username`) };

            for (let className in elhGPr3.cls) {
                elhGPr3.classList.toggle(className, elhGPr3.cls[className]);
            }  
            let el_xISV = eo('label','Ptcf',null,`for`,`username`);
text(trans('Full Name'));
ec('label');
let elgJYPc = ev('input','9K_f',null,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`e.g: John Doe`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
ec('div');
ec('div');
let elJcqYC = eo('div','HrPf',null,`class`,`form-group col-md-6`);
let el28bSy = eo('div','Ggrf',null,`class`,`form-group`);
el28bSy.cls = {'group-error': !!elX9Au5.formHandler.getError(`email`) };

            for (let className in el28bSy.cls) {
                el28bSy.classList.toggle(className, el28bSy.cls[className]);
            }  
            let elwD9U1 = eo('label','DgDf',null,`for`,`email`);
text(trans('Email Address'));
ec('label');
let elMG1SE = ev('input','Iu4f',null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elX9Au5.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elX9Au5.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`e.g: test@test.com`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndFgUd = elX9Au5.formHandler.getError(`email`);
this.setState('stYUFxV', cndFgUd);
if (cndFgUd) { 
let elzoULK = eo('div','p8Wf',null,`class`,`error-msg`);
text(elX9Au5.formHandler.getError(`email`));
ec('div');
}ec('div');
ec('div');
let elJwzKX = eo('div',null,null,`class`,`form-group col-md-6`);
let eltpWkw = eo('div',null,null,`class`,`form-group`);
eltpWkw.cls = {'group-error': !!elX9Au5.formHandler.getError(`phone`) };

            for (let className in eltpWkw.cls) {
                eltpWkw.classList.toggle(className, eltpWkw.cls[className]);
            }  
            let elNdomb = eo('label',null,null,`for`,`phone`);
text(trans('Phone Number'));
ec('label');
let elgP9bx = ev('input',null,null,`name`,`${(`phone`).toInputName()}`,`placeholder`,`${trans(`Phone Number`)}`,`type`,`number`,`class`,`form-control`,`id`,`phone`);
ec('div');
ec('div');
let el3vgIB = eo('div',null,null,`class`,`form-group col-md-6`);
let elWwH0e = eo('div',null,null,`class`,`form-group`);
elWwH0e.cls = {'group-error': !!elX9Au5.formHandler.getError(`address`) };

            for (let className in elWwH0e.cls) {
                elWwH0e.classList.toggle(className, elWwH0e.cls[className]);
            }  
            let elfzEdc = eo('label',null,null,`for`,`address`);
text(trans('Address'));
ec('label');
let ellGWut = ev('input',null,null,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
ellGWut.autocomplete = ellGWut.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
ec('div');
ec('div');
let elbXWV2 = eo('div',null,null,`class`,`form-group col-md-6`);
let elIK044 = ev('input',null,null,`name`,`${(`city`).toInputName()}`,`placeholder`,`${trans(`Your City`)}`,`type`,`text`,`class`,`form-control border-bottom`,`id`,`city`);
ec('div');
let elbxOz7 = eo('div',null,null,`class`,`form-group col-md-6`);
let elXQbx6 = ev('input',null,null,`name`,`${(`district`).toInputName()}`,`placeholder`,`${trans(`Your District`)}`,`type`,`text`,`class`,`form-control  border-bottom`,`id`,`district`);
ec('div');
let elg0yNN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`adv-action-btn next`);
text(`Next`);
ec('button');
ec('div');
}let cndj_2c = component.step == 'step-2';
this.setState('stm9Qxb', cndj_2c);
if (cndj_2c) { 
let elxNnGM = eo('div','V1Gf',null,`id`,`step-2`,`class`,`d-flex flex-wrap`);
let el7viPL = eo('div','W6Hf',null,`class`,`form-group col-md-6`);
let eltVY8h = ev('input','w_If',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Choose type`)}`,`type`,`text`,`class`,`form-control`,`list`,`#types`,`id`,`type`);
let elyFXSC = eo('datalist','eCif',null,`id`,`types`);
for (let i in component.response.propertyTypes) {
let type = component.response.propertyTypes[i]; 
 let iiESn2 = 'VAMYXNf' + i;
let elJcq6n = eo('option','ZUlhxOuQAti5' + i+iiESn2,null,`value`,`${type.value}`);
ec('option');
}
ec('datalist');
ec('div');
let el7yI15 = eo('div','LfSf',null,`class`,`form-group col-md-3`);
let elVXoju = ev('input','0DDf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Beds`)}`,`type`,`text`,`class`,`form-control`,`list`,`#beds`,`id`,`type`);
let eleMvUh = eo('datalist','fYof',null,`id`,`beds`);
for (let i = 0; i <= 10; i++) {
let iiL38S = 'VJeBEVr' + i;
let elX3B2a = eo('option','10PdqkGgDn7R' + i+iiL38S,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let eli7UoJ = eo('div','stgf',null,`class`,`form-group col-md-3`);
let el5gMNP = ev('input','VDpf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Baths`)}`,`type`,`text`,`class`,`form-control`,`list`,`#baths`,`id`,`type`);
let el4Lyj8 = eo('datalist','8mTf',null,`id`,`baths`);
for (let i = 0; i <= 10; i++) {
let iiFjq2 = 'EW8E3vy' + i;
let elXtoub = eo('option','q5NlB0gU1udp' + i+iiFjq2,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elSRx3G = eo('div','CKtf',null,`class`,`input-group col-md-12`);
let el8p0HQ = eo('label','R2jf',null,`for`,`area`,`class`,`d-block`);
text(`Property area`);
ec('label');
let elnJUGy = ev('input','lZVf',null,`name`,`${(`area`).toInputName()}`,`placeholder`,`${trans(`0`)}`,`type`,`text`,`id`,`area`,`class`,`form-control`,`aria-describedby`,`basic-addon2`);
let elXdgsT = eo('div','rRSf',null,`class`,`input-group-append`);
let el3ZVV_ = eo('span','wpef',null,`class`,`input-group-text`,`id`,`basic-addon2`);
text(`Meter`);
ec('span');
ec('div');
ec('div');
let elgRSII = eo('button','ayAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`type`,`button`,`class`,`adv-action-btn prev`);
text(`Previous`);
ec('button');
let el13sFr = eo('button','4k_f',null,`type`,`submit`,`class`,`adv-action-btn finish`);
text(`Finish`);
ec('button');
ec('div');
}ec('form');
ec('section');
ec('div');
ec('div');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });