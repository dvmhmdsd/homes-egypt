_Component({
                selector: 'singleProperty-page',
                c: 'SinglePropertyPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {cr2lRhJx_:'flk-slider',cSe9bKc1i:'layout'},
                render: function (component) {
                    let cmpHEcR = this._lc('cSe9bKc1i', {parent:component,content:(layout) => {let cnd0rsA = component.property;
this.setState('stw_oGq', cnd0rsA);
let cndYsBz = !(cnd0rsA);
this.setState('stI6k4Z', cndYsBz);
if (cnd0rsA) { 
let elDC3ie = eo('section','ZgHf',null,`class`,`single-property`);
let elrmBB_ = eo('div','oZBf',null,`class`,`containers`);
let el_y4Oe = eo('section','hcGf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let elgMrAW = eo('section','YM4f',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let elCP7Yp = eo('section','U0wf',null,`class`,`preface-info d-flex justify-content-between`);
let elgWbI7 = eo('h2','OBEf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cnd4INg = component.property.id;
this.setState('st18O4O', cnd4INg);
if (cnd4INg) { 
let el6JfaF = eo('p','wDof',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let el6ICgc = eo('section',null,null,`class`,`property-img`);
let cmpHtXy = this._lc('cr2lRhJx_', {parent:component,parentTop:layout,props:{slides:component.slides}});
ec('section');
ec('section');
let elOR02k = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elSz1Xh = eo('section',null,null,`class`,`contact-section`);
let elYvi3h = eo('section',null,null,`class`,`contact-info`);
let elHThC8 = eo('h3');
text(`Contact Us`);
ec('h3');
let elRDw9_ = eo('p');
let el0wiFp = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elW6gHj = eo('p');
let elKMg7I = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let elV8LzP = eo('section',null,null,`class`,`contact-request`);
let eldF9Cq = eo('h3');
text(`Send Request`);
ec('h3');
let elatpNf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,``,`class`,`d-flex flex-wrap`);

                if (! elatpNf.formHandler) {
                    window.cfrmdlr = elatpNf.formHandler = new FormHandler(elatpNf, component);
                } else {
                    window.cfrmdlr = elatpNf.formHandler;
                }
            let elhK5qL = eo('div',null,null,`class`,`form-group col-6`);
let elHbG1e = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elatpNf.formHandler.addError(undefined, 'required', trans('validation.required'));}return elatpNf.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cnd2O15 = elatpNf.formHandler.getError(undefined);
this.setState('stvcBzP', cnd2O15);
if (cnd2O15) { 
let elKz0XT = eo('div','6Rzf',null,`class`,`error-msg`);
text(elatpNf.formHandler.getError(undefined));
ec('div');
}ec('div');
let elsHFLs = eo('div',null,null,`class`,`form-group col-6`);
let el0KKFP = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elatpNf.formHandler.addError(undefined, 'required', trans('validation.required'));}return elatpNf.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndSoh0 = elatpNf.formHandler.getError(undefined);
this.setState('stiZido', cndSoh0);
if (cndSoh0) { 
let elia6Bh = eo('div','p3mf',null,`class`,`error-msg`);
text(elatpNf.formHandler.getError(undefined));
ec('div');
}ec('div');
let elKwpti = eo('div',null,null,`class`,`form-group col-12`);
let elFHogH = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elatpNf.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elatpNf.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elatpNf.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndauCU = elatpNf.formHandler.getError(undefined);
this.setState('st8YRN7', cndauCU);
if (cndauCU) { 
let elJv54V = eo('div','VjFf',null,`class`,`error-msg`);
text(elatpNf.formHandler.getError(undefined));
ec('div');
}let elpFPjT = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elU7WNj = eo('div',null,null,`class`,`form-group col-12`);
let elwydqZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elatpNf.formHandler.addError(undefined, 'required', trans('validation.required'));}return elatpNf.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndQHBE = elatpNf.formHandler.getError(undefined);
this.setState('stQsZy5', cndQHBE);
if (cndQHBE) { 
let elI90Z0 = eo('div','0B1f',null,`class`,`error-msg`);
text(elatpNf.formHandler.getError(undefined));
ec('div');
}ec('div');
let elKDhjL = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let eld0VbD = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let elNidoi = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elNYw1i = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let el8IjPP = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iiH3_d = 'PcYzIfv' + i;
let elUJq0d = eo('p','5SmAzxSlwd2r' + i+iiH3_d);
let elURS1r = eo('span','gJnff'+iiH3_d,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? price.priceInDollar : price.price} ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let el7mpIi = eo('li',null,null,`class`,`property-data-item`);
let elE5OZF = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let elmYtnt = eo('li',null,null,`class`,`property-data-item`);
let eliybnx = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let ellg4Ua = eo('li',null,null,`class`,`property-data-item`);
let elUWHkI = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let el3uMJ1 = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iis3od = 'NcI2pI8' + i;
let elxNV4U = eo('li','MsPpZk7LP_Dj' + i+iis3od,null,`class`,`property-data-item`);
let elACSSJ = eo('span','GJ5ff'+iis3od,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let el0TGpk = eo('li',null,null,`class`,`property-data-item`);
let elyOLlE = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let eleIpMR = eo('li',null,null,`class`,`property-data-item`);
let elh8I8o = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let elCTTpZ = eo('section',null,null,`class`,`property-desc`);
let elG5myZ = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let el0NinN = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let el7YkvV = eo('p');
ec('p');
let cndj4p0 = component.showDesc;
this.setState('stsjKqJ', cndj4p0);
if (cndj4p0) { 
let elhaxtP = eo('p','cwIf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elwVpn1 = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elE8r4v = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
ec('div');
ec('section');
}else { 
let elfYV_h = eo('section',null,null,`class`,`d-flex justify-content-center align-items-center`);
let el5XxY6 = eo('p',null,null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });