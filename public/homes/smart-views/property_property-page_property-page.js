_Component({
                selector: 'property-page',
                c: 'PropertyPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {cHHUJbL6n:'flk-slider',cP1LybyUq:'property-card',cZwU6AOcp:'layout'},
                render: function (component) {
                    let cmpbnn6 = this._lc('cZwU6AOcp', {parent:component,content:(layout) => {let cndf0Ta = component.property;
this.setState('stLnpT4', cndf0Ta);
if (cndf0Ta) { 
let el2Rwnk = eo('section','nZyf',null,`class`,`single-property`);
let elIcFkV = eo('div','ycrf',null,`class`,`containers`);
let elHnSCY = eo('section','Abyf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let el44ebM = eo('section','mStf',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let eljHWiw = eo('section','Regf',null,`class`,`preface-info d-flex justify-content-between`);
let elwyfig = eo('h2','_gPf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cnd5jZO = component.property.id;
this.setState('stmrOgb', cnd5jZO);
if (cnd5jZO) { 
let elqXYdi = eo('p','EcAf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let elvaKhn = eo('section',null,null,`class`,`property-img`);
let cmp8xeR = this._lc('cHHUJbL6n', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let elSezab = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elZgbJf = eo('section',null,null,`class`,`contact-section`);
let elkNKWg = eo('section',null,null,`class`,`contact-info`);
let el1aRLS = eo('h3');
text(`Contact Us`);
ec('h3');
let elxElw_ = eo('p');
let elaaGm7 = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elgmCz8 = eo('p');
let elTFM6d = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let el7_5tt = eo('section',null,null,`class`,`contact-request`);
let elvvCnN = eo('h3');
text(`Send Request`);
ec('h3');
let elusW2w = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`,`class`,`d-flex flex-wrap`);

                if (! elusW2w.formHandler) {
                    window.cfrmdlr = elusW2w.formHandler = new FormHandler(elusW2w, component);
                } else {
                    window.cfrmdlr = elusW2w.formHandler;
                }
            let elDjejU = eo('div',null,null,`class`,`form-group col-6`);
let elowlAz = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elusW2w.formHandler.addError(undefined, 'required', trans('validation.required'));}return elusW2w.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cnd6ve_ = elusW2w.formHandler.getError(undefined);
this.setState('stvQSf_', cnd6ve_);
if (cnd6ve_) { 
let elijL1J = eo('div','zpjf',null,`class`,`error-msg`);
text(elusW2w.formHandler.getError(undefined));
ec('div');
}ec('div');
let elWodir = eo('div',null,null,`class`,`form-group col-6`);
let elqWcZ7 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elusW2w.formHandler.addError(undefined, 'required', trans('validation.required'));}return elusW2w.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndzUz6 = elusW2w.formHandler.getError(undefined);
this.setState('stomrE4', cndzUz6);
if (cndzUz6) { 
let el4hpJe = eo('div','3PAf',null,`class`,`error-msg`);
text(elusW2w.formHandler.getError(undefined));
ec('div');
}ec('div');
let elFvnx0 = eo('div',null,null,`class`,`form-group col-12`);
let elfZSj7 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elusW2w.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elusW2w.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elusW2w.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndEBS3 = elusW2w.formHandler.getError(undefined);
this.setState('st9x4wg', cndEBS3);
if (cndEBS3) { 
let eln7EA4 = eo('div','Igcf',null,`class`,`error-msg`);
text(elusW2w.formHandler.getError(undefined));
ec('div');
}let elz0yCa = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elStKhQ = eo('div',null,null,`class`,`form-group col-12`);
let elFFwyJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elusW2w.formHandler.addError(undefined, 'required', trans('validation.required'));}return elusW2w.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndVZ71 = elusW2w.formHandler.getError(undefined);
this.setState('staXQwj', cndVZ71);
if (cndVZ71) { 
let elAliCm = eo('div','KkKf',null,`class`,`error-msg`);
text(elusW2w.formHandler.getError(undefined));
ec('div');
}ec('div');
let el8g28V = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let elXdGpw = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let el7JZ8T = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let el28HKv = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elgoOWB = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iiTfzf = 'YayG37J' + i;
let eleF7s7 = eo('p','_w0dfH0ZxDnZ' + i+iiTfzf);
let el42Lgh = eo('span','2u6ff'+iiTfzf,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()}
                                ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elMsWIj = eo('li',null,null,`class`,`property-data-item`);
let ely5Mef = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let elak76w = eo('li',null,null,`class`,`property-data-item`);
let elxrtTv = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elyH96W = eo('li',null,null,`class`,`property-data-item`);
let eldFhkH = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let elgNkq4 = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iiNmul = 'velnZx2' + i;
let elhd17D = eo('li','q2GP5cbhYgel' + i+iiNmul,null,`class`,`property-data-item`);
let elZIIxS = eo('span','jvJff'+iiNmul,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elO_eWG = eo('li',null,null,`class`,`property-data-item`);
let eldMqXM = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elZHsqq = eo('li',null,null,`class`,`property-data-item`);
let elpEMcH = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let elUGKkC = eo('section',null,null,`class`,`property-desc`);
let elzW4CG = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let eliKYnO = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elyaSyQ = eo('p');
ec('p');
let cndLG4P = component.showDesc;
this.setState('stFLRZv', cndLG4P);
if (cndLG4P) { 
let el705aj = eo('p','dYQf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elvNliB = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elL2SQb = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
let elqsz0O = eo('section',null,null,`class`,`single-property-footer text-center p-6`);
let elypiYp = eo('h2');
text(`Similar Properties`);
ec('h2');
let elmauxy = eo('div',null,null,`class`,`properties-container d-flex justify-content-center align-items-center`);
let cndIbnw = ! Is.empty(component.property.similar_properties);
this.setState('stzlUAn', cndIbnw);
if (cndIbnw) { 
for (let i in component.property.similar_properties.slice(0, 3)) {
let smProperty = component.property.similar_properties.slice(0, 3)[i]; 
 let iiH9Pi = 'RfQa4vW' + i;
let elOsI3E = eo('article','ne1ac8pMFo6Y' + i+iiH9Pi,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12 mb-3`);
let cmpUifo = this._lc('cP1LybyUq', {parent:component,parentTop:layout,props:{property:smProperty},state:'stzlUAn',insideLoop:true,index:"" +iiH9Pi});
ec('article');
}
}ec('div');
ec('section');
ec('div');
ec('section');
}let cndZ4TC = !component.property;
this.setState('stC29Dp', cndZ4TC);
if (cndZ4TC) { 
let el57mSD = eo('section','QW_f',null,`class`,`d-flex justify-content-center align-items-center`);
let elVnMDo = eo('p','mL3f',null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}let cndJeoo = component.property;
this.setState('st1oqDj', cndJeoo);
if (cndJeoo) { 
let eliisJO = eo('section','Vuqf',null,`class`,`property-actions d-md-none d-flex text-center btn-group`);
let elDSc_k = eo('a','17bf',null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : '#'}`,`class`,`bg-success w-100 text-white rounded-left`);
let elwqzr6 = eo('i','1YRf',null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elSsQlj = eo('a','FkDf',null,`href`,`tel:${component.property.whatsapp_mobile ? component.property.whatsapp_mobile : ''}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elZlGmE = eo('i','Zg5f',null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });