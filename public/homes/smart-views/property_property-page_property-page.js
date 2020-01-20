_Component({
                selector: 'property-page',
                c: 'PropertyPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {cCmrqvSbj:'flk-slider',cUNLitE3x:'property-card',czqP3p4Nn:'layout'},
                render: function (component) {
                    let cmpC5cn = this._lc('czqP3p4Nn', {parent:component,content:(layout) => {let cnd6UWm = component.property;
this.setState('stX2gkk', cnd6UWm);
if (cnd6UWm) { 
let elAQddW = eo('section','WyGf',null,`class`,`single-property`);
let elUuWRp = eo('div','K7Tf',null,`class`,`containers`);
let elkdO3Y = eo('section','QDHf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let elRxSHV = eo('section','NJ_f',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let eluUY7k = eo('section','pODf',null,`class`,`preface-info d-flex justify-content-between`);
let elytJJq = eo('h2','WKEf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cnd46aw = component.property.id;
this.setState('staNr7m', cnd46aw);
if (cnd46aw) { 
let elaF0mG = eo('p','pIYf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let elqXu0A = eo('section',null,null,`class`,`property-img`);
let cmp_5wH = this._lc('cCmrqvSbj', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let elsSf0e = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elDyMjk = eo('section',null,null,`class`,`contact-section`);
let elSGynA = eo('section',null,null,`class`,`contact-info`);
let elPIwRs = eo('h3');
text(`Contact Us`);
ec('h3');
let elssO2b = eo('p');
let elkh9rc = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elMknEp = eo('p');
let elFFSLg = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let elm1eUK = eo('section',null,null,`class`,`contact-request`);
let elVXOg3 = eo('h3');
text(`Send Request`);
ec('h3');
let el4jgzh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`,`class`,`d-flex flex-wrap`);

                if (! el4jgzh.formHandler) {
                    window.cfrmdlr = el4jgzh.formHandler = new FormHandler(el4jgzh, component);
                } else {
                    window.cfrmdlr = el4jgzh.formHandler;
                }
            let elTY_yG = eo('div',null,null,`class`,`form-group col-6`);
let elxt6OS = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4jgzh.formHandler.addError(undefined, 'required', trans('validation.required'));}return el4jgzh.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndliYo = el4jgzh.formHandler.getError(undefined);
this.setState('stm5pEG', cndliYo);
if (cndliYo) { 
let el4D6Du = eo('div','ZENf',null,`class`,`error-msg`);
text(el4jgzh.formHandler.getError(undefined));
ec('div');
}ec('div');
let elyygZz = eo('div',null,null,`class`,`form-group col-6`);
let elZsmFo = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4jgzh.formHandler.addError(undefined, 'required', trans('validation.required'));}return el4jgzh.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndPHaU = el4jgzh.formHandler.getError(undefined);
this.setState('stgf8Zj', cndPHaU);
if (cndPHaU) { 
let el1Si6a = eo('div','8Zof',null,`class`,`error-msg`);
text(el4jgzh.formHandler.getError(undefined));
ec('div');
}ec('div');
let eljgaB0 = eo('div',null,null,`class`,`form-group col-12`);
let el2bEaO = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4jgzh.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el4jgzh.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return el4jgzh.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndua2v = el4jgzh.formHandler.getError(undefined);
this.setState('stC4YN_', cndua2v);
if (cndua2v) { 
let eltShqw = eo('div','sNnf',null,`class`,`error-msg`);
text(el4jgzh.formHandler.getError(undefined));
ec('div');
}let elW4NTb = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elsalDi = eo('div',null,null,`class`,`form-group col-12`);
let elsBPhT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4jgzh.formHandler.addError(undefined, 'required', trans('validation.required'));}return el4jgzh.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndQEda = el4jgzh.formHandler.getError(undefined);
this.setState('stlWZB4', cndQEda);
if (cndQEda) { 
let elrsGdm = eo('div','ccaf',null,`class`,`error-msg`);
text(el4jgzh.formHandler.getError(undefined));
ec('div');
}ec('div');
let el0fX5T = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let el5vLd2 = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let elzgucS = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elki1E3 = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elzN6i4 = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iiZoFU = 'kA1WN6s' + i;
let elEyHL7 = eo('p','s2OWWG5q4z84' + i+iiZoFU);
let eloKHrn = eo('span','2AVff'+iiZoFU,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()}
                                ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elRy7FA = eo('li',null,null,`class`,`property-data-item`);
let elveoUa = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let eluhA9W = eo('li',null,null,`class`,`property-data-item`);
let elSjjxp = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elWM87E = eo('li',null,null,`class`,`property-data-item`);
let elGzswX = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let elg1ewF = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iiBcVb = 'mL_5h0_' + i;
let eloYFMC = eo('li','M1O1Mws9aY71' + i+iiBcVb,null,`class`,`property-data-item`);
let el2YoPc = eo('span','5z_ff'+iiBcVb,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elcU5Jh = eo('li',null,null,`class`,`property-data-item`);
let eldOp59 = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elJ6o4i = eo('li',null,null,`class`,`property-data-item`);
let elpuTjI = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let el8r1Ut = eo('section',null,null,`class`,`property-desc`);
let elPk1ct = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elgwb0j = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elyrsRd = eo('p');
ec('p');
let cnddlIx = component.showDesc;
this.setState('stshjjF', cnddlIx);
if (cnddlIx) { 
let ellQtIv = eo('p','FYWf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elUvCf_ = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let ellgnfa = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
let elQ_1ni = eo('section',null,null,`class`,`single-property-footer text-center p-6`);
let eleXCJz = eo('h2');
text(`Similar Properties`);
ec('h2');
let elrUmm2 = eo('div',null,null,`class`,`properties-container d-flex justify-content-center align-items-center`);
let cndBmB4 = ! Is.empty(component.property.similar_properties);
this.setState('stX8ChN', cndBmB4);
if (cndBmB4) { 
for (let i in component.property.similar_properties.slice(0, 3)) {
let smProperty = component.property.similar_properties.slice(0, 3)[i]; 
 let iiFEh3 = 'WWQsI3J' + i;
let elTsaaH = eo('article','9oZ5MKPlYXLm' + i+iiFEh3,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12 mb-3`);
let cmppwdI = this._lc('cUNLitE3x', {parent:component,parentTop:layout,props:{property:smProperty},state:'stX8ChN',insideLoop:true,index:"" +iiFEh3});
ec('article');
}
}ec('div');
ec('section');
ec('div');
ec('section');
}let cnd1Avn = !component.property;
this.setState('stmZ53e', cnd1Avn);
if (cnd1Avn) { 
let elksWSm = eo('section','9Rjf',null,`class`,`d-flex justify-content-center align-items-center`);
let elaAF_f = eo('p','fgXf',null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}let cndxgWb = component.property;
this.setState('stIvkhH', cndxgWb);
if (cndxgWb) { 
let elmgngU = eo('section','SJjf',null,`class`,`property-actions d-md-none d-flex text-center btn-group`);
let elOYYRO = eo('a','Wnuf',null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : '#'}`,`class`,`bg-success w-100 text-white rounded-left`);
let elmMdvl = eo('i','XQ9f',null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elMEFNJ = eo('a','rHTf',null,`href`,`tel:${component.property.whatsapp_mobile ? component.property.whatsapp_mobile : ''}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elP8HP5 = eo('i','r3rf',null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });