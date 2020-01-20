_Component({
                selector: 'property-page',
                c: 'PropertyPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','slides','cache','ifCurrencyInDollar','showDesc','mapSrc'],
                children: {c_9sXHWgm:'flk-slider',cX0uokojr:'property-card',cYIeghCAX:'layout'},
                render: function (component) {
                    let cmpAWFm = this._lc('cYIeghCAX', {parent:component,content:(layout) => {let cnd_OQ3 = component.property;
this.setState('stcyyAM', cnd_OQ3);
if (cnd_OQ3) { 
let elAlMsH = eo('section','oAXf',null,`class`,`single-property`);
let elG4d5v = eo('div','4PQf',null,`class`,`containers`);
let elxRwcZ = eo('section','s3af',null,`class`,`single-property-preface flex-wrap d-flex p-4`);
let elyBNyu = eo('section','p_uf',null,`class`,`single-property-preface-left col-lg-8 col-sm-12`);
let el8uUKd = eo('section','SUpf',null,`class`,`preface-info d-flex justify-content-between`);
let elVEJkF = eo('h2','Mf5f',null,`class`,`property-name`);
text( component.property.name );
ec('h2');
let cndkC6d = component.property.id;
this.setState('stnxQXE', cndkC6d);
if (cndkC6d) { 
let elwrybE = eo('p','Vg9f',null,`class`,`property-id`);
text(`#ID: ${component.property ? component.property.id : ""}`);
ec('p');
}ec('section');
let elL_mTa = eo('section',null,null,`class`,`property-img`);
let cmp2hUi = this._lc('c_9sXHWgm', {parent:component,parentTop:layout,props:{slides:component.slides},attrs:{title:`${trans(`${component.property.name}`)}`,alt:`${component.property.name}'s previews`}});
ec('section');
ec('section');
let elX_xjV = eo('section',null,null,`class`,`single-property-preface-right col-lg-4 col-sm-12`);
let elSzohm = eo('section',null,null,`class`,`contact-section`);
let elwogpy = eo('section',null,null,`class`,`contact-info`);
let elAkgOF = eo('h3');
text(`Contact Us`);
ec('h3');
let elZCWpp = eo('p');
let elKvM39 = eo('span');
text(`Email:`);
ec('span');
text(component.cache.get("settings").settings["site.email"]);
ec('p');
let elh67r2 = eo('p');
let elUvcx6 = eo('span');
text(`phone:`);
ec('span');
text(component.cache.get("settings").settings["site.phone"]);
ec('p');
ec('section');
let ele2wGi = eo('section',null,null,`class`,`contact-request`);
let elyfADN = eo('h3');
text(`Send Request`);
ec('h3');
let elYodH3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`action`,`https://homes-egypt.com/contact-us/send`,`class`,`d-flex flex-wrap`);

                if (! elYodH3.formHandler) {
                    window.cfrmdlr = elYodH3.formHandler = new FormHandler(elYodH3, component);
                } else {
                    window.cfrmdlr = elYodH3.formHandler;
                }
            let el58SCi = eo('div',null,null,`class`,`form-group col-6`);
let elyf4GM = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYodH3.formHandler.addError(undefined, 'required', trans('validation.required'));}return elYodH3.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your name`)}`,`type`,`text`,`class`,`form-control`);
let cnduZBZ = elYodH3.formHandler.getError(undefined);
this.setState('stAEd10', cnduZBZ);
if (cnduZBZ) { 
let elaxh8o = eo('div','YX3f',null,`class`,`error-msg`);
text(elYodH3.formHandler.getError(undefined));
ec('div');
}ec('div');
let el72ETp = eo('div',null,null,`class`,`form-group col-6`);
let elhFGee = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYodH3.formHandler.addError(undefined, 'required', trans('validation.required'));}return elYodH3.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your phone number`)}`,`type`,`number`,`class`,`form-control`);
let cnd0aw3 = elYodH3.formHandler.getError(undefined);
this.setState('stqdG3L', cnd0aw3);
if (cnd0aw3) { 
let ellRTfK = eo('div','mc1f',null,`class`,`error-msg`);
text(elYodH3.formHandler.getError(undefined));
ec('div');
}ec('div');
let elrVTHk = eo('div',null,null,`class`,`form-group col-12`);
let el7gMpG = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYodH3.formHandler.addError(undefined, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elYodH3.formHandler.addError(undefined, 'email', trans('invalid-email-address'));}return elYodH3.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your email address`)}`,`type`,`email`,`class`,`form-control`);
let cndgVba = elYodH3.formHandler.getError(undefined);
this.setState('stEwzi8', cndgVba);
if (cndgVba) { 
let elzbBeC = eo('div','keGf',null,`class`,`error-msg`);
text(elYodH3.formHandler.getError(undefined));
ec('div');
}let ele_l6j = eo('small',null,null,`class`,`text-uppercase text-dark`);
text(`We Will Not Share Email with any one`);
ec('small');
ec('div');
let elS7Vwu = eo('div',null,null,`class`,`form-group col-12`);
let elIs8jN = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYodH3.formHandler.addError(undefined, 'required', trans('validation.required'));}return elYodH3.formHandler.removeError(undefined);}]},`placeholder`,`${trans(`Your message`)}`,`type`,`textarea`,`class`,`form-control`,`rows`,`4`);
ec('textarea');
let cndkiTO = elYodH3.formHandler.getError(undefined);
this.setState('st2mfJ6', cndkiTO);
if (cndkiTO) { 
let elUpx4g = eo('div','ioHf',null,`class`,`error-msg`);
text(elYodH3.formHandler.getError(undefined));
ec('div');
}ec('div');
let elQ_LT8 = eo('button',null,null,`type`,`button`,`class`,`contact-btn btn-action mr-auto`);
text(`Request`);
ec('button');
ec('form');
ec('section');
ec('section');
ec('section');
ec('section');
let elE10_R = eo('section',null,null,`class`,`single-property-middle d-flex flex-wrap`);
let ellqtsB = eo('div',null,null,`class`,`single-property-middle-left d-flex flex-wrap col-lg-8 col-sm-12 p-3`);
let elBWgiI = eo('ul',null,null,`class`,`col-sm-6 property-data-p1 list-unstyled`);
let elYLUw1 = eo('li',null,null,`class`,`property-data-item`);
for (let i in component.property.prices) {
let price = component.property.prices[i]; 
 let iiPEo1 = '5Ho0e8D' + i;
let el1qpVg = eo('p','H5cDMG9kODsz' + i+iiPEo1);
let elcXzEG = eo('span','x0iff'+iiPEo1,null,`class`,`prop-key`);
text(`${price.type} Price`);
ec('span');
text(`${component.ifCurrencyInDollar ? Number(price.priceInDollar).toLocaleString() : Number(price.price).toLocaleString()}
                                ${component.cache.get("currency")}`);
ec('p');
}
ec('li');
let elI1Q2X = eo('li',null,null,`class`,`property-data-item`);
let el4YqS8 = eo('span',null,null,`class`,`prop-key`);
text(`Address`);
ec('span');
text(`${component.property.region} - ${component.property.city}`);
ec('li');
let eldRvVc = eo('li',null,null,`class`,`property-data-item`);
let el91fh2 = eo('span',null,null,`class`,`prop-key`);
text(`Type`);
ec('span');
text(component.property.type);
ec('li');
let elsMhHt = eo('li',null,null,`class`,`property-data-item`);
let el3N6dE = eo('span',null,null,`class`,`prop-key`);
text(`Id`);
ec('span');
text(component.property.id);
ec('li');
ec('ul');
let elmR01n = eo('ul',null,null,`class`,`col-sm-6 property-data-p2 list-unstyled`);
for (let i in component.property.rooms) {
let room = component.property.rooms[i]; 
 let iizToO = 't59NCdM' + i;
let el23VnD = eo('li','QcmTNBzvBhBG' + i+iizToO,null,`class`,`property-data-item`);
let eltD9jv = eo('span','YjQff'+iizToO,null,`class`,`prop-key`);
text(room.name);
ec('span');
text(room.value);
ec('li');
}
let elQpqKK = eo('li',null,null,`class`,`property-data-item`);
let elI15xW = eo('span',null,null,`class`,`prop-key`);
text(`Other Rooms`);
ec('span');
text(component.property.additional_rooms);
ec('li');
let elTmSsx = eo('li',null,null,`class`,`property-data-item`);
let elVYoum = eo('span',null,null,`class`,`prop-key`);
text(`City`);
ec('span');
text(component.property.city);
ec('li');
ec('ul');
let eloghm9 = eo('section',null,null,`class`,`property-desc`);
let ela4Y0X = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showDesc = !component.showDesc}]});
text(`Full Description`);
let elwSX9z = eo('i',null,null,`class`,`fa fa-chevron-${ component.showDesc ? 'up' : 'down' }`);
ec('i');
ec('h3');
let elOZK8c = eo('p');
ec('p');
let cnd_apb = component.showDesc;
this.setState('sta8_kc', cnd_apb);
if (cnd_apb) { 
let elxOm1V = eo('p','sXff');
text( component.property.description );
ec('p');
}ec('section');
ec('div');
let elq_dnU = eo('div',null,null,`class`,`single-property-middle-right col-lg-4 col-sm-12`);
let elYGWeU = eo('iframe',null,null, 'style', {width:'100%',height:'100%'},`id`,`gmap_canvas`,`src`,`${component.mapSrc}`,`frameborder`,`0`,`scrolling`,`no`,`marginheight`,`0`,`marginwidth`,`0`);
ec('iframe');
ec('div');
ec('section');
let elGql1X = eo('section',null,null,`class`,`single-property-footer text-center p-6`);
let elNrRVG = eo('h2');
text(`Similar Properties`);
ec('h2');
let elzw4t3 = eo('div',null,null,`class`,`properties-container d-flex justify-content-center align-items-center`);
let cnd_HqE = ! Is.empty(component.property.similar_properties);
this.setState('stHrqY3', cnd_HqE);
if (cnd_HqE) { 
for (let i in component.property.similar_properties.slice(0, 3)) {
let smProperty = component.property.similar_properties.slice(0, 3)[i]; 
 let iixdK2 = '6s8nUCU' + i;
let elDwIQ6 = eo('article','yhdE801cqJgm' + i+iixdK2,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12 mb-3`);
let cmp6utA = this._lc('cX0uokojr', {parent:component,parentTop:layout,props:{property:smProperty},state:'stHrqY3',insideLoop:true,index:"" +iixdK2});
ec('article');
}
}ec('div');
ec('section');
ec('div');
ec('section');
}let cndP2ol = !component.property;
this.setState('stVTKl8', cndP2ol);
if (cndP2ol) { 
let elYX1al = eo('section','OT2f',null,`class`,`d-flex justify-content-center align-items-center`);
let eljfmvf = eo('p','KHRf',null,`class`,`not-found`);
text(`Property is not found !`);
ec('p');
ec('section');
}let cnd79UY = component.property;
this.setState('stwxrPT', cnd79UY);
if (cnd79UY) { 
let el4e_RV = eo('section','QIhf',null,`class`,`property-actions d-md-none d-flex text-center btn-group`);
let el9Xj_2 = eo('a','u2Rf',null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : '#'}`,`class`,`bg-success w-100 text-white rounded-left`);
let elVtpvF = eo('i','BHef',null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elWEXb3 = eo('a','pXgf',null,`href`,`tel:${component.property.whatsapp_mobile ? component.property.whatsapp_mobile : ''}`,`class`,`bg-primary w-100 text-white rounded-right`);
let el1eRaQ = eo('i','nTmf',null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('section');
}}});

                    this.isReadyToGo();
                }
        });