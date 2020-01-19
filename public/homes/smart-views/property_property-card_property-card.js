_Component({
                selector: 'property-card',
                c: 'PropertyCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['property','cache'],
                children: {cim3nLsD7:'flk-slider'},
                render: function (component) {
                    let elR50If = eo('div',null,null,`class`,`property-item-container`);
let eloBtN3 = eo('header',null,null,`class`,`property-header`);
let elaFVE2 = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let elFIcId = eo('section',null,null,`class`,`property-img`);
let cmpUaZu = this._lc('cim3nLsD7', {parent:component,props:{slides:component.property.images},attrs:{title:`${trans(`${component.property.name}'s images`)}`}});
ec('section');
ec('a');
let elY5IlF = eo('section',null,null,`class`,`property-metadata`);
let elMaAut = eo('p',null,null,`class`,`property-location absolute-position`);
text( component.property.region );
ec('p');
let el8Hb5O = eo('p',null,null,`class`,`property-type absolute-position`);
text( component.property.saleType );
ec('p');
let elaojOq = eo('p',null,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(component.property.priceInDollar).toLocaleString() : Number(component.property.price).toLocaleString()}
                ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let eldmIty = eo('main',null,null,`class`,`property-body`);
let elJDnGU = eo('a',null,null,`href`,`/properties/${ component.property.old_id }/${
            component.property.name.split(' ').join('-')
                      }`);
let ely7xgX = eo('h3',null,null,`class`,`property-name`);
text( component.property.name );
ec('h3');
ec('a');
let elbn4sj = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elHkw_w = eo('div',null,null,`class`,`property-rooms`);
let el1_3zn = eo('span',null,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elab9FG = eo('i',null,null,`class`,`fa fa-bed`);
ec('i');
text( component.property.bed_rooms );
ec('span');
let eljHbNc = eo('span',null,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let el6Wrp1 = eo('i',null,null,`class`,`fa fa-bath`);
ec('i');
text( component.property.bath_rooms );
ec('span');
ec('div');
let elucU8N = eo('p',null,null,`class`,`property-id`);
text(`#${ component.property.id }`);
ec('p');
ec('div');
ec('main');
ec('div');

                    this.isReadyToGo();
                }
        });