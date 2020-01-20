_Component({
                selector: 'property-card',
                c: 'PropertyCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache'],
                children: {cLCb3CBx1:'flk-slider'},
                render: function (component) {
                    let elXMgG3 = eo('div',null,null,`class`,`property-item-container`);
let elkIZ2H = eo('header',null,null,`class`,`property-header`);
let ele2_F9 = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elD0ics = eo('section',null,null,`class`,`property-img`);
let cmpjlXG = this._lc('cLCb3CBx1', {parent:component,props:{slides:component.property.images},attrs:{alt:`${component.property.name}'s images`}});
ec('section');
ec('a');
let elqmIiZ = eo('section',null,null,`class`,`property-metadata`);
let elMoDNv = eo('p',null,null,`class`,`property-location absolute-position`);
text( component.property.region );
ec('p');
let elnDQPV = eo('p',null,null,`class`,`property-type absolute-position`);
text( component.property.saleType );
ec('p');
let eleEQxg = eo('p',null,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(component.property.priceInDollar).toLocaleString() : Number(component.property.price).toLocaleString()}
                ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let el9Sby8 = eo('main',null,null,`class`,`property-body`);
let el9Vadg = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elIrpZs = eo('h3',null,null,`class`,`property-name`);
text( component.property.name );
ec('h3');
ec('a');
let el0xKLh = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elJChot = eo('div',null,null,`class`,`property-rooms`);
let elqyDxn = eo('span',null,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elRE6s3 = eo('i',null,null,`class`,`fa fa-bed`);
ec('i');
text( component.property.bed_rooms );
ec('span');
let elBbozF = eo('span',null,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let el5V_0a = eo('i',null,null,`class`,`fa fa-bath`);
ec('i');
text( component.property.bath_rooms );
ec('span');
ec('div');
let elOl5FV = eo('p',null,null,`class`,`property-id`);
text(`#${ component.property.id }`);
ec('p');
ec('div');
ec('main');
let elrEJyw = eo('footer',null,null,`class`,`property-footer d-md-none d-flex text-center btn-group`);
let elzFzhL = eo('a',null,null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : ''}`,`class`,`bg-success w-100 text-white rounded-left`);
let el_Le_W = eo('i',null,null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let ela8uQU = eo('a',null,null,`href`,`tel:${component.property.whatsapp_mobile}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elHaNn2 = eo('i',null,null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('footer');
ec('div');

                    this.isReadyToGo();
                }
        });