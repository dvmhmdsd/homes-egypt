_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency','step','watchStep','response','imageInputs'],
                children: {cQYGAbyS9:'flk-image-input'},
                render: function (component) {
                    let el865nU = eo('section',null,null,`class`,`info-header`);
let eltfTNu = eo('div',null,null,`class`,`container d-flex`);
let elRWrqB = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let elDMBV2 = eo('li',null,null,`class`,`info-item`);
let eltgF4G = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let el8N6aH = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let eloVtKS = eo('li',null,null,`class`,`info-item`);
let el6NKxf = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elXVAWg = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let elh5OqK = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elxXhZZ = eo('li',null,null,`class`,`dropdown info-item`);
let el35jGF = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let el6SGRR = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iiZhCE = 'VAArtUy' + i;
let elUxIEs = eo('li','hxhaK3MMLUo1' + i+iiZhCE,null,`class`,`dropdown-item`);
let elVR42E = eo('button','QX3ff'+iiZhCE,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elz1xFa = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let eljaAkg = eo('div',null,null,`class`,`container`);
let eldo0Rk = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let elpB6zy = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let el4oiCI = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`${assets('images/logo.png')}`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let elyJSho = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let elBuorY = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elWuyhY = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elaukCi = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let el0XYgL = eo('li',null,null,`class`,`nav-item`);
let elHkctc = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elOqguK = eo('li',null,null,`class`,`nav-item`);
let elG2epN = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let elR2mqf = eo('li',null,null,`class`,`nav-item`);
let elG4gxA = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let elCkZBo = eo('li',null,null,`class`,`nav-item`);
let elxAezL = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let elqbTNu = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise
        property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let els34KK = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elfFdpb = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elx38i4 = eo('div',null,null,`class`,`modal-content`);
let elpOHXy = eo('div',null,null,`class`,`modal-header`);
let elv9Hrp = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let elDAR4U = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let el_a0fC = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let el9P0BE = eo('div',null,null,`class`,`modal-body`);
let elwFB5K = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`);

                if (! elwFB5K.formHandler) {
                    window.cfrmdlr = elwFB5K.formHandler = new FormHandler(elwFB5K, component);
                } else {
                    window.cfrmdlr = elwFB5K.formHandler;
                }
            let eln2Tfl = eo('div',null,null,`class`,`form-group`);
let elsrkLS = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwFB5K.formHandler.addError(undefined, 'required', trans('validation.required'));}return elwFB5K.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndlJaz = elwFB5K.formHandler.getError(undefined);
this.setState('stJ5E29', cndlJaz);
if (cndlJaz) { 
let elymrcK = eo('div','quhf',null,`class`,`error-msg`);
text(elwFB5K.formHandler.getError(undefined));
ec('div');
}ec('div');
let eldLvvr = eo('div',null,null,`class`,`form-group`);
let elNZIMZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwFB5K.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elwFB5K.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elwFB5K.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndhJLK = elwFB5K.formHandler.getError(undefined);
this.setState('stYnJ7o', cndhJLK);
if (cndhJLK) { 
let elPyaor = eo('div','Vhxf',null,`class`,`error-msg`);
text(elwFB5K.formHandler.getError(undefined));
ec('div');
}let el3UX5m = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elCR3wk = eo('div',null,null,`class`,`form-group`);
let elZCkmL = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwFB5K.formHandler.addError(undefined, 'required', trans('validation.required'));}return elwFB5K.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndG0e0 = elwFB5K.formHandler.getError(undefined);
this.setState('stX0XvM', cndG0e0);
if (cndG0e0) { 
let elPgO_f = eo('div','bS5f',null,`class`,`error-msg`);
text(elwFB5K.formHandler.getError(undefined));
ec('div');
}ec('div');
let elDt1c8 = eo('div',null,null,`class`,`form-group`);
let elSza63 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwFB5K.formHandler.addError(undefined, 'required', trans('validation.required'));}return elwFB5K.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cndUdle = elwFB5K.formHandler.getError(undefined);
this.setState('staYySv', cndUdle);
if (cndUdle) { 
let elEPYvY = eo('div','6Acf',null,`class`,`error-msg`);
text(elwFB5K.formHandler.getError(undefined));
ec('div');
}ec('div');
let el5NLlQ = eo('div',null,null,`class`,`form-group`);
let eltI6Vv = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwFB5K.formHandler.addError(undefined, 'required', trans('validation.required'));}return elwFB5K.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndkhWk = elwFB5K.formHandler.getError(undefined);
this.setState('st8Dao_', cndkhWk);
if (cndkhWk) { 
let elZwli0 = eo('div','J5Cf',null,`class`,`error-msg`);
text(elwFB5K.formHandler.getError(undefined));
ec('div');
}ec('div');
let eleVAng = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let el_OtKt = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elZVCag = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let eluLL7j = eo('div',null,null,`class`,`modal-content`);
let el7ETCW = eo('div',null,null,`class`,`modal-header`);
let elOKGPG = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elme9ea = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let el9xwyS = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elS_uzG = eo('div',null,null,`class`,`modal-body`);
let elKfgFt = eo('section',null,null,`class`,`forms-panel d-flex justify-content-around flex-wrap`);
let elJ02wU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`class`,`user-info info-button col-md-4 col-lg-5`,`data-id`,`step-1`);
component.stepOneBtn = elJ02wU;
let elwB2Ft = eo('span');
text(`1`);
ec('span');
text(`user info`);
ec('button');
let el0MOmu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`property-info info-button col-md-4 col-lg-5`,`data-id`,`step-2`);
component.stepTwoBtn = el0MOmu;
let elpcPzd = eo('span');
text(`2`);
ec('span');
text(`property`);
ec('button');
ec('section');
let eli1B5L = eo('section',null,null,`class`,`property-form`);
let elmE3Er = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/add-property/submit`);

                if (! elmE3Er.formHandler) {
                    window.cfrmdlr = elmE3Er.formHandler = new FormHandler(elmE3Er, component);
                } else {
                    window.cfrmdlr = elmE3Er.formHandler;
                }
            let cndyfUo = component.step == 'step-1';
this.setState('stJWIjO', cndyfUo);
if (cndyfUo) { 
let el2EdLd = eo('div','86Rf',null,`id`,`step-1`,`class`,`d-flex flex-wrap justify-content-between`);
let elwcXJ6 = eo('div','r6Xf',null,`class`,`form-group col-md-6`);
let el7RO1w = eo('div','uaCf',null,`class`,`form-group`);
el7RO1w.cls = {'group-error': !!elmE3Er.formHandler.getError(`username`) };

            for (let className in el7RO1w.cls) {
                el7RO1w.classList.toggle(className, el7RO1w.cls[className]);
            }  
            let elKnKS5 = eo('label','JTuf',null,`for`,`username`);
text(trans('Full Name'));
ec('label');
let eloD0z_ = ev('input','9MFf',null,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`e.g: John Doe`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
ec('div');
ec('div');
let el9ubA7 = eo('div','qEOf',null,`class`,`form-group col-md-6`);
let el13dm9 = eo('div','kPrf',null,`class`,`form-group`);
el13dm9.cls = {'group-error': !!elmE3Er.formHandler.getError(`email`) };

            for (let className in el13dm9.cls) {
                el13dm9.classList.toggle(className, el13dm9.cls[className]);
            }  
            let elUFfst = eo('label','AKtf',null,`for`,`email`);
text(trans('Email Address'));
ec('label');
let elbjjON = ev('input','s_zf',null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elmE3Er.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elmE3Er.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`e.g: test@test.com`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cnd7Fa3 = elmE3Er.formHandler.getError(`email`);
this.setState('st0DOQP', cnd7Fa3);
if (cnd7Fa3) { 
let elcJ0hf = eo('div','elSf',null,`class`,`error-msg`);
text(elmE3Er.formHandler.getError(`email`));
ec('div');
}ec('div');
ec('div');
let el0cRrX = eo('div',null,null,`class`,`form-group col-md-6`);
let elktLn9 = eo('div',null,null,`class`,`form-group`);
elktLn9.cls = {'group-error': !!elmE3Er.formHandler.getError(`phone`) };

            for (let className in elktLn9.cls) {
                elktLn9.classList.toggle(className, elktLn9.cls[className]);
            }  
            let elVMfcH = eo('label',null,null,`for`,`phone`);
text(trans('Phone Number'));
ec('label');
let elGFsb_ = ev('input',null,null,`name`,`${(`phone`).toInputName()}`,`placeholder`,`${trans(`Phone Number`)}`,`type`,`number`,`class`,`form-control`,`id`,`phone`);
ec('div');
ec('div');
let elIFOWr = eo('div',null,null,`class`,`form-group col-md-6`);
let eluXZrr = eo('div',null,null,`class`,`form-group`);
eluXZrr.cls = {'group-error': !!elmE3Er.formHandler.getError(`address`) };

            for (let className in eluXZrr.cls) {
                eluXZrr.classList.toggle(className, eluXZrr.cls[className]);
            }  
            let elXg_Pb = eo('label',null,null,`for`,`address`);
text(trans('Address'));
ec('label');
let elaU1WG = ev('input',null,null,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elaU1WG.autocomplete = elaU1WG.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
ec('div');
ec('div');
let elYDst5 = eo('div',null,null,`class`,`form-group col-md-6`);
let elpjBoj = ev('input',null,null,`name`,`${(`city`).toInputName()}`,`placeholder`,`${trans(`Your City`)}`,`type`,`text`,`class`,`form-control border-bottom`,`id`,`city`);
ec('div');
let elWmS3e = eo('div',null,null,`class`,`form-group col-md-6`);
let el7lygr = ev('input',null,null,`name`,`${(`district`).toInputName()}`,`placeholder`,`${trans(`Your District`)}`,`type`,`text`,`class`,`form-control  border-bottom`,`id`,`district`);
ec('div');
let elPJdHs = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`adv-action-btn next`);
text(`Next`);
ec('button');
ec('div');
}let cnd3Yki = component.step == 'step-2';
this.setState('stMN43P', cnd3Yki);
if (cnd3Yki) { 
let elMwxqo = eo('div','uPif',null,`id`,`step-2`,`class`,`d-flex flex-wrap`);
let elqQDqO = eo('div','ZZrf',null,`class`,`form-group col-md-6`);
let eliSMND = ev('input','0wxf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Choose type`)}`,`type`,`text`,`class`,`form-control`,`list`,`#types`,`id`,`type`);
let elPk17t = eo('datalist','ZcWf',null,`id`,`types`);
for (let i in component.response.propertyTypes) {
let type = component.response.propertyTypes[i]; 
 let iiLd2v = 'ph2jzcv' + i;
let elfZPge = eo('option','jgofeWEL4Gfd' + i+iiLd2v,null,`value`,`${type.value}`);
ec('option');
}
ec('datalist');
ec('div');
let elRsqDK = eo('div','yEgf',null,`class`,`form-group col-md-3`);
let elzp19L = ev('input','riIf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Beds`)}`,`type`,`text`,`class`,`form-control`,`list`,`#beds`,`id`,`type`);
let elIHHMg = eo('datalist','mx1f',null,`id`,`beds`);
for (let i = 0; i <= 10; i++) {
let iiODEr = 'kPgvVcU' + i;
let el5EmDG = eo('option','19Ja44n2y3Kp' + i+iiODEr,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elcuS5H = eo('div','sBEf',null,`class`,`form-group col-md-3`);
let elU2y1p = ev('input','pfbf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Baths`)}`,`type`,`text`,`class`,`form-control`,`list`,`#baths`,`id`,`type`);
let el2WZN9 = eo('datalist','AfKf',null,`id`,`baths`);
for (let i = 0; i <= 10; i++) {
let iiFMSE = 'GYBrKgu' + i;
let elCgvDI = eo('option','zE1UJ0o0vA7j' + i+iiFMSE,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elmgf9j = eo('div','mb8f',null,`class`,`input-group col-md-12`);
let eltsume = eo('label','bEuf',null,`for`,`area`,`class`,`d-block`);
text(`Property area`);
ec('label');
let elEX8y2 = ev('input','vCof',null,`name`,`${(`area`).toInputName()}`,`placeholder`,`${trans(`0`)}`,`type`,`text`,`id`,`area`,`class`,`form-control`,`aria-describedby`,`basic-addon2`);
let elEJcBo = eo('div','8iHf',null,`class`,`input-group-append`);
let elG_kI2 = eo('span','8eNf',null,`class`,`input-group-text`,`id`,`basic-addon2`);
text(`Meter`);
ec('span');
ec('div');
ec('div');
let elsUCBf = eo('div','6e1f',null,`class`,`form-group image-input col-md-12 d-flex flex-wrap`);
for (let i in component.imageInputs) {
let image = component.imageInputs[i]; 
 let iiDoj0 = 'rYLQCDa' + i;

                if (! component.imageInput) {
                    component.imageInput = [];
                }
            ;
component.imageInput[i] = this._lc('cQYGAbyS9', {parent:component,attrs:{name:`${(`images[]`).toInputName()}`},state:'stMN43P',insideLoop:true,index:"" +iiDoj0});;
}
let elutYbx = eo('button','9elf',null, eventListeners, {onclick:[function(e) {var $el = this;component.imageInputs.push('')}]},`title`,`${trans(`Add more image`)}`,`class`,`btn-icon`);
let elJz7Q6 = eo('i','fHKf',null,`class`,`fa fa-plus`);
ec('i');
ec('button');
ec('div');
let el4uUgN = eo('button','Bd7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`type`,`button`,`class`,`adv-action-btn prev`);
text(`Previous`);
ec('button');
let eljBYPh = eo('button','vrMf',null,`type`,`submit`,`class`,`adv-action-btn finish`);
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