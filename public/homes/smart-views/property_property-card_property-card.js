_Component({
                selector: 'property-card',
                c: 'PropertyCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache'],
                children: {cYAqCzMBR:'flk-slider'},
                render: function (component) {
                    let elz9DeQ = eo('div',null,null,`class`,`property-item-container`);
let el1BOSY = eo('header',null,null,`class`,`property-header`);
let el6l9ng = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elXUewy = eo('section',null,null,`class`,`property-img`);
let cmpjuMX = this._lc('cYAqCzMBR', {parent:component,props:{slides:component.property.images},attrs:{alt:`${component.property.name}'s images`}});
ec('section');
ec('a');
let el4mC0u = eo('section',null,null,`class`,`property-metadata`);
let ellenOp = eo('p',null,null,`class`,`property-location absolute-position`);
text( component.property.region );
ec('p');
let elWYjMM = eo('p',null,null,`class`,`property-type absolute-position`);
text( component.property.saleType );
ec('p');
let elEwa7q = eo('p',null,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(component.property.priceInDollar).toLocaleString() : Number(component.property.price).toLocaleString()}
                ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elqKQjX = eo('main',null,null,`class`,`property-body`);
let elBUgwa = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let eltT7Wc = eo('h3',null,null,`class`,`property-name`);
text( component.property.name );
ec('h3');
ec('a');
let ela0HRx = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elTiMUV = eo('div',null,null,`class`,`property-rooms`);
let elVzgGn = eo('span',null,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elY5Tzn = eo('i',null,null,`class`,`fa fa-bed`);
ec('i');
text( component.property.bed_rooms );
ec('span');
let elh9Aox = eo('span',null,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elVgIUd = eo('i',null,null,`class`,`fa fa-bath`);
ec('i');
text( component.property.bath_rooms );
ec('span');
ec('div');
let elwuDux = eo('p',null,null,`class`,`property-id`);
text(`#${ component.property.id }`);
ec('p');
ec('div');
ec('main');
let elY574U = eo('footer',null,null,`class`,`property-footer d-md-none d-flex text-center btn-group`);
let elwkSy8 = eo('a',null,null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : ''}`,`class`,`bg-success w-100 text-white rounded-left`);
let elr6HaS = eo('i',null,null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elNtRJt = eo('a',null,null,`href`,`tel:${component.property.whatsapp_mobile}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elpiqX4 = eo('i',null,null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('footer');
ec('div');

                    this.isReadyToGo();
                }
        });