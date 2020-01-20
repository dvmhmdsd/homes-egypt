_Component({
                selector: 'property-card',
                c: 'PropertyCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache'],
                children: {cpIxQLVcU:'flk-slider'},
                render: function (component) {
                    let elXgNCu = eo('div',null,null,`class`,`property-item-container`);
let elyiq9q = eo('header',null,null,`class`,`property-header`);
let elPmPcJ = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elfUOpH = eo('section',null,null,`class`,`property-img`);
let cmpmSJv = this._lc('cpIxQLVcU', {parent:component,props:{slides:component.property.images},attrs:{alt:`${component.property.name}'s images`}});
ec('section');
ec('a');
let elLZ5l6 = eo('section',null,null,`class`,`property-metadata`);
let elHMXgl = eo('p',null,null,`class`,`property-location absolute-position`);
text( component.property.region );
ec('p');
let el3pG9B = eo('p',null,null,`class`,`property-type absolute-position`);
text( component.property.saleType );
ec('p');
let eltUZgx = eo('p',null,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(component.property.priceInDollar).toLocaleString() : Number(component.property.price).toLocaleString()}
                ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elK1mNp = eo('main',null,null,`class`,`property-body`);
let elq0CYS = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elc3WPm = eo('h3',null,null,`class`,`property-name`);
text( component.property.name );
ec('h3');
ec('a');
let elXZmqa = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elIhKk0 = eo('div',null,null,`class`,`property-rooms`);
let eld2eIa = eo('span',null,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let el5gOug = eo('i',null,null,`class`,`fa fa-bed`);
ec('i');
text( component.property.bed_rooms );
ec('span');
let elZQcHh = eo('span',null,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let el4_VWT = eo('i',null,null,`class`,`fa fa-bath`);
ec('i');
text( component.property.bath_rooms );
ec('span');
ec('div');
let elsXnJ7 = eo('p',null,null,`class`,`property-id`);
text(`#${ component.property.id }`);
ec('p');
ec('div');
ec('main');
let elHxlFm = eo('footer',null,null,`class`,`property-footer d-md-none d-flex text-center btn-group`);
let elrclhT = eo('a',null,null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : ''}`,`class`,`bg-success w-100 text-white rounded-left`);
let el23KhP = eo('i',null,null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let elGaPB5 = eo('a',null,null,`href`,`tel:${component.property.whatsapp_mobile}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elEIRlm = eo('i',null,null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('footer');
ec('div');

                    this.isReadyToGo();
                }
        });