_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency','step','watchStep','response','imageInputs'],
                children: {cZcc9ZRpb:'flk-image-input'},
                render: function (component) {
                    let elPYY0u = eo('section',null,null,`class`,`info-header`);
let elF8LM5 = eo('div',null,null,`class`,`container d-flex`);
let el8UtTP = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let el6B5FY = eo('li',null,null,`class`,`info-item`);
let el_SAps = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elR9YlO = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let elnS9vO = eo('li',null,null,`class`,`info-item`);
let elgvPNQ = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let el09EtK = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let elvpqpz = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elMZkqH = eo('li',null,null,`class`,`dropdown info-item`);
let elIRgKd = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let elctIVD = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let ii3UDp = 'B9NmfcR' + i;
let elJeR09 = eo('li','nKZK4Sz36iw6' + i+ii3UDp,null,`class`,`dropdown-item`);
let eluwtQh = eo('button','KZHff'+ii3UDp,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elwN6fk = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let elYi2ZE = eo('div',null,null,`class`,`container`);
let elC09Qg = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let el0U5cz = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let elMPrih = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`/public/homes/images/logo.png`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let elYtVWN = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let elNNNa0 = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let el7jPiB = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elxyxr9 = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let elVTWDf = eo('li',null,null,`class`,`nav-item`);
let eliQOJh = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let eluata8 = eo('li',null,null,`class`,`nav-item`);
let elaUpeq = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let elVudjY = eo('li',null,null,`class`,`nav-item`);
let elB4GBf = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let elhJyAw = eo('li',null,null,`class`,`nav-item`);
let eljCSLt = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let elDNi7e = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise
        property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elAONwj = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elXk0Yp = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elboM4v = eo('div',null,null,`class`,`modal-content`);
let elJ95TY = eo('div',null,null,`class`,`modal-header`);
let el3S72M = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let eldpkrL = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elwo0pS = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let el2BCPb = eo('div',null,null,`class`,`modal-body`);
let elAEAg1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`);

                if (! elAEAg1.formHandler) {
                    window.cfrmdlr = elAEAg1.formHandler = new FormHandler(elAEAg1, component);
                } else {
                    window.cfrmdlr = elAEAg1.formHandler;
                }
            let eltkoJa = eo('div',null,null,`class`,`form-group`);
let elZBPuA = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAEAg1.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAEAg1.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cnd560t = elAEAg1.formHandler.getError(undefined);
this.setState('st5LhA5', cnd560t);
if (cnd560t) { 
let elU1oqR = eo('div','xmCf',null,`class`,`error-msg`);
text(elAEAg1.formHandler.getError(undefined));
ec('div');
}ec('div');
let elu1SX4 = eo('div',null,null,`class`,`form-group`);
let elxw1VS = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAEAg1.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elAEAg1.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elAEAg1.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndOont = elAEAg1.formHandler.getError(undefined);
this.setState('stKTaHQ', cndOont);
if (cndOont) { 
let elLcTak = eo('div','6RJf',null,`class`,`error-msg`);
text(elAEAg1.formHandler.getError(undefined));
ec('div');
}let elFiVaf = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elRuMV3 = eo('div',null,null,`class`,`form-group`);
let elbNue1 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAEAg1.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAEAg1.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cnd7Eng = elAEAg1.formHandler.getError(undefined);
this.setState('stVfCfc', cnd7Eng);
if (cnd7Eng) { 
let elKnKEe = eo('div','5H9f',null,`class`,`error-msg`);
text(elAEAg1.formHandler.getError(undefined));
ec('div');
}ec('div');
let elTET61 = eo('div',null,null,`class`,`form-group`);
let elIHxGd = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAEAg1.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAEAg1.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cndJGmN = elAEAg1.formHandler.getError(undefined);
this.setState('st2N28u', cndJGmN);
if (cndJGmN) { 
let el91WuX = eo('div','EAQf',null,`class`,`error-msg`);
text(elAEAg1.formHandler.getError(undefined));
ec('div');
}ec('div');
let eluQC6K = eo('div',null,null,`class`,`form-group`);
let elu2keg = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAEAg1.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAEAg1.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndd7Pn = elAEAg1.formHandler.getError(undefined);
this.setState('stNUqg0', cndd7Pn);
if (cndd7Pn) { 
let el5rGdd = eo('div','VRmf',null,`class`,`error-msg`);
text(elAEAg1.formHandler.getError(undefined));
ec('div');
}ec('div');
let el4bhI6 = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let elHVefe = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elTCsfr = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elhLCtT = eo('div',null,null,`class`,`modal-content`);
let elLJg1S = eo('div',null,null,`class`,`modal-header`);
let elvmIeb = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elGUF5R = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elFLOGa = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elB5ns7 = eo('div',null,null,`class`,`modal-body`);
let elqchKT = eo('section',null,null,`class`,`forms-panel d-flex justify-content-around flex-wrap`);
let elsYrTS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`class`,`user-info info-button col-md-4 col-lg-5`,`data-id`,`step-1`);
component.stepOneBtn = elsYrTS;
let elSefnq = eo('span');
text(`1`);
ec('span');
text(`user info`);
ec('button');
let elBT2QF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`property-info info-button col-md-4 col-lg-5`,`data-id`,`step-2`);
component.stepTwoBtn = elBT2QF;
let elnDdZs = eo('span');
text(`2`);
ec('span');
text(`property`);
ec('button');
ec('section');
let elNhzQa = eo('section',null,null,`class`,`property-form`);
let elSxFoC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/add-property/submit`);

                if (! elSxFoC.formHandler) {
                    window.cfrmdlr = elSxFoC.formHandler = new FormHandler(elSxFoC, component);
                } else {
                    window.cfrmdlr = elSxFoC.formHandler;
                }
            let cndSze5 = component.step == 'step-1';
this.setState('stbK2Jb', cndSze5);
if (cndSze5) { 
let elEpZRe = eo('div','SC9f',null,`id`,`step-1`,`class`,`d-flex flex-wrap justify-content-between`);
let elCnQB2 = eo('div','rIDf',null,`class`,`form-group col-md-6`);
let ely60pp = eo('div','g2ef',null,`class`,`form-group`);
ely60pp.cls = {'group-error': !!elSxFoC.formHandler.getError(`username`) };

            for (let className in ely60pp.cls) {
                ely60pp.classList.toggle(className, ely60pp.cls[className]);
            }  
            let el5VD9q = eo('label','WuXf',null,`for`,`username`);
text(trans('Full Name'));
ec('label');
let elomaUO = ev('input','bUAf',null,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`e.g: John Doe`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
ec('div');
ec('div');
let elUtxNf = eo('div','uf0f',null,`class`,`form-group col-md-6`);
let elEi5L0 = eo('div','XG8f',null,`class`,`form-group`);
elEi5L0.cls = {'group-error': !!elSxFoC.formHandler.getError(`email`) };

            for (let className in elEi5L0.cls) {
                elEi5L0.classList.toggle(className, elEi5L0.cls[className]);
            }  
            let elFyySM = eo('label','ZzSf',null,`for`,`email`);
text(trans('Email Address'));
ec('label');
let el0QVFC = ev('input','Btmf',null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elSxFoC.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elSxFoC.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`e.g: test@test.com`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndvng9 = elSxFoC.formHandler.getError(`email`);
this.setState('stsNxFc', cndvng9);
if (cndvng9) { 
let eluFJf7 = eo('div','rIof',null,`class`,`error-msg`);
text(elSxFoC.formHandler.getError(`email`));
ec('div');
}ec('div');
ec('div');
let eljq4zU = eo('div',null,null,`class`,`form-group col-md-6`);
let el4ln2S = eo('div',null,null,`class`,`form-group`);
el4ln2S.cls = {'group-error': !!elSxFoC.formHandler.getError(`phone`) };

            for (let className in el4ln2S.cls) {
                el4ln2S.classList.toggle(className, el4ln2S.cls[className]);
            }  
            let eluZ9pO = eo('label',null,null,`for`,`phone`);
text(trans('Phone Number'));
ec('label');
let el5ykjK = ev('input',null,null,`name`,`${(`phone`).toInputName()}`,`placeholder`,`${trans(`Phone Number`)}`,`type`,`number`,`class`,`form-control`,`id`,`phone`);
ec('div');
ec('div');
let elg9WUs = eo('div',null,null,`class`,`form-group col-md-6`);
let el9zFAh = eo('div',null,null,`class`,`form-group`);
el9zFAh.cls = {'group-error': !!elSxFoC.formHandler.getError(`address`) };

            for (let className in el9zFAh.cls) {
                el9zFAh.classList.toggle(className, el9zFAh.cls[className]);
            }  
            let elVRD5P = eo('label',null,null,`for`,`address`);
text(trans('Address'));
ec('label');
let elCkK5v = ev('input',null,null,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elCkK5v.autocomplete = elCkK5v.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
ec('div');
ec('div');
let elv01NZ = eo('div',null,null,`class`,`form-group col-md-6`);
let elChN98 = ev('input',null,null,`name`,`${(`city`).toInputName()}`,`placeholder`,`${trans(`Your City`)}`,`type`,`text`,`class`,`form-control border-bottom`,`id`,`city`);
ec('div');
let elaRkUX = eo('div',null,null,`class`,`form-group col-md-6`);
let elb4k6P = ev('input',null,null,`name`,`${(`district`).toInputName()}`,`placeholder`,`${trans(`Your District`)}`,`type`,`text`,`class`,`form-control  border-bottom`,`id`,`district`);
ec('div');
let elNK1CJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`adv-action-btn next`);
text(`Next`);
ec('button');
ec('div');
}let cnd2sVe = component.step == 'step-2';
this.setState('stN693Q', cnd2sVe);
if (cnd2sVe) { 
let el5P5EM = eo('div','Pvwf',null,`id`,`step-2`,`class`,`d-flex flex-wrap`);
let elf2gOS = eo('div','Gs7f',null,`class`,`form-group col-md-6`);
let elayIc3 = ev('input','PTuf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Choose type`)}`,`type`,`text`,`class`,`form-control`,`list`,`#types`,`id`,`type`);
let el3cW9n = eo('datalist','qEQf',null,`id`,`types`);
for (let i in component.response.propertyTypes) {
let type = component.response.propertyTypes[i]; 
 let iibPtZ = 'yjtNljO' + i;
let el9CTVA = eo('option','4H31nKgyUFF6' + i+iibPtZ,null,`value`,`${type.value}`);
ec('option');
}
ec('datalist');
ec('div');
let elrEw00 = eo('div','xiVf',null,`class`,`form-group col-md-3`);
let elaHlAn = ev('input','f5ff',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Beds`)}`,`type`,`text`,`class`,`form-control`,`list`,`#beds`,`id`,`type`);
let elX0MIg = eo('datalist','MDff',null,`id`,`beds`);
for (let i = 0; i <= 10; i++) {
let iilJkI = '_WATOMH' + i;
let elLYTgR = eo('option','MeMeYfj3Byvt' + i+iilJkI,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elrbO1U = eo('div','JTaf',null,`class`,`form-group col-md-3`);
let elUKMBO = ev('input','qg_f',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Baths`)}`,`type`,`text`,`class`,`form-control`,`list`,`#baths`,`id`,`type`);
let elEbF5K = eo('datalist','uWKf',null,`id`,`baths`);
for (let i = 0; i <= 10; i++) {
let iiaE55 = 'CDuTkUq' + i;
let elHNk3V = eo('option','_nyoxsyw4qJg' + i+iiaE55,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elRiH6_ = eo('div','EZtf',null,`class`,`input-group col-md-12`);
let eljS9WC = eo('label','bBpf',null,`for`,`area`,`class`,`d-block`);
text(`Property area`);
ec('label');
let elfTsL9 = ev('input','Ahsf',null,`name`,`${(`area`).toInputName()}`,`placeholder`,`${trans(`0`)}`,`type`,`text`,`id`,`area`,`class`,`form-control`,`aria-describedby`,`basic-addon2`);
let elKIn9X = eo('div','MaJf',null,`class`,`input-group-append`);
let el46QFo = eo('span','DLjf',null,`class`,`input-group-text`,`id`,`basic-addon2`);
text(`Meter`);
ec('span');
ec('div');
ec('div');
let elNkby2 = eo('div','1ctf',null,`class`,`form-group image-input col-md-12 d-flex flex-wrap`);
for (let i in component.imageInputs) {
let image = component.imageInputs[i]; 
 let ii2hj2 = '6SdMDRI' + i;

                if (! component.imageInput) {
                    component.imageInput = [];
                }
            ;
component.imageInput[i] = this._lc('cZcc9ZRpb', {parent:component,attrs:{name:`${(`images[]`).toInputName()}`},state:'stN693Q',insideLoop:true,index:"" +ii2hj2});;
}
let elvgeoW = eo('button','YIFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.imageInputs.push('')}]},`title`,`${trans(`Add more image`)}`,`class`,`btn-icon`);
let ellgT4T = eo('i','4nDf',null,`class`,`fa fa-plus`);
ec('i');
ec('button');
ec('div');
let el8gUAx = eo('button','aNZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`type`,`button`,`class`,`adv-action-btn prev`);
text(`Previous`);
ec('button');
let el8Cxi8 = eo('button','n3nf',null,`type`,`submit`,`class`,`adv-action-btn finish`);
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