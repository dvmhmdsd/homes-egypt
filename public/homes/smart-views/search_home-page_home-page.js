_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['properties','loading','propertiesToShow','cache','viewMore'],
                children: {c04KxtiRd:'searchform',c0oSJvMS_:'loading',cJk5WdSj0:'flk-slider',cyAhAVCEV:'layout'},
                render: function (component) {
                    let cmptSqJ = this._lc('cyAhAVCEV', {parent:component,content:(layout) => {let cmp_B1z = this._lc('c04KxtiRd', {parent:component,parentTop:layout,props:{properties:component.properties},events:{onsearch:function(e) {let $el = this; component.properties = e; echo('this is search event props' + e)}}});
let elc_7Rj = eo('section',null,null,`class`,`properties p-4`);
let el3ulFN = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndXvXa = component.loading;
this.setState('stWfH0m', cndXvXa);
let cndKUKz = !component.loading;
this.setState('stbSy9v', cndKUKz);
if (cndXvXa) { 
let elSJoB4 = eo('div','Vjyf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmp_rxI = this._lc('c0oSJvMS_', {parent:component,parentTop:layout,state:'stWfH0m'});
ec('div');
}let cnduTPZ = !component.loading && component.properties && component.properties.length > 0;
this.setState('stQVbdV', cnduTPZ);
let cndoZmL = cndKUKz;
this.setState('stXRo7R', cndoZmL);
if (cnduTPZ) { 
let elHa03y = eo('div','sWnf',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let ii99HM = 'f_G2EaQ' + i;
let elJmqyM = eo('article','j_meVooRPRQT' + i+ii99HM,null,`class`,`property-item col-lg-4 col-sm-12`);
let elqXtOn = eo('div','Oi4ff'+ii99HM,null,`class`,`property-item-container`);
let el2l1Xm = eo('header','M3xff'+ii99HM,null,`class`,`property-header`);
let elB_aGz = eo('a','W4Fff'+ii99HM,null,`href`,`/properties/${ property.old_id }/${
              property.name.split(' ').join('-')
            }`);
let elxmK5j = eo('section','huRff'+ii99HM,null,`class`,`property-img`);
let cmpNFvG = this._lc('cJk5WdSj0', {parent:component,parentTop:layout,props:{slides:property.images},attrs:{title:`${trans(`${property.name}'s images`)}`},state:'stQVbdV',insideLoop:true,index:"" +ii99HM});
ec('section');
ec('a');
let eluwkNz = eo('section','sinff'+ii99HM,null,`class`,`property-metadata`);
let elK_r2q = eo('p','gY3ff'+ii99HM,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let elLIp46 = eo('p','UTgff'+ii99HM,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let ell7ACe = eo('p','gDgff'+ii99HM,null,`class`,`property-price absolute-position`);
text(`${ component.cache.get("currency") == "USD" ? Number(property.priceInDollar).toLocaleString() : Number(property.price).toLocaleString()}
              ${component.cache.get("currency")}`);
ec('p');
ec('section');
ec('header');
let el0XN1K = eo('main','dWTff'+ii99HM,null,`class`,`property-body`);
let eltwNvr = eo('a','1jpff'+ii99HM,null,`href`,`/properties/${ property.old_id }/${
              property.name.split(' ').join('-')
            }`);
let elhe0va = eo('h3','Qmhff'+ii99HM,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let elL9RlM = eo('div','S82ff'+ii99HM,null,`class`,`property-numbers d-flex justify-content-between`);
let el2ao7i = eo('div','zejff'+ii99HM,null,`class`,`property-rooms`);
let el4xB4K = eo('span','uDeff'+ii99HM,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elWp_BE = eo('i','pT3ff'+ii99HM,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let elBAVhr = eo('span','3SMff'+ii99HM,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let eltIToW = eo('i','yYjff'+ii99HM,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elb5Yxd = eo('p','qWpff'+ii99HM,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('div');
ec('article');
}
let elxkAIX = eo('div','Fqvf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elqevSK = eo('button','zZmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else if (cndoZmL) { 
let elewLqs = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let eljetEJ = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');
}});

                    this.isReadyToGo();
                }
        });