_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','viewMore'],
                children: {cPKCA18CF:'loading',cJQRfshCo:'property-card'},
                render: function (component) {
                    let elmZU_9 = eo('section',null,null,`class`,`properties p-4`);
let elU0pUe = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndPxfb = component.loading;
this.setState('stgdZxK', cndPxfb);
let cndfP_s = !component.loading && component.properties.length == 0;
this.setState('stG1s7a', cndfP_s);
if (cndPxfb) { 
let elRpUQt = eo('div','VMUf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpr5Om = this._lc('cPKCA18CF', {parent:component,state:'stgdZxK'});
ec('div');
}let cndCfGs = !component.loading && component.properties && component.properties.length > 0;
this.setState('stpJNv8', cndCfGs);
let cndtp4R = cndfP_s;
this.setState('steXVkS', cndtp4R);
if (cndCfGs) { 
let el1OAuU = eo('div','PoOf',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iilw7L = 'Y3C2s5g' + i;
let el2ETTg = eo('article','VMYTlVh0k4Pl' + i+iilw7L,null,`class`,`property-item col-lg-4 col-sm-12`);
let cmp3y_G = this._lc('cJQRfshCo', {parent:component,props:{property:property},state:'stpJNv8',insideLoop:true,index:"" +iilw7L});
ec('article');
}
let el55fMv = eo('div','3wnf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elaSDxI = eo('button','KAgf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else if (cndtp4R) { 
let elM9MDc = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let el1oyM4 = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');

                    this.isReadyToGo();
                }
        });