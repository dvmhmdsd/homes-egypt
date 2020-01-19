_Component({
                selector: 'properties-container',
                c: 'PropertiesContainer', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','cache','viewMore'],
                children: {cx6nGjuhR:'loading',cSjCsPxOD:'flk-slider'},
                render: function (component) {
                    let elayYPK = eo('section',null,null,`class`,`properties p-4`);
let elQey0G = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndMC_t = component.loading;
this.setState('stnXAly', cndMC_t);
let cndvdxc = !component.loading;
this.setState('stAX_47', cndvdxc);
if (cndMC_t) { 
let elXLDLe = eo('div','qZpf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpTZKz = this._lc('cx6nGjuhR', {parent:component,state:'stnXAly'});
ec('div');
}let cndE7OG = !component.loading && component.properties && component.properties.length > 0;
this.setState('stupMTd', cndE7OG);
let cndmvI_ = cndvdxc;
this.setState('stSja7Q', cndmvI_);
if (cndE7OG) { 
let elLFd15 = eo('div','QEtf',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let ii_es3 = 'P33madl' + i;
let el29id2 = eo('article','I7nTEj8e3YT3' + i+ii_es3,null,`class`,`property-item col-lg-4 col-sm-12`);
let elcRENn = eo('div','X5uff'+ii_es3,null,`class`,`property-item-container`);
let elCHUPw = eo('header','Y6dff'+ii_es3,null,`class`,`property-header`);
let eliV20w = eo('a','REhff'+ii_es3,null,`href`,`/properties/${ property.old_id }/${
                    property.name.split(' ').join('-')
                  }`);
let el2wUT8 = eo('section','9pxff'+ii_es3,null,`class`,`property-img`);
let cmp8pYE = this._lc('cSjCsPxOD', {parent:component,props:{slides:property.images},attrs:{title:`${trans(`${property.name}'s images`)}`},state:'stupMTd',insideLoop:true,index:"" +ii_es3});
ec('section');
ec('a');
let el1CB5H = eo('section','3Azff'+ii_es3,null,`class`,`property-metadata`);
let el7uV9g = eo('p','yTwff'+ii_es3,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let eldDLHe = eo('p','pORff'+ii_es3,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let eleo8Qh = eo('p','ZyGff'+ii_es3,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(property.priceInDollar).toLocaleString() : Number(property.price).toLocaleString()}
                            ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let eloLho3 = eo('main','fJQff'+ii_es3,null,`class`,`property-body`);
let elLPeqp = eo('a','5Qvff'+ii_es3,null,`href`,`/properties/${ property.old_id }/${
                    property.name.split(' ').join('-')
                  }`);
let elkm2CK = eo('h3','q8cff'+ii_es3,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let elAkBTb = eo('div','Ae6ff'+ii_es3,null,`class`,`property-numbers d-flex justify-content-between`);
let el_9q9d = eo('div','sTOff'+ii_es3,null,`class`,`property-rooms`);
let el8QLp6 = eo('span','URYff'+ii_es3,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elzGlB5 = eo('i','ETKff'+ii_es3,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let elNwLKo = eo('span','hwlff'+ii_es3,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elFhIX9 = eo('i','B_Kff'+ii_es3,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elpXHns = eo('p','lTOff'+ii_es3,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('div');
ec('article');
}
let elA2njY = eo('div','jxCf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elLz3Vt = eo('button','9u4f',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else if (cndmvI_) { 
let elM91gL = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let elYRsFy = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');

                    this.isReadyToGo();
                }
        });