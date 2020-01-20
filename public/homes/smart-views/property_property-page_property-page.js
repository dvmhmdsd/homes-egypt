_Component({
                selector: 'property-page',
                c: 'PropertyPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {clBGsT7uC:'flk-slider',cz3sglp0o:'property-card',cX8J5ClAU:'layout'},
                render: function (component) {
                    let cmpRvkG = this._lc('cX8J5ClAU', {parent:component,content:(layout) => {let cndne3w = component.property;
this.setState('stBjo4I', cndne3w);
if (cndne3w) { 
let elEjiB8 = eo('section','HF3f',null,`class`,`single-property`);
let elRNe49 = eo('div','a7Zf',null,`class`,`containers`);
let el8vYgE = eo('section','4yWf',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let el1EAXm = eo('section','xKHf',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let elWxsfo = eo('section','q9Jf',null,`class`,`preface-info d-flex justify-content-between`);
let elxQjQX = eo('h2','GGBf',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cnd0VCb = component.property.id;
this.setState('stg6sxm', cnd0VCb);
if (cnd0VCb) { 
let elr3xAy = eo('p','L0yf',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let elLBd0N = eo('section',null,null,`class`,`property-img`);
let cmpru_E = this._lc('clBGsT7uC', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let el2MHUT = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let el6fS0G = eo('section',null,null,`class`,`contact-section`);
let el1847k = eo('section',null,null,`class`,`contact-info`);
let el_K8Su = eo('h3');
text(`Contact Us`);
ec('h3');
let elE1i9O = eo('p');
let elG5K9j = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elLBKjQ = eo('p');
let elSqfPy = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let elTsW9O = eo('section',null,null,`class`,`contact-request`);
let elDAEaI = eo('h3');
text(`Send Request`);
ec('h3');
let elbg8U6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`,`class`,`d-flex flex-wrap`);

                if (! elbg8U6.formHandler) {
                    window.cfrmdlr = elbg8U6.formHandler = new FormHandler(elbg8U6, component);
                } else {
                    window.cfrmdlr = elbg8U6.formHandler;
                }
            let elRlk6R = eo('div',null,null,`class`,`form-group col-6`);
let elyvBEa = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbg8U6.formHandler.addError(undefined, 'required', trans('validation.required'));}return elbg8U6.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cndsd8B = elbg8U6.formHandler.getError(undefined);
this.setState('stu0YFT', cndsd8B);
if (cndsd8B) { 
let elhuudL = eo('div','bhEf',null,`class`,`error-msg`);
text(elbg8U6.formHandler.getError(undefined));
ec('div');
}ec('div');
let elUMn4H = eo('div',null,null,`class`,`form-group col-6`);
let elX11aX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbg8U6.formHandler.addError(undefined, 'required', trans('validation.required'));}return elbg8U6.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cndD6at = elbg8U6.formHandler.getError(undefined);
this.setState('st8D9Bm', cndD6at);
if (cndD6at) { 
let eliRhEu = eo('div','5Duf',null,`class`,`error-msg`);
text(elbg8U6.formHandler.getError(undefined));
ec('div');
}ec('div');
let el8Uflt = eo('div',null,null,`class`,`form-group col-12`);
let el4_ShU = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbg8U6.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elbg8U6.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elbg8U6.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndZFW6 = elbg8U6.formHandler.getError(undefined);
this.setState('stxNJ94', cndZFW6);
if (cndZFW6) { 
let el7pCQE = eo('div','a1df',null,`class`,`error-msg`);
text(elbg8U6.formHandler.getError(undefined));
ec('div');
}let eljnfvf = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elioJjQ = eo('div',null,null,`class`,`form-group col-12`);
let elUrIu0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbg8U6.formHandler.addError(undefined, 'required', trans('validation.required'));}return elbg8U6.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cnd_4TV = elbg8U6.formHandler.getError(undefined);
this.setState('styVtWK', cnd_4TV);
if (cnd_4TV) { 
let elhC7E1 = eo('div','45Pf',null,`class`,`error-msg`);
text(elbg8U6.formHandler.getError(undefined));
ec('div');
}ec('div');
let elKJvyp = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let elJqjEl = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let elZzeBv = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elWc4cS = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elTAT2s = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iih2XM = '5JZjh1P' + i;
let elXDtfZ = eo('p','GgohY8ugQmk0' + i+iih2XM);
let elag1Ub = eo('span','XCxff'+iih2XM,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()}
                                ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elkn_LM = eo('li',null,null,`class`,`property-data-item`);
let el9wEqt = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let el6PHo0 = eo('li',null,null,`class`,`property-data-item`);
let elt7nwq = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let eldB2dL = eo('li',null,null,`class`,`property-data-item`);
let elkHqaA = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let el_kA6T = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iizYgh = '5s4fsF3' + i;
let elbh0y8 = eo('li','MiaZPocbbfUf' + i+iizYgh,null,`class`,`property-data-item`);
let ele3Ib_ = eo('span','_M7ff'+iizYgh,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elA7bbu = eo('li',null,null,`class`,`property-data-item`);
let elwWzoJ = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elsFyb0 = eo('li',null,null,`class`,`property-data-item`);
let elWCMtC = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let elKJRpU = eo('section',null,null,`class`,`property-desc`);
let elyKCvc = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elYg_1H = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elXir19 = eo('p');
ec('p');
let cndLUJ_ = component.showDesc;
this.setState('stB9CWy', cndLUJ_);
if (cndLUJ_) { 
let elbLhZu = eo('p','ZSCf');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elhGhbk = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elmaINs = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
let eluXWlw = eo('section',null,null,`class`,`single-property-footer text-center p-6`);
let eleax72 = eo('h2');
text(`Similar Properties`);
ec('h2');
let elW3yfg = eo('div',null,null,`class`,`properties-container d-flex justify-content-center align-items-center`);
let cndINwx = ! Is.empty(component.property.similar_properties);
this.setState('stWoEDJ', cndINwx);
if (cndINwx) { 
for (let i in component.property.similar_properties.slice(0, 3)) {
let smProperty = component.property.similar_properties.slice(0, 3)[i]; 
 let iiiyKX = 'dCNDOJK' + i;
let elUK3J5 = eo('article','CJ0MUEs5SZRG' + i+iiiyKX,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12 mb-3`);
let cmptger = this._lc('cz3sglp0o', {parent:component,parentTop:layout,props:{property:smProperty},state:'stWoEDJ',insideLoop:true,index:"" +iiiyKX});
ec('article');
}
}ec('div');
ec('section');
ec('div');
ec('section');
}let cndz99C = !component.property;
this.setState('steRS5A', cndz99C);
if (cndz99C) { 
let elEsvXL = eo('section','Qqyf',null,`class`,`d-flex justify-content-center align-items-center`);
let elLDZeA = eo('p','DQHf',null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}let cnd9oTM = component.property;
this.setState('staiCHT', cnd9oTM);
if (cnd9oTM) { 
let elWeOxD = eo('section','zsUf',null,`class`,`property-actions d-md-none d-flex text-center btn-group`);
let elaZ8Q4 = eo('a','XY7f',null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : '#'}`,`class`,`bg-success w-100 text-white rounded-left`);
let elz760C = eo('i','nHzf',null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elSMRJi = eo('a','Nlef',null,`href`,`tel:${component.property.whatsapp_mobile ? component.property.whatsapp_mobile : ''}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elOEUuS = eo('i','T69f',null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });