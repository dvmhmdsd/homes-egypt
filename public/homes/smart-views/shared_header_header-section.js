_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['info','cache','currencies','setCurrency'],
                children: {},
                render: function (component) {
                    let elqFIK5 = eo('section',null,null,`class`,`info-header`);
let elX0snh = eo('div',null,null,`class`,`container d-flex`);
let elc9Imo = eo('ul',null,null,`class`,`mr-auto list-unstyled d-flex`);
let elDDCJo = eo('li',null,null,`class`,`info-item`);
let elH7EIl = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let el_emjP = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('li');
let elJALeg = eo('li',null,null,`class`,`info-item`);
let elMb8SP = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elk29sj = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('li');
ec('ul');
let elfujul = eo('ul',null,null,`class`,`ml-auto list-unstyled`);
let elwzkhP = eo('li',null,null,`class`,`dropdown info-item`);
let eliPeDJ = eo('button',null,null,`class`,`btn btn-link dropdown-toggle`,`type`,`button`,`id`,`dropdownMenuButton`,`data-toggle`,`dropdown`,`aria-haspopup`,`true`,`aria-expanded`,`false`);
text(`Currency (${ component.cache.get("currency") })`);
ec('button');
let elykDxR = eo('ul',null,null,`class`,`dropdown-menu`,`aria-labelledby`,`dropdownMenuButton`);
for (let i in component.currencies) {
let currency = component.currencies[i]; 
 let iiRhY7 = 'tziCgea' + i;
let elA4Yr9 = eo('li','eAE03OjpsKXv' + i+iiRhY7,null,`class`,`dropdown-item`);
let el6bpRq = eo('button','vkgff'+iiRhY7,null, eventListeners, {onclick:[function(e) {var $el = this;component.setCurrency($el)}]},`data-currency`,`${ currency.code }`);
text( currency.code );
ec('button');
ec('li');
}
ec('ul');
ec('li');
ec('ul');
ec('div');
ec('section');
let elz78UF = eo('nav',null,null,`class`,`navbar navbar-expand-lg main-header`);
let eloespL = eo('div',null,null,`class`,`container`);
let elldCDn = eo('h1',null,null,`class`,`header-logo col-lg-2 col-3`);
let elyw3RD = eo('a',null,null,`class`,`navbar-brand`,`href`,`/`);
let elU12kv = ev('img',null,null,`title`,`${trans(`Home`)}`,`src`,`/public/homes/images/logo.png`,`alt`,`Homes logo`);
ec('a');
ec('h1');
let elXqC7c = eo('button',null,null,`class`,`navbar-toggler`,`type`,`button`,`data-toggle`,`collapse`,`data-target`,`#navbarSupportedContent`,`aria-controls`,`navbarSupportedContent`,`aria-expanded`,`false`,`aria-label`,`Toggle navigation`);
let elOmKet = eo('i',null,null,`class`,`fas fa-bars navbar-toggler-icon`);
ec('i');
ec('button');
let elHYU7S = eo('div',null,null,`class`,`collapse navbar-collapse`,`id`,`navbarSupportedContent`);
let elnpZ10 = eo('ul',null,null,`class`,`navbar-nav ml-auto`);
let el3X8M9 = eo('li',null,null,`class`,`nav-item`);
let elAsOvn = eo('a',null,null,`class`,`nav-link`,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elaDZap = eo('li',null,null,`class`,`nav-item`);
let elhlHzN = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=sale`);
text(`sale`);
ec('a');
ec('li');
let elRvLNf = eo('li',null,null,`class`,`nav-item`);
let elihHMz = eo('a',null,null,`class`,`nav-link`,`href`,`/?sale_type=rent`);
text(`rent`);
ec('a');
ec('li');
let elOlKxX = eo('li',null,null,`class`,`nav-item`);
let elfyYEX = eo('a',null,null,`data-toggle`,`modal`,`data-target`,`#contactModal`,`class`,`nav-link`);
text(`contact`);
ec('a');
ec('li');
ec('ul');
let el1U6Zo = eo('button',null,null,`class`,`header-adv btn-action ml-auto`,`data-target`,`#advertiseModal`,`data-toggle`,`modal`);
text(`advertise property`);
ec('button');
ec('div');
ec('div');
ec('nav');
let elFJHP9 = eo('div',null,null,`class`,`contact modal fade`,`id`,`contactModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let elI6w3z = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elchikt = eo('div',null,null,`class`,`modal-content`);
let elrHpc3 = eo('div',null,null,`class`,`modal-header`);
let ellVZor = eo('h5',null,null,`class`,`modal-title`,`id`,`contactModalLabel`);
text(`Contact us`);
ec('h5');
let el8IYrU = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let el2jwi2 = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elP5EgK = eo('div',null,null,`class`,`modal-body`);
let elAcjzt = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elAcjzt.formHandler) {
                    window.cfrmdlr = elAcjzt.formHandler = new FormHandler(elAcjzt, component);
                } else {
                    window.cfrmdlr = elAcjzt.formHandler;
                }
            let el0osnm = eo('div',null,null,`class`,`form-group`);
let elx4KXL = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAcjzt.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAcjzt.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndX38E = elAcjzt.formHandler.getError(undefined);
this.setState('stdbVfS', cndX38E);
if (cndX38E) { 
let elz8s5v = eo('div','HeAf',null,`class`,`error-msg`);
text(elAcjzt.formHandler.getError(undefined));
ec('div');
}ec('div');
let elgng3Z = eo('div',null,null,`class`,`form-group`);
let ell9cuN = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAcjzt.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elAcjzt.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elAcjzt.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cnd4ITM = elAcjzt.formHandler.getError(undefined);
this.setState('stvL6U6', cnd4ITM);
if (cnd4ITM) { 
let elFlk6u = eo('div','0S1f',null,`class`,`error-msg`);
text(elAcjzt.formHandler.getError(undefined));
ec('div');
}let elQTUpO = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elYICLN = eo('div',null,null,`class`,`form-group`);
let elWjGyn = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAcjzt.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAcjzt.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cnd2tQv = elAcjzt.formHandler.getError(undefined);
this.setState('stjb4QP', cnd2tQv);
if (cnd2tQv) { 
let elJdJo8 = eo('div','2sof',null,`class`,`error-msg`);
text(elAcjzt.formHandler.getError(undefined));
ec('div');
}ec('div');
let elxyDoI = eo('div',null,null,`class`,`form-group`);
let elC5_c8 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAcjzt.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAcjzt.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`);
let cnd2liB = elAcjzt.formHandler.getError(undefined);
this.setState('stCZZjx', cnd2liB);
if (cnd2liB) { 
let el3jSXE = eo('div','_Kzf',null,`class`,`error-msg`);
text(elAcjzt.formHandler.getError(undefined));
ec('div');
}ec('div');
let elELnKm = eo('div',null,null,`class`,`form-group`);
let el6BJUR = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elAcjzt.formHandler.addError(undefined, 'required', trans('validation.required'));}return elAcjzt.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndg_yl = elAcjzt.formHandler.getError(undefined);
this.setState('st_BW_o', cndg_yl);
if (cndg_yl) { 
let elESjLF = eo('div','b4rf',null,`class`,`error-msg`);
text(elAcjzt.formHandler.getError(undefined));
ec('div');
}ec('div');
let elNHK_c = eo('button',null,null,`type`,`button`,`class`,`modal-btn btn-action mr-auto`);
text(`Send`);
ec('button');
ec('form');
ec('div');
ec('div');
ec('div');
ec('div');
let eldiuiS = eo('div',null,null,`class`,`advertise modal fade`,`id`,`advertiseModal`,`tabindex`,`-1`,`role`,`dialog`,`aria-labelledby`,`contactModalLabel`,`aria-hidden`,`true`);
let el4CTHu = eo('div',null,null,`class`,`modal-dialog`,`role`,`document`);
let elEjTON = eo('div',null,null,`class`,`modal-content`);
let elu04AV = eo('div',null,null,`class`,`modal-header`);
let elCdmoU = eo('h5',null,null,`class`,`modal-title`,`id`,`advertiseModalLabel`);
text(`Advertise your property`);
ec('h5');
let elmc6Jw = eo('button',null,null,`type`,`button`,`class`,`close`,`data-dismiss`,`modal`,`aria-label`,`Close`);
let elPyuzw = eo('i',null,null,`class`,`fa fa-times`);
ec('i');
ec('button');
ec('div');
let elLcmmY = eo('div',null,null,`class`,`modal-body`);
ec('div');
ec('div');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });