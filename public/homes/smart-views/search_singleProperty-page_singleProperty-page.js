_Component({
                selector: 'singleProperty-page',
                c: 'SinglePropertyPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {ckXcAPp2u:'flk-slider',ckU_h5TQW:'layout'},
                render: function (component) {
                    let cmptg7G = this._lc('ckU_h5TQW', {parent:component,content:(layout) => {let cndrjK8 = component.property;
this.setState('stK2mG0', cndrjK8);
let cndwKun = !(cndrjK8);
this.setState('stefkcb', cndwKun);
if (cndrjK8) { 
let elKcZfR = eo('section','3MPf',null,`class`,`single-property`);
let elLHTPp = eo('div','I5zf',null,`class`,`containers`);
let elPn2IF = eo('section','ffvf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let el_Z84V = eo('section','ybLf',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let elzGESo = eo('section','3Qaf',null,`class`,`preface-info d-flex justify-content-between`);
let el6z5bv = eo('h2','w9of',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cndfcez = component.property.id;
this.setState('stbJOaA', cndfcez);
if (cndfcez) { 
let elMJEEi = eo('p','IpSf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let el6WnB1 = eo('section',null,null,`class`,`property-img`);
let cmpPQ10 = this._lc('ckXcAPp2u', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let elh7rLf = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elJ3hUH = eo('section',null,null,`class`,`contact-section`);
let el7aoxD = eo('section',null,null,`class`,`contact-info`);
let elDk45a = eo('h3');
text(`Contact Us`);
ec('h3');
let elc4h4T = eo('p');
let elKvuqz = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elSX9Gh = eo('p');
let elvBdmg = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let elHWIOi = eo('section',null,null,`class`,`contact-request`);
let elmI32z = eo('h3');
text(`Send Request`);
ec('h3');
let elvcNwq = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,``,`class`,`d-flex flex-wrap`);

                if (! elvcNwq.formHandler) {
                    window.cfrmdlr = elvcNwq.formHandler = new FormHandler(elvcNwq, component);
                } else {
                    window.cfrmdlr = elvcNwq.formHandler;
                }
            let els9Rqi = eo('div',null,null,`class`,`form-group col-6`);
let elRjzGZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvcNwq.formHandler.addError(undefined, 'required', trans('validation.required'));}return elvcNwq.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndAj5E = elvcNwq.formHandler.getError(undefined);
this.setState('stiMoRl', cndAj5E);
if (cndAj5E) { 
let el8S9XZ = eo('div','IZUf',null,`class`,`error-msg`);
text(elvcNwq.formHandler.getError(undefined));
ec('div');
}ec('div');
let elSCqv0 = eo('div',null,null,`class`,`form-group col-6`);
let elb0mvz = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvcNwq.formHandler.addError(undefined, 'required', trans('validation.required'));}return elvcNwq.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cnd5m_3 = elvcNwq.formHandler.getError(undefined);
this.setState('sten93G', cnd5m_3);
if (cnd5m_3) { 
let elU2lBL = eo('div','e66f',null,`class`,`error-msg`);
text(elvcNwq.formHandler.getError(undefined));
ec('div');
}ec('div');
let elJqcMc = eo('div',null,null,`class`,`form-group col-12`);
let elPjtEX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvcNwq.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elvcNwq.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elvcNwq.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cnd5IfU = elvcNwq.formHandler.getError(undefined);
this.setState('stI8cX4', cnd5IfU);
if (cnd5IfU) { 
let el0tM47 = eo('div','Vccf',null,`class`,`error-msg`);
text(elvcNwq.formHandler.getError(undefined));
ec('div');
}let elRCxSX = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let eleA18k = eo('div',null,null,`class`,`form-group col-12`);
let elO0Zk6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvcNwq.formHandler.addError(undefined, 'required', trans('validation.required'));}return elvcNwq.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndNrbc = elvcNwq.formHandler.getError(undefined);
this.setState('stW8IU2', cndNrbc);
if (cndNrbc) { 
let elgk2zz = eo('div','i51f',null,`class`,`error-msg`);
text(elvcNwq.formHandler.getError(undefined));
ec('div');
}ec('div');
let el1QMBL = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let elCznHo = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let elYwzXR = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elGixBy = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let el1uQoE = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let ii7g_x = 'V9oPxWd' + i;
let elig0rp = eo('p','0c_Sa71nOw1I' + i+ii7g_x);
let elp5BEw = eo('span','pxqff'+ii7g_x,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()} ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elVq5AA = eo('li',null,null,`class`,`property-data-item`);
let elMqIVU = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let elpVfOq = eo('li',null,null,`class`,`property-data-item`);
let ela0S3_ = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elfpgXu = eo('li',null,null,`class`,`property-data-item`);
let elDBw3D = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let elRpTk6 = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iiaJ5o = '_OMLcn9' + i;
let el3a6WB = eo('li','UgUvEUY79QJq' + i+iiaJ5o,null,`class`,`property-data-item`);
let el29DNg = eo('span','BOgff'+iiaJ5o,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elvSZD0 = eo('li',null,null,`class`,`property-data-item`);
let elmwZBy = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elxJtg0 = eo('li',null,null,`class`,`property-data-item`);
let elu3RD9 = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let ellZ3Dp = eo('section',null,null,`class`,`property-desc`);
let el26tqh = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elz5CCJ = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let eloHzoJ = eo('p');
ec('p');
let cndEsOl = component.showDesc;
this.setState('stWZ_UX', cndEsOl);
if (cndEsOl) { 
let elrYB1i = eo('p','sUhf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let ela4hZs = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elC_NBq = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
ec('div');
ec('section');
}else { 
let elsZ62n = eo('section',null,null,`class`,`d-flex justify-content-center align-items-center`);
let elgP1cI = eo('p',null,null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });