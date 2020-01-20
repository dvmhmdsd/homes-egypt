_Component({
                selector: 'property-card',
                c: 'PropertyCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache'],
                children: {cgTT_gSYI:'flk-slider'},
                render: function (component) {
                    let elAO7qx = eo('div',null,null,`class`,`property-item-container`);
let elgTmAW = eo('header',null,null,`class`,`property-header`);
let elAa8bw = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elvGxEw = eo('section',null,null,`class`,`property-img`);
let cmp7y1L = this._lc('cgTT_gSYI', {parent:component,props:{slides:component.property.images},attrs:{alt:`${component.property.name}'s images`}});
ec('section');
ec('a');
let el6x_fE = eo('section',null,null,`class`,`property-metadata`);
let elpEa4l = eo('p',null,null,`class`,`property-location absolute-position`);
text( component.property.region );
ec('p');
let eldrsJD = eo('p',null,null,`class`,`property-type absolute-position`);
text( component.property.saleType );
ec('p');
let elDIo1M = eo('p',null,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(component.property.priceInDollar).toLocaleString() : Number(component.property.price).toLocaleString()}
                ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elEczFg = eo('main',null,null,`class`,`property-body`);
let elgUhwB = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elV2yAR = eo('h3',null,null,`class`,`property-name`);
text( component.property.name );
ec('h3');
ec('a');
let elL3Cpg = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elQpkIA = eo('div',null,null,`class`,`property-rooms`);
let elMpbRi = eo('span',null,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elASukY = eo('i',null,null,`class`,`fa fa-bed`);
ec('i');
text( component.property.bed_rooms );
ec('span');
let eldIULh = eo('span',null,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let el_ovGH = eo('i',null,null,`class`,`fa fa-bath`);
ec('i');
text( component.property.bath_rooms );
ec('span');
ec('div');
let el3Ff0Q = eo('p',null,null,`class`,`property-id`);
text(`#${ component.property.id }`);
ec('p');
ec('div');
ec('main');
let elis7mD = eo('footer',null,null,`class`,`property-footer d-md-none d-flex text-center btn-group`);
let elWvW_l = eo('a',null,null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : ''}`,`class`,`bg-success w-100 text-white rounded-left`);
let elQCcf5 = eo('i',null,null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elw8xkI = eo('a',null,null,`href`,`tel:${component.property.whatsapp_mobile}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elo4oxf = eo('i',null,null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('footer');
ec('div');

                    this.isReadyToGo();
                }
        });