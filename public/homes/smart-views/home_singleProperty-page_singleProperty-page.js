_Component({
                selector: 'singleProperty-page',
                c: 'SinglePropertyPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {cHuEmC4j4:'flk-slider',c1wv9UJOL:'layout'},
                render: function (component) {
                    let cmpAjTz = this._lc('c1wv9UJOL', {parent:component,content:(layout) => {let cndNWoD = component.property;
this.setState('sthIinw', cndNWoD);
let cndaWKY = !(cndNWoD);
this.setState('stwRPag', cndaWKY);
if (cndNWoD) { 
let elqdvK8 = eo('section','lSkf',null,`class`,`single-property`);
let el18ovh = eo('div','YUaf',null,`class`,`containers`);
let el3u5rv = eo('section','mY6f',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let elRAvSU = eo('section','3Xkf',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let eltTwJt = eo('section','DHtf',null,`class`,`preface-info d-flex justify-content-between`);
let eletcR7 = eo('h2','k_rf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cndJMnJ = component.property.id;
this.setState('stYqyW7', cndJMnJ);
if (cndJMnJ) { 
let elxGLnO = eo('p','Svbf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let el_REMq = eo('section',null,null,`class`,`property-img`);
let cmpdx3P = this._lc('cHuEmC4j4', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let elH3Gn4 = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elpeg9n = eo('section',null,null,`class`,`contact-section`);
let elS5IFs = eo('section',null,null,`class`,`contact-info`);
let elw4xlR = eo('h3');
text(`Contact Us`);
ec('h3');
let el5fSVD = eo('p');
let el7WlTI = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elmrRSV = eo('p');
let elNZcqY = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let el2xJZz = eo('section',null,null,`class`,`contact-request`);
let elio32K = eo('h3');
text(`Send Request`);
ec('h3');
let elPOcn7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,``,`class`,`d-flex flex-wrap`);

                if (! elPOcn7.formHandler) {
                    window.cfrmdlr = elPOcn7.formHandler = new FormHandler(elPOcn7, component);
                } else {
                    window.cfrmdlr = elPOcn7.formHandler;
                }
            let elI_SoZ = eo('div',null,null,`class`,`form-group col-6`);
let elluJ2r = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPOcn7.formHandler.addError(undefined, 'required', trans('validation.required'));}return elPOcn7.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndU7jy = elPOcn7.formHandler.getError(undefined);
this.setState('stoSbLH', cndU7jy);
if (cndU7jy) { 
let ellMqF8 = eo('div','tidf',null,`class`,`error-msg`);
text(elPOcn7.formHandler.getError(undefined));
ec('div');
}ec('div');
let elN_871 = eo('div',null,null,`class`,`form-group col-6`);
let el3C2fE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPOcn7.formHandler.addError(undefined, 'required', trans('validation.required'));}return elPOcn7.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cnd0YhV = elPOcn7.formHandler.getError(undefined);
this.setState('stfdeT2', cnd0YhV);
if (cnd0YhV) { 
let el51Jo7 = eo('div','kBQf',null,`class`,`error-msg`);
text(elPOcn7.formHandler.getError(undefined));
ec('div');
}ec('div');
let elCyCQR = eo('div',null,null,`class`,`form-group col-12`);
let elGq_Aj = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPOcn7.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elPOcn7.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elPOcn7.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndT1_m = elPOcn7.formHandler.getError(undefined);
this.setState('stVGt9O', cndT1_m);
if (cndT1_m) { 
let elFsyxd = eo('div','ZB8f',null,`class`,`error-msg`);
text(elPOcn7.formHandler.getError(undefined));
ec('div');
}let eltGM_k = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let eljVrfe = eo('div',null,null,`class`,`form-group col-12`);
let elaVyVN = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPOcn7.formHandler.addError(undefined, 'required', trans('validation.required'));}return elPOcn7.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cnd_bZM = elPOcn7.formHandler.getError(undefined);
this.setState('stkMfSW', cnd_bZM);
if (cnd_bZM) { 
let elrBPJs = eo('div','BKmf',null,`class`,`error-msg`);
text(elPOcn7.formHandler.getError(undefined));
ec('div');
}ec('div');
let elKx8CD = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let elaZyMr = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let el1Ndr3 = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elB_YhM = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elxxZ4o = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iiTRjH = '6UvqK53' + i;
let el8osV1 = eo('p','w5Qo8SgjBKJp' + i+iiTRjH);
let elKqnbA = eo('span','QYwff'+iiTRjH,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()} ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elXMJUL = eo('li',null,null,`class`,`property-data-item`);
let elHwaSm = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let ellSnNJ = eo('li',null,null,`class`,`property-data-item`);
let elts3OR = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elOV8Y2 = eo('li',null,null,`class`,`property-data-item`);
let elQZaz9 = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let el4ragV = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iig98m = 'LnzB7sF' + i;
let elk53Ir = eo('li','_RAkH9jJH_6P' + i+iig98m,null,`class`,`property-data-item`);
let elkHufp = eo('span','alCff'+iig98m,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elg4GxB = eo('li',null,null,`class`,`property-data-item`);
let elbIUZw = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elDWrMS = eo('li',null,null,`class`,`property-data-item`);
let elEFf97 = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let eljb3zc = eo('section',null,null,`class`,`property-desc`);
let elRO1PH = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let el2Ukik = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elXvLFU = eo('p');
ec('p');
let cndN9Z0 = component.showDesc;
this.setState('steJNnr', cndN9Z0);
if (cndN9Z0) { 
let eln2SZc = eo('p','Ba6f');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elsGo8k = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elyPOUM = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
ec('div');
ec('section');
}else { 
let elx00xB = eo('section',null,null,`class`,`d-flex justify-content-center align-items-center`);
let elt3hx6 = eo('p',null,null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });