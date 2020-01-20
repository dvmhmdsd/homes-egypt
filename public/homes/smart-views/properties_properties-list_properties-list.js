_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','viewMore'],
                children: {cF7okyY5k:'loading',cf5mwzmvn:'property-card'},
                render: function (component) {
                    let eler09c = eo('section',null,null,`class`,`properties p-4`);
let eltZsm6 = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndoo0u = component.loading;
this.setState('stQ6eBs', cndoo0u);
let cndKmNe = !(cndoo0u);
this.setState('stVdDS_', cndKmNe);
if (cndoo0u) { 
let ellJfRW = eo('div','WiKf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpGyhJ = this._lc('cF7okyY5k', {parent:component,state:'stQ6eBs'});
ec('div');
}else { 
let cndqg1d = ! Is.empty(component.properties);
this.setState('stGz3MU', cndqg1d);
let cnd8tnz = !(cndqg1d);
this.setState('styXJL3', cnd8tnz);
if (cndqg1d) { 
let el7UQn4 = eo('div','e89f',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iiu_8D = '4JPTNw4' + i;
let elyXynj = eo('article','XmbHYb1FfdAR' + i+iiu_8D,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12`);
let cmpNZiV = this._lc('cf5mwzmvn', {parent:component,props:{property:property},state:'stGz3MU',insideLoop:true,index:"" +iiu_8D});
ec('article');
}
let elYqb3R = eo('div','2Uxf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elUMyNP = eo('button','lJof',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else { 
let elOlTax = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let el7IGnJ = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });