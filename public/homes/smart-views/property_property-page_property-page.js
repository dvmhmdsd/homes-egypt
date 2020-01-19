_Component({
                selector: 'property-page',
                c: 'PropertyPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {cBEF3yQcD:'flk-slider',cb12yl1wm:'layout'},
                render: function (component) {
                    let cmpjMVE = this._lc('cb12yl1wm', {parent:component,content:(layout) => {let cndZ1x6 = component.property;
this.setState('stju0Bp', cndZ1x6);
let cndsod_ = !(cndZ1x6);
this.setState('st5fr45', cndsod_);
if (cndZ1x6) { 
let eltHBq4 = eo('section','s0tf',null,`class`,`single-property`);
let elXMcSr = eo('div','Y35f',null,`class`,`containers`);
let el79qzn = eo('section','sHnf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let els3qvK = eo('section','_aMf',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let elQ8d0M = eo('section','yjIf',null,`class`,`preface-info d-flex justify-content-between`);
let eldJByF = eo('h2','9iJf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cndtt0r = component.property.id;
this.setState('stMVrFY', cndtt0r);
if (cndtt0r) { 
let elY93Bd = eo('p','Y7af',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let elUBaJc = eo('section',null,null,`class`,`property-img`);
let cmpqsXN = this._lc('cBEF3yQcD', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let el_MR4y = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elU_DNC = eo('section',null,null,`class`,`contact-section`);
let el6_Eai = eo('section',null,null,`class`,`contact-info`);
let elmKPHY = eo('h3');
text(`Contact Us`);
ec('h3');
let elBKHEN = eo('p');
let el6tmIH = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elVaLK1 = eo('p');
let elm9I6P = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let elrU7tu = eo('section',null,null,`class`,`contact-request`);
let elPYxlf = eo('h3');
text(`Send Request`);
ec('h3');
let elTjnfK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,``,`class`,`d-flex flex-wrap`);

                if (! elTjnfK.formHandler) {
                    window.cfrmdlr = elTjnfK.formHandler = new FormHandler(elTjnfK, component);
                } else {
                    window.cfrmdlr = elTjnfK.formHandler;
                }
            let eluODAz = eo('div',null,null,`class`,`form-group col-6`);
let eliuCWa = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTjnfK.formHandler.addError(undefined, 'required', trans('validation.required'));}return elTjnfK.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cnd2kww = elTjnfK.formHandler.getError(undefined);
this.setState('stNQdF3', cnd2kww);
if (cnd2kww) { 
let eljCkJ5 = eo('div','WdYf',null,`class`,`error-msg`);
text(elTjnfK.formHandler.getError(undefined));
ec('div');
}ec('div');
let elAGgjB = eo('div',null,null,`class`,`form-group col-6`);
let elHu4fr = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTjnfK.formHandler.addError(undefined, 'required', trans('validation.required'));}return elTjnfK.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cnd2P8K = elTjnfK.formHandler.getError(undefined);
this.setState('stD5fDB', cnd2P8K);
if (cnd2P8K) { 
let elTTe6k = eo('div','29jf',null,`class`,`error-msg`);
text(elTjnfK.formHandler.getError(undefined));
ec('div');
}ec('div');
let eloyZEb = eo('div',null,null,`class`,`form-group col-12`);
let elVN54c = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTjnfK.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elTjnfK.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elTjnfK.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndLWx_ = elTjnfK.formHandler.getError(undefined);
this.setState('stKefnY', cndLWx_);
if (cndLWx_) { 
let elS8Smb = eo('div','QAwf',null,`class`,`error-msg`);
text(elTjnfK.formHandler.getError(undefined));
ec('div');
}let elmlA5t = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let el0DU1e = eo('div',null,null,`class`,`form-group col-12`);
let elHun9t = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTjnfK.formHandler.addError(undefined, 'required', trans('validation.required'));}return elTjnfK.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndfRSC = elTjnfK.formHandler.getError(undefined);
this.setState('stbSUjh', cndfRSC);
if (cndfRSC) { 
let eleTBhk = eo('div','LFPf',null,`class`,`error-msg`);
text(elTjnfK.formHandler.getError(undefined));
ec('div');
}ec('div');
let elQO1iH = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let el3PwB6 = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let el_s7Kf = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elkAEMc = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elcxNV1 = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let ii9anC = 'xYYnIA6' + i;
let elKej5q = eo('p','FimNvEOt0P97' + i+ii9anC);
let elEXa4W = eo('span','GcRff'+ii9anC,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()}
                                ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let eltCapb = eo('li',null,null,`class`,`property-data-item`);
let elef5US = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let elXC7ME = eo('li',null,null,`class`,`property-data-item`);
let elloeqf = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elQJcng = eo('li',null,null,`class`,`property-data-item`);
let elM4JK1 = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let elsUc67 = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iigXl8 = '60bE3sA' + i;
let eljwe_Q = eo('li','Im3hQhLRmU3l' + i+iigXl8,null,`class`,`property-data-item`);
let elBJhmB = eo('span','2fsff'+iigXl8,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elmY7T7 = eo('li',null,null,`class`,`property-data-item`);
let el5SMQR = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elBOHYU = eo('li',null,null,`class`,`property-data-item`);
let elXF9i2 = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let elMxWPZ = eo('section',null,null,`class`,`property-desc`);
let elr87SK = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elvPoli = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elpSucF = eo('p');
ec('p');
let cndXUwl = component.showDesc;
this.setState('stlGeBC', cndXUwl);
if (cndXUwl) { 
let eldyukn = eo('p','bCYf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let el23dA6 = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let eloXf7F = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
ec('div');
ec('section');
}else { 
let elrwWQM = eo('section',null,null,`class`,`d-flex justify-content-center align-items-center`);
let elamg9k = eo('p',null,null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });