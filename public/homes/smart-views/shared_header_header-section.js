_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency','step','watchStep','response','duplicateInput'],
                children: {cMBZuFhJr:'flk-image-input'},
                render: function (component) {
                    let el6rEuk = eo('section',null,null,`class`,`info-header`);
let el2SzG1 = eo('div',null,null,`class`,`container d-flex`);
let elMFmn9 = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let eltjsZX = eo('li',null,null,`class`,`info-item`);
let el2xpXU = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let el_gA0s = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let elc1j9f = eo('li',null,null,`class`,`info-item`);
let elbDHz_ = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let eljzvEa = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let elKJSPf = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elrZd1h = eo('li',null,null,`class`,`dropdown info-item`);
let eljCheL = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let elbSKhe = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iiPnYP = 'IEyKkFo' + i;
let elR4gW8 = eo('li','tvu9XbvW7LZH' + i+iiPnYP,null,`class`,`dropdown-item`);
let elFzshY = eo('button','U1Vff'+iiPnYP,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elcPCes = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let el5qSBY = eo('div',null,null,`class`,`container`);
let elF9pe9 = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let el7dRF_ = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let elyMWhK = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`/public/homes/images/logo.png`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let elzUSUy = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let ellrCAN = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elmDKLI = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elKTkDS = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let eljO69r = eo('li',null,null,`class`,`nav-item`);
let elHwCl4 = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elRLMrx = eo('li',null,null,`class`,`nav-item`);
let elVigzA = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let eltrfI4 = eo('li',null,null,`class`,`nav-item`);
let elrMhPT = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let elqFHtW = eo('li',null,null,`class`,`nav-item`);
let elRPNbR = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let elDWlXg = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise
        property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elClD9Y = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elQaX_Y = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elIsLI0 = eo('div',null,null,`class`,`modal-content`);
let el6behY = eo('div',null,null,`class`,`modal-header`);
let elJdtiD = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let elaaz0W = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elx0qso = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let el7SrXi = eo('div',null,null,`class`,`modal-body`);
let eljk2La = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`);

                if (! eljk2La.formHandler) {
                    window.cfrmdlr = eljk2La.formHandler = new FormHandler(eljk2La, component);
                } else {
                    window.cfrmdlr = eljk2La.formHandler;
                }
            let el9yuPD = eo('div',null,null,`class`,`form-group`);
let elhVhAk = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljk2La.formHandler.addError(undefined, 'required', trans('validation.required'));}return eljk2La.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndghqi = eljk2La.formHandler.getError(undefined);
this.setState('stwOb0x', cndghqi);
if (cndghqi) { 
let el6vHsp = eo('div','tG6f',null,`class`,`error-msg`);
text(eljk2La.formHandler.getError(undefined));
ec('div');
}ec('div');
let el8ndQh = eo('div',null,null,`class`,`form-group`);
let el1WJEU = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljk2La.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eljk2La.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return eljk2La.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndTk4u = eljk2La.formHandler.getError(undefined);
this.setState('stzWUZk', cndTk4u);
if (cndTk4u) { 
let elsESGO = eo('div','7C2f',null,`class`,`error-msg`);
text(eljk2La.formHandler.getError(undefined));
ec('div');
}let elsBoEA = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elBDYde = eo('div',null,null,`class`,`form-group`);
let ele1Mte = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljk2La.formHandler.addError(undefined, 'required', trans('validation.required'));}return eljk2La.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndhfBG = eljk2La.formHandler.getError(undefined);
this.setState('stkakKM', cndhfBG);
if (cndhfBG) { 
let elfdOa_ = eo('div','wWzf',null,`class`,`error-msg`);
text(eljk2La.formHandler.getError(undefined));
ec('div');
}ec('div');
let eliqJFJ = eo('div',null,null,`class`,`form-group`);
let elM_G81 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljk2La.formHandler.addError(undefined, 'required', trans('validation.required'));}return eljk2La.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cndxzBx = eljk2La.formHandler.getError(undefined);
this.setState('stdzuA0', cndxzBx);
if (cndxzBx) { 
let elOF7Nb = eo('div','2uAf',null,`class`,`error-msg`);
text(eljk2La.formHandler.getError(undefined));
ec('div');
}ec('div');
let elV1Ynd = eo('div',null,null,`class`,`form-group`);
let elJgiLp = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljk2La.formHandler.addError(undefined, 'required', trans('validation.required'));}return eljk2La.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndGA5H = eljk2La.formHandler.getError(undefined);
this.setState('stZqWSQ', cndGA5H);
if (cndGA5H) { 
let elmV9RW = eo('div','NzEf',null,`class`,`error-msg`);
text(eljk2La.formHandler.getError(undefined));
ec('div');
}ec('div');
let elT4FAz = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let elv9M0N = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elQuJqw = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elIx0y5 = eo('div',null,null,`class`,`modal-content`);
let el6Yhx4 = eo('div',null,null,`class`,`modal-header`);
let elNwVxr = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elGJsvF = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elu4LoL = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elBvAir = eo('div',null,null,`class`,`modal-body`);
let elbR32j = eo('section',null,null,`class`,`forms-panel d-flex justify-content-around flex-wrap`);
let elqgMfa = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`class`,`user-info info-button col-md-4 col-lg-5`,`data-id`,`step-1`);
component.stepOneBtn = elqgMfa;
let elCxfBp = eo('span');
text(`1`);
ec('span');
text(`user info`);
ec('button');
let elTiVav = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`property-info info-button col-md-4 col-lg-5`,`data-id`,`step-2`);
component.stepTwoBtn = elTiVav;
let elKMInS = eo('span');
text(`2`);
ec('span');
text(`property`);
ec('button');
ec('section');
let elNhKyC = eo('section',null,null,`class`,`property-form`);
let elUelLj = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/add-property/submit`);

                if (! elUelLj.formHandler) {
                    window.cfrmdlr = elUelLj.formHandler = new FormHandler(elUelLj, component);
                } else {
                    window.cfrmdlr = elUelLj.formHandler;
                }
            let cnd2HmV = component.step == 'step-1';
this.setState('stiChxF', cnd2HmV);
if (cnd2HmV) { 
let elOgWXT = eo('div','QK1f',null,`id`,`step-1`,`class`,`d-flex flex-wrap justify-content-between`);
let elOu3qB = eo('div','qucf',null,`class`,`form-group col-md-6`);
let elNnO9G = eo('div','CBFf',null,`class`,`form-group`);
elNnO9G.cls = {'group-error': !!elUelLj.formHandler.getError(`username`) };

            for (let className in elNnO9G.cls) {
                elNnO9G.classList.toggle(className, elNnO9G.cls[className]);
            }  
            let eleLpU3 = eo('label','0zff',null,`for`,`username`);
text(trans('Full Name'));
ec('label');
let elwEVRO = ev('input','KQXf',null,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`e.g: John Doe`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
ec('div');
ec('div');
let el4MEn6 = eo('div','1fMf',null,`class`,`form-group col-md-6`);
let elXQpzl = eo('div','K0Ff',null,`class`,`form-group`);
elXQpzl.cls = {'group-error': !!elUelLj.formHandler.getError(`email`) };

            for (let className in elXQpzl.cls) {
                elXQpzl.classList.toggle(className, elXQpzl.cls[className]);
            }  
            let elW_Cla = eo('label','zHqf',null,`for`,`email`);
text(trans('Email Address'));
ec('label');
let el72ovG = ev('input','Rotf',null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elUelLj.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elUelLj.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`e.g: test@test.com`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cnd7Fha = elUelLj.formHandler.getError(`email`);
this.setState('st2LOWe', cnd7Fha);
if (cnd7Fha) { 
let elMhaS7 = eo('div','6ECf',null,`class`,`error-msg`);
text(elUelLj.formHandler.getError(`email`));
ec('div');
}ec('div');
ec('div');
let elwsD2P = eo('div',null,null,`class`,`form-group col-md-6`);
let elW0l1W = eo('div',null,null,`class`,`form-group`);
elW0l1W.cls = {'group-error': !!elUelLj.formHandler.getError(`phone`) };

            for (let className in elW0l1W.cls) {
                elW0l1W.classList.toggle(className, elW0l1W.cls[className]);
            }  
            let elbCJYz = eo('label',null,null,`for`,`phone`);
text(trans('Phone Number'));
ec('label');
let elLILQo = ev('input',null,null,`name`,`${(`phone`).toInputName()}`,`placeholder`,`${trans(`Phone Number`)}`,`type`,`number`,`class`,`form-control`,`id`,`phone`);
ec('div');
ec('div');
let el4yBze = eo('div',null,null,`class`,`form-group col-md-6`);
let elcijJR = eo('div',null,null,`class`,`form-group`);
elcijJR.cls = {'group-error': !!elUelLj.formHandler.getError(`address`) };

            for (let className in elcijJR.cls) {
                elcijJR.classList.toggle(className, elcijJR.cls[className]);
            }  
            let elzxT_2 = eo('label',null,null,`for`,`address`);
text(trans('Address'));
ec('label');
let el_2dSk = ev('input',null,null,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el_2dSk.autocomplete = el_2dSk.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
ec('div');
ec('div');
let elKuiQR = eo('div',null,null,`class`,`form-group col-md-6`);
let elX3lYk = ev('input',null,null,`name`,`${(`city`).toInputName()}`,`placeholder`,`${trans(`Your City`)}`,`type`,`text`,`class`,`form-control border-bottom`,`id`,`city`);
ec('div');
let elafTUV = eo('div',null,null,`class`,`form-group col-md-6`);
let elpNZb1 = ev('input',null,null,`name`,`${(`district`).toInputName()}`,`placeholder`,`${trans(`Your District`)}`,`type`,`text`,`class`,`form-control  border-bottom`,`id`,`district`);
ec('div');
let el17Eio = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`adv-action-btn next`);
text(`Next`);
ec('button');
ec('div');
}let cndeNDj = component.step == 'step-2';
this.setState('st0R8pu', cndeNDj);
if (cndeNDj) { 
let elodsop = eo('div','Z2If',null,`id`,`step-2`,`class`,`d-flex flex-wrap`);
let elxMssL = eo('div','iv8f',null,`class`,`form-group col-md-6`);
let el18xZi = ev('input','_pSf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Choose type`)}`,`type`,`text`,`class`,`form-control`,`list`,`#types`,`id`,`type`);
let elT2ikW = eo('datalist','rldf',null,`id`,`types`);
for (let i in component.response.propertyTypes) {
let type = component.response.propertyTypes[i]; 
 let ii3sPj = 'upUnHmK' + i;
let elEAbOx = eo('option','pwazbqF3Zohv' + i+ii3sPj,null,`value`,`${type.value}`);
ec('option');
}
ec('datalist');
ec('div');
let eloG_5L = eo('div','1skf',null,`class`,`form-group col-md-3`);
let elzuSbS = ev('input','IZQf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Beds`)}`,`type`,`text`,`class`,`form-control`,`list`,`#beds`,`id`,`type`);
let elYbdRs = eo('datalist','YXff',null,`id`,`beds`);
for (let i = 0; i <= 10; i++) {
let iiZvw7 = '_Pgnu7j' + i;
let elJbevB = eo('option','NSwBll8wF0pq' + i+iiZvw7,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elRuNgp = eo('div','V1rf',null,`class`,`form-group col-md-3`);
let elgXqcb = ev('input','8mtf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Baths`)}`,`type`,`text`,`class`,`form-control`,`list`,`#baths`,`id`,`type`);
let elVSj7B = eo('datalist','Xh7f',null,`id`,`baths`);
for (let i = 0; i <= 10; i++) {
let iiTBDl = 'mvw1M1d' + i;
let elpK9yy = eo('option','ayChUaajZC7r' + i+iiTBDl,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elKoTRE = eo('div','qpof',null,`class`,`input-group col-md-12`);
let elIITSH = eo('label','fPEf',null,`for`,`area`,`class`,`d-block`);
text(`Property area`);
ec('label');
let elrAyTt = ev('input','BrOf',null,`name`,`${(`area`).toInputName()}`,`placeholder`,`${trans(`0`)}`,`type`,`text`,`id`,`area`,`class`,`form-control`,`aria-describedby`,`basic-addon2`);
let elR157N = eo('div','lfsf',null,`class`,`input-group-append`);
let elrTJMI = eo('span','YOvf',null,`class`,`input-group-text`,`id`,`basic-addon2`);
text(`Meter`);
ec('span');
ec('div');
ec('div');
let elNraVi = eo('div','Vf0f',null,`class`,`form-group image-input col-md-12 d-flex flex-wrap`);
component.imageInput = this._lc('cMBZuFhJr', {parent:component,attrs:{name:`${(`images[]`).toInputName()}`},state:'st0R8pu'});
let elVIFuw = eo('button','M7_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.duplicateInput($el)}]},`title`,`${trans(`add more image`)}`,`class`,`btn-icon`);
let elbwZHi = eo('i','JJxf',null,`class`,`fa fa-plus`);
ec('i');
ec('button');
ec('div');
let eldeTMU = eo('button','jDCf',null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`type`,`button`,`class`,`adv-action-btn prev`);
text(`Previous`);
ec('button');
let elwdiSF = eo('button','BIAf',null,`type`,`submit`,`class`,`adv-action-btn finish`);
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