_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','cache','viewMore'],
                children: {c91XjUqJT:'loading',cf7Hd2JtS:'flk-slider'},
                render: function (component) {
                    let elkFGa1 = eo('section',null,null,`class`,`properties p-4`);
let elRvxzG = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndRjON = component.loading;
this.setState('stcidMO', cndRjON);
let cndhBON = !component.loading;
this.setState('stksgcj', cndhBON);
if (cndRjON) { 
let elxiZsT = eo('div','oENf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpRPK9 = this._lc('c91XjUqJT', {parent:component,state:'stcidMO'});
ec('div');
}let cndsDV1 = !component.loading && component.properties && component.properties.length > 0;
this.setState('stseoGH', cndsDV1);
let cndm4vA = cndhBON;
this.setState('stRzdiH', cndm4vA);
if (cndsDV1) { 
let elp_It8 = eo('div','eGhf',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iiaCdz = 'fDxA8jO' + i;
let elEgaUd = eo('article','pjW9exwnTmFM' + i+iiaCdz,null,`class`,`property-item col-lg-4 col-sm-12`);
let elCUzZL = eo('div','LqGff'+iiaCdz,null,`class`,`property-item-container`);
let elvMMPP = eo('header','GRiff'+iiaCdz,null,`class`,`property-header`);
let elIpkvV = eo('a','PJFff'+iiaCdz,null,`href`,`/properties/${ property.old_id }/${
                        property.name.split(' ').join('-')
                      }`);
let el_CSbl = eo('section','a1Yff'+iiaCdz,null,`class`,`property-img`);
let cmpY1S_ = this._lc('cf7Hd2JtS', {parent:component,props:{slides:property.images},attrs:{title:`${trans(`${property.name}'s images`)}`},state:'stseoGH',insideLoop:true,index:"" +iiaCdz});
ec('section');
ec('a');
let elcDT2S = eo('section','uOJff'+iiaCdz,null,`class`,`property-metadata`);
let el4NWmL = eo('p','FaYff'+iiaCdz,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let elDgxnw = eo('p','6eJff'+iiaCdz,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let el9Im2O = eo('p','OY9ff'+iiaCdz,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(property.priceInDollar).toLocaleString() : Number(property.price).toLocaleString()}
                            ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elGt_FJ = eo('main','Vafff'+iiaCdz,null,`class`,`property-body`);
let elayGi6 = eo('a','1Z_ff'+iiaCdz,null,`href`,`/properties/${ property.old_id }/${
                        property.name.split(' ').join('-')
                      }`);
let elfBeZT = eo('h3','XBvff'+iiaCdz,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let el5U7qh = eo('div','Smbff'+iiaCdz,null,`class`,`property-numbers d-flex justify-content-between`);
let elIy3fX = eo('div','VvFff'+iiaCdz,null,`class`,`property-rooms`);
let elEHmrF = eo('span','cMdff'+iiaCdz,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elDwB0I = eo('i','G8Bff'+iiaCdz,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let elv6cb9 = eo('span','Wq6ff'+iiaCdz,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elcF6s4 = eo('i','wVsff'+iiaCdz,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elA_FgC = eo('p','T1aff'+iiaCdz,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('div');
ec('article');
}
let elHCBUp = eo('div','SWwf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elGfSaU = eo('button','v7df',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else if (cndm4vA) { 
let elVYV0o = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let el7qoLW = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');

                    this.isReadyToGo();
                }
        });