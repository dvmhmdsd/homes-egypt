_Component({
                selector: 'property-page',
                c: 'PropertyPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {chPzgwN3K:'flk-slider',cUuTSPhHq:'property-card',cAWSmNY06:'layout'},
                render: function (component) {
                    let cmp16Cb = this._lc('cAWSmNY06', {parent:component,content:(layout) => {let cndBBCl = component.property;
this.setState('stu5jln', cndBBCl);
if (cndBBCl) { 
let elLlfqz = eo('section','8nWf',null,`class`,`single-property`);
let elfIArz = eo('div','isWf',null,`class`,`containers`);
let el6ln4L = eo('section','oEkf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let elMQePo = eo('section','eV6f',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let elDO4K0 = eo('section','xQcf',null,`class`,`preface-info d-flex justify-content-between`);
let eluPK2M = eo('h2','Q4xf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cndSaQr = component.property.id;
this.setState('stYITCC', cndSaQr);
if (cndSaQr) { 
let elhOdHz = eo('p','tmNf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let elrZCFS = eo('section',null,null,`class`,`property-img`);
let cmp5THA = this._lc('chPzgwN3K', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let elDvTNO = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elxVXXQ = eo('section',null,null,`class`,`contact-section`);
let el1oVdV = eo('section',null,null,`class`,`contact-info`);
let elpCApo = eo('h3');
text(`Contact Us`);
ec('h3');
let elWUwqR = eo('p');
let eltAakR = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let el8V1m4 = eo('p');
let elwnyae = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let el1nUzO = eo('section',null,null,`class`,`contact-request`);
let el0p0rO = eo('h3');
text(`Send Request`);
ec('h3');
let elsWx3j = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`,`class`,`d-flex flex-wrap`);

                if (! elsWx3j.formHandler) {
                    window.cfrmdlr = elsWx3j.formHandler = new FormHandler(elsWx3j, component);
                } else {
                    window.cfrmdlr = elsWx3j.formHandler;
                }
            let elgxpI1 = eo('div',null,null,`class`,`form-group col-6`);
let el9cSi1 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsWx3j.formHandler.addError(undefined, 'required', trans('validation.required'));}return elsWx3j.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndpdG4 = elsWx3j.formHandler.getError(undefined);
this.setState('stUDgTW', cndpdG4);
if (cndpdG4) { 
let elsMK4A = eo('div','Njkf',null,`class`,`error-msg`);
text(elsWx3j.formHandler.getError(undefined));
ec('div');
}ec('div');
let el_gCry = eo('div',null,null,`class`,`form-group col-6`);
let el_vCkW = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsWx3j.formHandler.addError(undefined, 'required', trans('validation.required'));}return elsWx3j.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndAuAZ = elsWx3j.formHandler.getError(undefined);
this.setState('stiPiRN', cndAuAZ);
if (cndAuAZ) { 
let el49BQz = eo('div','nUFf',null,`class`,`error-msg`);
text(elsWx3j.formHandler.getError(undefined));
ec('div');
}ec('div');
let elEJGED = eo('div',null,null,`class`,`form-group col-12`);
let elcceqt = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsWx3j.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elsWx3j.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elsWx3j.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndo9M7 = elsWx3j.formHandler.getError(undefined);
this.setState('stvH5vu', cndo9M7);
if (cndo9M7) { 
let elgCATb = eo('div','kPnf',null,`class`,`error-msg`);
text(elsWx3j.formHandler.getError(undefined));
ec('div');
}let elrSvEX = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elRxa3B = eo('div',null,null,`class`,`form-group col-12`);
let elN80jz = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsWx3j.formHandler.addError(undefined, 'required', trans('validation.required'));}return elsWx3j.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndnaVA = elsWx3j.formHandler.getError(undefined);
this.setState('st5QQhf', cndnaVA);
if (cndnaVA) { 
let ellXnn5 = eo('div','x7Cf',null,`class`,`error-msg`);
text(elsWx3j.formHandler.getError(undefined));
ec('div');
}ec('div');
let ell6_2r = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let eloHjkx = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let el3Ihnl = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elgA0mC = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elFKRrr = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iiPGxc = 'bL54RG5' + i;
let elVOQp6 = eo('p','6w2_3NlrE8z8' + i+iiPGxc);
let eleTWL5 = eo('span','WWiff'+iiPGxc,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()}
                                ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elqqTSE = eo('li',null,null,`class`,`property-data-item`);
let elw4rhN = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let elar7Wr = eo('li',null,null,`class`,`property-data-item`);
let el1PG9Y = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elY_TYr = eo('li',null,null,`class`,`property-data-item`);
let elW8yzE = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let el1358D = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iiGZQu = '4r4zIJz' + i;
let el2GCl1 = eo('li','VuoxsmefpLPN' + i+iiGZQu,null,`class`,`property-data-item`);
let elNM7ez = eo('span','2CHff'+iiGZQu,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elFcFKH = eo('li',null,null,`class`,`property-data-item`);
let eln81Ts = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elzK7Yu = eo('li',null,null,`class`,`property-data-item`);
let elHmTTG = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let elqqFVc = eo('section',null,null,`class`,`property-desc`);
let elI8B4q = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elnWBaP = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elyOr5P = eo('p');
ec('p');
let cnda_Kw = component.showDesc;
this.setState('st_Mgrq', cnda_Kw);
if (cnda_Kw) { 
let elCfER1 = eo('p','Rkef');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elePsXE = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elZxYb1 = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
let elFyQBY = eo('section',null,null,`class`,`single-property-footer text-center p-6`);
let elScfEw = eo('h2');
text(`Similar Properties`);
ec('h2');
let el1B7pj = eo('div',null,null,`class`,`properties-container d-flex justify-content-center align-items-center`);
let cnd0KA8 = ! Is.empty(component.property.similar_properties);
this.setState('stzd2QP', cnd0KA8);
if (cnd0KA8) { 
for (let i in component.property.similar_properties.slice(0, 3)) {
let smProperty = component.property.similar_properties.slice(0, 3)[i]; 
 let iia7rW = 'lGwuY1P' + i;
let elhKTh9 = eo('article','05RdhtQYKfas' + i+iia7rW,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12 mb-3`);
let cmpes1a = this._lc('cUuTSPhHq', {parent:component,parentTop:layout,props:{property:smProperty},state:'stzd2QP',insideLoop:true,index:"" +iia7rW});
ec('article');
}
}ec('div');
ec('section');
ec('div');
ec('section');
}let cndX3KG = !component.property;
this.setState('stLVn9H', cndX3KG);
if (cndX3KG) { 
let elzQ2qh = eo('section','lgOf',null,`class`,`d-flex justify-content-center align-items-center`);
let elIq68b = eo('p','ZKAf',null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}let cndxQBM = component.property;
this.setState('stJbXcv', cndxQBM);
if (cndxQBM) { 
let elpTeCW = eo('section','5xBf',null,`class`,`property-actions d-md-none d-flex text-center btn-group`);
let elIchy1 = eo('a','BSQf',null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : '#'}`,`class`,`bg-success w-100 text-white rounded-left`);
let elNmqpx = eo('i','iQ9f',null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elPf3TF = eo('a','QOEf',null,`href`,`tel:${component.property.whatsapp_mobile ? component.property.whatsapp_mobile : ''}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elpbHf4 = eo('i','H3ef',null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });