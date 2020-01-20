_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency','step','watchStep','response','imageInputs'],
                children: {cBYablq7o:'flk-image-input'},
                render: function (component) {
                    let elWXiBG = eo('section',null,null,`class`,`info-header`);
let eliQ0OL = eo('div',null,null,`class`,`container d-flex`);
let elubdKI = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let elzHxlM = eo('li',null,null,`class`,`info-item`);
let eledi52 = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let ellEmTp = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let elO6NPM = eo('li',null,null,`class`,`info-item`);
let ell2ZEP = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let el48iRB = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let el8UWSq = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elaoqji = eo('li',null,null,`class`,`dropdown info-item`);
let el3L0XN = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let el6LCoY = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iidOCN = 'pwom6tl' + i;
let elSxOnJ = eo('li','bbneBCC4TCTh' + i+iidOCN,null,`class`,`dropdown-item`);
let elHFDo9 = eo('button','zKrff'+iidOCN,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elEBVKd = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let elQVQiO = eo('div',null,null,`class`,`container`);
let el8vIw4 = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let elXBp0K = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let eljonXd = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`${assets('images/logo.png')}`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let el_WUxy = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let elKPNn1 = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elv0es9 = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elaVpUN = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let el0p26z = eo('li',null,null,`class`,`nav-item`);
let elWPVer = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let el5Kk_S = eo('li',null,null,`class`,`nav-item`);
let elkVpZI = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let elBZRov = eo('li',null,null,`class`,`nav-item`);
let elsvI9b = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let el8z0Tk = eo('li',null,null,`class`,`nav-item`);
let elGDkgo = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let el3BLTG = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise
        property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elE4cUK = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elqtl_H = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elk8zx6 = eo('div',null,null,`class`,`modal-content`);
let ellsxC_ = eo('div',null,null,`class`,`modal-header`);
let elVRc48 = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let eluONXs = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elizskb = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elhcuMt = eo('div',null,null,`class`,`modal-body`);
let eltkVYw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`);

                if (! eltkVYw.formHandler) {
                    window.cfrmdlr = eltkVYw.formHandler = new FormHandler(eltkVYw, component);
                } else {
                    window.cfrmdlr = eltkVYw.formHandler;
                }
            let elXPxLv = eo('div',null,null,`class`,`form-group`);
let el280Px = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltkVYw.formHandler.addError(undefined, 'required', trans('validation.required'));}return eltkVYw.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndItvn = eltkVYw.formHandler.getError(undefined);
this.setState('st6MofN', cndItvn);
if (cndItvn) { 
let elo3BvA = eo('div','qjhf',null,`class`,`error-msg`);
text(eltkVYw.formHandler.getError(undefined));
ec('div');
}ec('div');
let elc5h0Y = eo('div',null,null,`class`,`form-group`);
let elhrmQc = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltkVYw.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eltkVYw.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return eltkVYw.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndWGgN = eltkVYw.formHandler.getError(undefined);
this.setState('stO590u', cndWGgN);
if (cndWGgN) { 
let eliTLrl = eo('div','lftf',null,`class`,`error-msg`);
text(eltkVYw.formHandler.getError(undefined));
ec('div');
}let elRodbI = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elnmlMe = eo('div',null,null,`class`,`form-group`);
let el1aqhV = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltkVYw.formHandler.addError(undefined, 'required', trans('validation.required'));}return eltkVYw.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndfcdA = eltkVYw.formHandler.getError(undefined);
this.setState('stC6K9X', cndfcdA);
if (cndfcdA) { 
let elzA49p = eo('div','nnef',null,`class`,`error-msg`);
text(eltkVYw.formHandler.getError(undefined));
ec('div');
}ec('div');
let el8lyVe = eo('div',null,null,`class`,`form-group`);
let elbToZX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltkVYw.formHandler.addError(undefined, 'required', trans('validation.required'));}return eltkVYw.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cndnPjc = eltkVYw.formHandler.getError(undefined);
this.setState('stbkKAd', cndnPjc);
if (cndnPjc) { 
let elFHMhI = eo('div','Mpdf',null,`class`,`error-msg`);
text(eltkVYw.formHandler.getError(undefined));
ec('div');
}ec('div');
let elJoROy = eo('div',null,null,`class`,`form-group`);
let elRXDA9 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltkVYw.formHandler.addError(undefined, 'required', trans('validation.required'));}return eltkVYw.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndetcV = eltkVYw.formHandler.getError(undefined);
this.setState('stS8JZi', cndetcV);
if (cndetcV) { 
let elzFSWi = eo('div','A5jf',null,`class`,`error-msg`);
text(eltkVYw.formHandler.getError(undefined));
ec('div');
}ec('div');
let elgsi0k = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let elbA9XA = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let el0cnS7 = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let el9H83f = eo('div',null,null,`class`,`modal-content`);
let elcQvSh = eo('div',null,null,`class`,`modal-header`);
let elA8J8w = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elJMEhr = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elgL9fE = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elb72mZ = eo('div',null,null,`class`,`modal-body`);
let elGIqHh = eo('section',null,null,`class`,`forms-panel d-flex justify-content-around flex-wrap`);
let elCMhDA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`class`,`user-info info-button col-md-4 col-lg-5`,`data-id`,`step-1`);
component.stepOneBtn = elCMhDA;
let elKMZdZ = eo('span');
text(`1`);
ec('span');
text(`user info`);
ec('button');
let elzP1kH = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`property-info info-button col-md-4 col-lg-5`,`data-id`,`step-2`);
component.stepTwoBtn = elzP1kH;
let el5kRsw = eo('span');
text(`2`);
ec('span');
text(`property`);
ec('button');
ec('section');
let elhtCP8 = eo('section',null,null,`class`,`property-form`);
let elGlGaB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/add-property/submit`);

                if (! elGlGaB.formHandler) {
                    window.cfrmdlr = elGlGaB.formHandler = new FormHandler(elGlGaB, component);
                } else {
                    window.cfrmdlr = elGlGaB.formHandler;
                }
            let cndyG00 = component.step == 'step-1';
this.setState('sto1_KN', cndyG00);
if (cndyG00) { 
let elp04rZ = eo('div','Je6f',null,`id`,`step-1`,`class`,`d-flex flex-wrap justify-content-between`);
let elbILYZ = eo('div','5fhf',null,`class`,`form-group col-md-6`);
let elIKlTx = eo('div','Yr_f',null,`class`,`form-group`);
elIKlTx.cls = {'group-error': !!elGlGaB.formHandler.getError(`username`) };

            for (let className in elIKlTx.cls) {
                elIKlTx.classList.toggle(className, elIKlTx.cls[className]);
            }  
            let eljcz9y = eo('label','dEhf',null,`for`,`username`);
text(trans('Full Name'));
ec('label');
let elSfM36 = ev('input','VKLf',null,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`e.g: John Doe`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
ec('div');
ec('div');
let elN5Zzi = eo('div','Xsuf',null,`class`,`form-group col-md-6`);
let elPgqBV = eo('div','W9pf',null,`class`,`form-group`);
elPgqBV.cls = {'group-error': !!elGlGaB.formHandler.getError(`email`) };

            for (let className in elPgqBV.cls) {
                elPgqBV.classList.toggle(className, elPgqBV.cls[className]);
            }  
            let elUP1Hk = eo('label','dnuf',null,`for`,`email`);
text(trans('Email Address'));
ec('label');
let el90RFT = ev('input','8NVf',null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elGlGaB.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elGlGaB.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`e.g: test@test.com`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndh95p = elGlGaB.formHandler.getError(`email`);
this.setState('st8sUci', cndh95p);
if (cndh95p) { 
let elHxGIh = eo('div','9YVf',null,`class`,`error-msg`);
text(elGlGaB.formHandler.getError(`email`));
ec('div');
}ec('div');
ec('div');
let elPBUtJ = eo('div',null,null,`class`,`form-group col-md-6`);
let elrySka = eo('div',null,null,`class`,`form-group`);
elrySka.cls = {'group-error': !!elGlGaB.formHandler.getError(`phone`) };

            for (let className in elrySka.cls) {
                elrySka.classList.toggle(className, elrySka.cls[className]);
            }  
            let elJ7IVH = eo('label',null,null,`for`,`phone`);
text(trans('Phone Number'));
ec('label');
let el38hyD = ev('input',null,null,`name`,`${(`phone`).toInputName()}`,`placeholder`,`${trans(`Phone Number`)}`,`type`,`number`,`class`,`form-control`,`id`,`phone`);
ec('div');
ec('div');
let elmf2IU = eo('div',null,null,`class`,`form-group col-md-6`);
let elcMwx0 = eo('div',null,null,`class`,`form-group`);
elcMwx0.cls = {'group-error': !!elGlGaB.formHandler.getError(`address`) };

            for (let className in elcMwx0.cls) {
                elcMwx0.classList.toggle(className, elcMwx0.cls[className]);
            }  
            let elIVjxE = eo('label',null,null,`for`,`address`);
text(trans('Address'));
ec('label');
let el97lZG = ev('input',null,null,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el97lZG.autocomplete = el97lZG.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
ec('div');
ec('div');
let eluM3al = eo('div',null,null,`class`,`form-group col-md-6`);
let elYvrBK = ev('input',null,null,`name`,`${(`city`).toInputName()}`,`placeholder`,`${trans(`Your City`)}`,`type`,`text`,`class`,`form-control border-bottom`,`id`,`city`);
ec('div');
let el4QGYv = eo('div',null,null,`class`,`form-group col-md-6`);
let elQKrFm = ev('input',null,null,`name`,`${(`district`).toInputName()}`,`placeholder`,`${trans(`Your District`)}`,`type`,`text`,`class`,`form-control  border-bottom`,`id`,`district`);
ec('div');
let el28xH1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-2'; component.watchStep()}]},`class`,`adv-action-btn next`);
text(`Next`);
ec('button');
ec('div');
}let cndou8f = component.step == 'step-2';
this.setState('stP4uHS', cndou8f);
if (cndou8f) { 
let elY993i = eo('div','nGJf',null,`id`,`step-2`,`class`,`d-flex flex-wrap`);
let elr4Z47 = eo('div','Tqnf',null,`class`,`form-group col-md-6`);
let elsIwSK = ev('input','XuHf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Choose type`)}`,`type`,`text`,`class`,`form-control`,`list`,`#types`,`id`,`type`);
let elD1BDh = eo('datalist','5Qrf',null,`id`,`types`);
for (let i in component.response.propertyTypes) {
let type = component.response.propertyTypes[i]; 
 let iitL7z = 'AOH5PkQ' + i;
let el3Leme = eo('option','FbkxQCBmlppD' + i+iitL7z,null,`value`,`${type.value}`);
ec('option');
}
ec('datalist');
ec('div');
let elRGyeN = eo('div','TNBf',null,`class`,`form-group col-md-3`);
let elIFrHn = ev('input','gGQf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Beds`)}`,`type`,`text`,`class`,`form-control`,`list`,`#beds`,`id`,`type`);
let elb_EJl = eo('datalist','9uQf',null,`id`,`beds`);
for (let i = 0; i <= 10; i++) {
let iicejf = 'EwQXZVk' + i;
let ely1O0h = eo('option','NoZuDC9dfuXU' + i+iicejf,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elKq23Q = eo('div','P3cf',null,`class`,`form-group col-md-3`);
let elsaxBK = ev('input','gU7f',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Baths`)}`,`type`,`text`,`class`,`form-control`,`list`,`#baths`,`id`,`type`);
let elRZ8IW = eo('datalist','9osf',null,`id`,`baths`);
for (let i = 0; i <= 10; i++) {
let iimmAx = 'lfJmr2O' + i;
let elFkbzl = eo('option','iPOqVPm91QDk' + i+iimmAx,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elSKg8d = eo('div','4alf',null,`class`,`input-group col-md-12`);
let elKMsc6 = eo('label','icvf',null,`for`,`area`,`class`,`d-block`);
text(`Property area`);
ec('label');
let el1vV1S = ev('input','2_mf',null,`name`,`${(`area`).toInputName()}`,`placeholder`,`${trans(`0`)}`,`type`,`text`,`id`,`area`,`class`,`form-control`,`aria-describedby`,`basic-addon2`);
let elRGe_e = eo('div','Mwhf',null,`class`,`input-group-append`);
let elwnJRk = eo('span','pvsf',null,`class`,`input-group-text`,`id`,`basic-addon2`);
text(`Meter`);
ec('span');
ec('div');
ec('div');
let eloARMi = eo('div','qkhf',null,`class`,`form-group image-input col-md-12 d-flex flex-wrap`);
for (let i in component.imageInputs) {
let image = component.imageInputs[i]; 
 let iifzev = 'cUkJq7w' + i;

                if (! component.imageInput) {
                    component.imageInput = [];
                }
            ;
component.imageInput[i] = this._lc('cBYablq7o', {parent:component,attrs:{name:`${(`images[]`).toInputName()}`},state:'stP4uHS',insideLoop:true,index:"" +iifzev});;
}
let elFGmG7 = eo('button','pVzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.imageInputs.push('')}]},`title`,`${trans(`Add more image`)}`,`class`,`btn-icon`);
let eluUwML = eo('i','Tb4f',null,`class`,`fa fa-plus`);
ec('i');
ec('button');
ec('div');
let eltbdkT = eo('button','PSJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.step = 'step-1'; component.watchStep()}]},`type`,`button`,`class`,`adv-action-btn prev`);
text(`Previous`);
ec('button');
let el_tw7C = eo('button','nTmf',null,`type`,`submit`,`class`,`adv-action-btn finish`);
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