_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','cache','viewMore'],
                children: {cCi8D3GRp:'loading',cCsLCiaaT:'flk-slider'},
                render: function (component) {
                    let elcKRJH = eo('section',null,null,`class`,`properties p-4`);
let elsZnfA = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndgFXy = component.loading;
this.setState('stY65fe', cndgFXy);
let cndBkAS = !component.loading && component.properties.length == 0;
this.setState('st2viQD', cndBkAS);
if (cndgFXy) { 
let elkTCF6 = eo('div','8y2f',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpjY0G = this._lc('cCi8D3GRp', {parent:component,state:'stY65fe'});
ec('div');
}let cndfDDC = !component.loading && component.properties && component.properties.length > 0;
this.setState('stms0k7', cndfDDC);
let cnddiBQ = cndBkAS;
this.setState('stHggDx', cnddiBQ);
if (cndfDDC) { 
let el4QUD8 = eo('div','on9f',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iiVq4B = 'kbrMiHO' + i;
let elzj5BB = eo('article','6daKFCrdC0nB' + i+iiVq4B,null,`class`,`property-item col-lg-4 col-sm-12`);
let elXpEVv = eo('div','Nq6ff'+iiVq4B,null,`class`,`property-item-container`);
let elWVmV_ = eo('header','fjJff'+iiVq4B,null,`class`,`property-header`);
let el4MWPq = eo('a','Y2vff'+iiVq4B,null,`href`,`/properties/${ property.old_id }/${
                            property.name.split(' ').join('-')
                          }`);
let els0Kq8 = eo('section','9oXff'+iiVq4B,null,`class`,`property-img`);
let cmpvRxk = this._lc('cCsLCiaaT', {parent:component,props:{slides:property.images},attrs:{title:`${trans(`${property.name}'s images`)}`},state:'stms0k7',insideLoop:true,index:"" +iiVq4B});
ec('section');
ec('a');
let elQpLjc = eo('section','WkSff'+iiVq4B,null,`class`,`property-metadata`);
let elZ5Hos = eo('p','UHFff'+iiVq4B,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let elq_87i = eo('p','FRSff'+iiVq4B,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let elgkMMW = eo('p','HKQff'+iiVq4B,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(property.priceInDollar).toLocaleString() : Number(property.price).toLocaleString()}
                            ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let elMX6pQ = eo('main','8v2ff'+iiVq4B,null,`class`,`property-body`);
let elurGpU = eo('a','fI5ff'+iiVq4B,null,`href`,`/properties/${ property.old_id }/${
                            property.name.split(' ').join('-')
                          }`);
let elyjsbt = eo('h3','b7jff'+iiVq4B,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let el2ofm1 = eo('div','97jff'+iiVq4B,null,`class`,`property-numbers d-flex justify-content-between`);
let el5Xf08 = eo('div','1Kwff'+iiVq4B,null,`class`,`property-rooms`);
let ellm5hM = eo('span','H4Rff'+iiVq4B,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let el2ZrYi = eo('i','tmkff'+iiVq4B,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let elf5wq8 = eo('span','gWeff'+iiVq4B,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elHqQRS = eo('i','6Ubff'+iiVq4B,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elsOOfL = eo('p','rOfff'+iiVq4B,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('div');
ec('article');
}
let el69KbB = eo('div','PPqf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elFRVlY = eo('button','hZdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else if (cnddiBQ) { 
let elVOO9m = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let eleuxf3 = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');

                    this.isReadyToGo();
                }
        });