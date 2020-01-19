_Component({
                selector: 'properties-container',
                c: 'PropertiesContainer', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','cache','viewMore'],
                children: {czTYrMUcT:'loading',cmXLMKZtQ:'flk-slider'},
                render: function (component) {
                    let el3FlC2 = eo('section',null,null,`class`,`properties p-4`);
let elTB0BI = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndRpiL = component.loading;
this.setState('st44yWn', cndRpiL);
let cndyXLO = !component.loading;
this.setState('st5oFz2', cndyXLO);
if (cndRpiL) { 
let elcuPk2 = eo('div','U6Wf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpoRSr = this._lc('czTYrMUcT', {parent:component,state:'st44yWn'});
ec('div');
}let cndkgbu = !component.loading && component.properties && component.properties.length > 0;
this.setState('st4DxpC', cndkgbu);
let cndh57D = cndyXLO;
this.setState('st0u1aM', cndh57D);
if (cndkgbu) { 
let elORaWD = eo('div','sxVf',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iinvv8 = 'mgdoNoJ' + i;
let elFNGjZ = eo('article','9hi_V4hOUAaw' + i+iinvv8,null,`class`,`property-item col-lg-4 col-sm-12`);
let elHQVuQ = eo('div','YkRff'+iinvv8,null,`class`,`property-item-container`);
let elpMWjm = eo('header','xeDff'+iinvv8,null,`class`,`property-header`);
let el1gvyG = eo('a','g0mff'+iinvv8,null,`href`,`/properties/${ property.old_id }/${
                    property.name.split(' ').join('-')
                  }`);
let elwuIE3 = eo('section','pNMff'+iinvv8,null,`class`,`property-img`);
let cmpzMZS = this._lc('cmXLMKZtQ', {parent:component,props:{slides:property.images},attrs:{title:`${trans(`${property.name}'s images`)}`},state:'st4DxpC',insideLoop:true,index:"" +iinvv8});
ec('section');
ec('a');
let elYbHu7 = eo('section','QkXff'+iinvv8,null,`class`,`property-metadata`);
let elsECxw = eo('p','HgGff'+iinvv8,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let elqUzJH = eo('p','U6Pff'+iinvv8,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let ellYbmU = eo('p','rfOff'+iinvv8,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(property.priceInDollar).toLocaleString() : Number(property.price).toLocaleString()}
                            ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elqwrVh = eo('main','V0vff'+iinvv8,null,`class`,`property-body`);
let elBb2Pr = eo('a','7Yfff'+iinvv8,null,`href`,`/properties/${ property.old_id }/${
                    property.name.split(' ').join('-')
                  }`);
let el7bBJp = eo('h3','7z0ff'+iinvv8,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let elMfoIw = eo('div','_Lyff'+iinvv8,null,`class`,`property-numbers d-flex justify-content-between`);
let eloPAcy = eo('div','4dhff'+iinvv8,null,`class`,`property-rooms`);
let elfHFnU = eo('span','i7Bff'+iinvv8,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elUCrd2 = eo('i','OHkff'+iinvv8,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let elf4GPv = eo('span','BGjff'+iinvv8,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let eld7DfW = eo('i','Hjyff'+iinvv8,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elzJK6_ = eo('p','Ts1ff'+iinvv8,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('div');
ec('article');
}
let elKtY91 = eo('div','gcyf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let el9pnav = eo('button','UrQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else if (cndh57D) { 
let elP1nDQ = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let eloQ2ht = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');

                    this.isReadyToGo();
                }
        });