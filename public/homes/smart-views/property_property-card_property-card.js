_Component({
                selector: 'property-card',
                c: 'PropertyCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache'],
                children: {cvnrMopQc:'flk-slider'},
                render: function (component) {
                    let elJVij1 = eo('div',null,null,`class`,`property-item-container`);
let elge8RE = eo('header',null,null,`class`,`property-header`);
let elGpKa2 = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let el8kfrA = eo('section',null,null,`class`,`property-img`);
let cmpUERS = this._lc('cvnrMopQc', {parent:component,props:{slides:component.property.images},attrs:{alt:`${component.property.name}'s images`}});
ec('section');
ec('a');
let el6hKXo = eo('section',null,null,`class`,`property-metadata`);
let eltDzTU = eo('p',null,null,`class`,`property-location absolute-position`);
text( component.property.region );
ec('p');
let elG_ace = eo('p',null,null,`class`,`property-type absolute-position`);
text( component.property.saleType );
ec('p');
let elh6PwJ = eo('p',null,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(component.property.priceInDollar).toLocaleString() : Number(component.property.price).toLocaleString()}
                ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elvN76c = eo('main',null,null,`class`,`property-body`);
let eljljVm = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elhHwJz = eo('h3',null,null,`class`,`property-name`);
text( component.property.name );
ec('h3');
ec('a');
let elnAOqv = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elBRaQe = eo('div',null,null,`class`,`property-rooms`);
let el3ZZ8O = eo('span',null,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elO7A2i = eo('i',null,null,`class`,`fa fa-bed`);
ec('i');
text( component.property.bed_rooms );
ec('span');
let elSw90N = eo('span',null,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elNcU19 = eo('i',null,null,`class`,`fa fa-bath`);
ec('i');
text( component.property.bath_rooms );
ec('span');
ec('div');
let elG02sp = eo('p',null,null,`class`,`property-id`);
text(`#${ component.property.id }`);
ec('p');
ec('div');
ec('main');
let elm639g = eo('footer',null,null,`class`,`property-footer d-md-none d-flex text-center btn-group`);
let el4BsKL = eo('a',null,null,`href`,`${component.property.whatsapp_mobile ? ('whatsapp://send?phone=+' + component.property.whatsapp_mobile + '&text=I would like to get more information about this property you posted in homes-egypt.com, https://homes-egypt/properties/' + component.property.old_id+ '/' + component.property.name.split(' ').join('-')) : ''}`,`class`,`bg-success w-100 text-white rounded-left`);
let elSGzKd = eo('i',null,null,`class`,`fab fa-whatsapp`);
ec('i');
text(`Whatsapp`);
ec('a');
let el6AosC = eo('a',null,null,`href`,`tel:${component.property.whatsapp_mobile}`,`class`,`bg-primary w-100 text-white rounded-right`);
let elgyiYF = eo('i',null,null,`class`,`fa fa-phone-alt`);
ec('i');
text(`Call`);
ec('a');
ec('footer');
ec('div');

                    this.isReadyToGo();
                }
        });