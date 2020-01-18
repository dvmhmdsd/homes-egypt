_Component({
                selector: 'singleProperty-page',
                c: 'SinglePropertyPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache','ifCurrencyInDollar','showDesc'],
                children: {clB5WxWMs:'layout'},
                render: function (component) {
                    let cmpkS4_ = this._lc('clB5WxWMs', {parent:component,content:(layout) => {let elZLF_O = eo('section',null,null,`class`,`single-property`);
let elneDwp = eo('div',null,null,`class`,`containers`);
let cndwQBy = component.property;
this.setState('st2IvkF', cndwQBy);
if (cndwQBy) { 
let elOUyda = eo('section','rcAf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let elKKVSN = eo('section','X3df',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let elYBfIy = eo('section','pZXf',null,`class`,`preface-info d-flex justify-content-between`);
let elcyKR3 = eo('h2','_Daf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let elJ8oPn = eo('p','M6kf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
ec('section');
let elredUv = eo('section','tjLf',null,`class`,`property-img`);
let elDgnDe = ev('img','Orgf',null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('section');
ec('section');
let elR8oSj = eo('section','NUuf',null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elxWAjS = eo('section','Dvjf',null,`class`,`contact-section`);
let elINRIK = eo('section','pYMf',null,`class`,`contact-info`);
let elAyP6n = eo('h3','orpf');
text(`Contact Us`);
ec('h3');
let elBd8IM = eo('p','jdWf');
let elJSE9q = eo('span','wWUf');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elFEZit = eo('p','z6Rf');
let el7C0G2 = eo('span','Itif');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let elOhxU_ = eo('section','VCPf',null,`class`,`contact-request`);
let elb5gMN = eo('h3','fBkf');
text(`Send Request`);
ec('h3');
let elrHuj4 = eo('form','S31f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,``,`class`,`d-flex flex-wrap`);

                if (! elrHuj4.formHandler) {
                    window.cfrmdlr = elrHuj4.formHandler = new FormHandler(elrHuj4, component);
                } else {
                    window.cfrmdlr = elrHuj4.formHandler;
                }
            let elT6wbK = eo('div','d7Lf',null,`class`,`form-group col-6`);
let elJreTu = ev('input','rzxf',null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrHuj4.formHandler.addError(undefined, 'required', trans('validation.required'));}return elrHuj4.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndcU23 = elrHuj4.formHandler.getError(undefined);
this.setState('stQXeB_', cndcU23);
if (cndcU23) { 
let elKGd2g = eo('div','CATf',null,`class`,`error-msg`);
text(elrHuj4.formHandler.getError(undefined));
ec('div');
}ec('div');
let elkhGy9 = eo('div',null,null,`class`,`form-group col-6`);
let el6oE6W = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrHuj4.formHandler.addError(undefined, 'required', trans('validation.required'));}return elrHuj4.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndNkQS = elrHuj4.formHandler.getError(undefined);
this.setState('stc0Ql0', cndNkQS);
if (cndNkQS) { 
let elPLQie = eo('div','167f',null,`class`,`error-msg`);
text(elrHuj4.formHandler.getError(undefined));
ec('div');
}ec('div');
let elt9GYx = eo('div',null,null,`class`,`form-group col-12`);
let elPL5WZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrHuj4.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elrHuj4.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elrHuj4.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndMiPp = elrHuj4.formHandler.getError(undefined);
this.setState('st_FICk', cndMiPp);
if (cndMiPp) { 
let elnmQOO = eo('div','xtlf',null,`class`,`error-msg`);
text(elrHuj4.formHandler.getError(undefined));
ec('div');
}let elTivxC = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let el9UWhM = eo('div',null,null,`class`,`form-group col-12`);
let elCNtCU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrHuj4.formHandler.addError(undefined, 'required', trans('validation.required'));}return elrHuj4.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndUYXh = elrHuj4.formHandler.getError(undefined);
this.setState('stdXFm6', cndUYXh);
if (cndUYXh) { 
let el58UTm = eo('div','9axf',null,`class`,`error-msg`);
text(elrHuj4.formHandler.getError(undefined));
ec('div');
}ec('div');
let elu1vv0 = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
}let elUN1FK = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let el0WPpN = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let el072wp = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let el_b4x_ = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iic4iW = 'RVORNzU' + i;
let elwE4Eh = eo('p','L6Nx7UoyaNyl' + i+iic4iW);
let elaEhpu = eo('span','Cpbff'+iic4iW,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? price.priceInDollar : price.price} ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elqjnuI = eo('li',null,null,`class`,`property-data-item`);
let elTdDrX = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let el6cabV = eo('li',null,null,`class`,`property-data-item`);
let elEQGpf = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let eltaK0E = eo('li',null,null,`class`,`property-data-item`);
let el4bL2b = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let ele4BmZ = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iie0z8 = '8zV5J7O' + i;
let elQKGBm = eo('li','CFQDzPaqcOPi' + i+iie0z8,null,`class`,`property-data-item`);
let elvFHEp = eo('span','fC5ff'+iie0z8,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elE4q_s = eo('li',null,null,`class`,`property-data-item`);
let elXvyEH = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elU_YU2 = eo('li',null,null,`class`,`property-data-item`);
let elKAfJu = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let elu4Un5 = eo('section',null,null,`class`,`property-desc`);
let elsnhdX = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elO0AX2 = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let el_a3H7 = eo('p');
ec('p');
let cndu2eS = component.showDesc;
this.setState('stzWDsY', cndu2eS);
if (cndu2eS) { 
let el4nWep = eo('p','0ANf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elzs_QE = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elVsY4P = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('div');
ec('section');
ec('div');
ec('section');
}});

                    this.isReadyToGo();
                }
        });