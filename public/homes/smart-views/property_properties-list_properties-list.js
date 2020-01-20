_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','viewMore'],
                children: {cVtOnbTvp:'loading',c9QG41sKS:'property-card'},
                render: function (component) {
                    let elVCJGC = eo('section',null,null,`class`,`properties p-4`);
let elN4AAw = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndrgPB = component.loading;
this.setState('stoZlKp', cndrgPB);
let cndrcQ7 = !(cndrgPB);
this.setState('staIT5u', cndrcQ7);
if (cndrgPB) { 
let eljL8UB = eo('div','9Byf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmp1E9S = this._lc('cVtOnbTvp', {parent:component,state:'stoZlKp'});
ec('div');
}else { 
let cndkcp9 = ! Is.empty(component.properties);
this.setState('stfMWje', cndkcp9);
let cndYp18 = !(cndkcp9);
this.setState('stTOLFd', cndYp18);
if (cndkcp9) { 
let elJI9TN = eo('div','LU6f',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let ii6Ynq = 'wqC2AZh' + i;
let elKtHEp = eo('article','mqg57dsk6LR9' + i+ii6Ynq,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12`);
let cmpPdJe = this._lc('c9QG41sKS', {parent:component,props:{property:property},state:'stfMWje',insideLoop:true,index:"" +ii6Ynq});
ec('article');
}
let elpS43B = eo('div','evNf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elPGaj0 = eo('button','t9If',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else { 
let elwNdSs = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let elJn5iV = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });