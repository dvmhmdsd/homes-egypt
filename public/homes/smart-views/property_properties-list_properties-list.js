_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','viewMore'],
                children: {cLPVYAIMo:'loading',cOm6pelgB:'property-card'},
                render: function (component) {
                    let elyEpi6 = eo('section',null,null,`class`,`properties p-4`);
let elUWESp = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cnd6wJN = component.loading;
this.setState('stkZbKL', cnd6wJN);
let cndkk8y = !(cnd6wJN);
this.setState('stIu1rg', cndkk8y);
if (cnd6wJN) { 
let elOIcLi = eo('div','wV3f',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpCR68 = this._lc('cLPVYAIMo', {parent:component,state:'stkZbKL'});
ec('div');
}else { 
let cndVd7H = ! Is.empty(component.properties);
this.setState('stynuw9', cndVd7H);
let cnd3PlD = !(cndVd7H);
this.setState('st4QIqV', cnd3PlD);
if (cndVd7H) { 
let elRvdzU = eo('div','RARf',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iiHBDw = 'kSCASC6' + i;
let elvcEFg = eo('article','I57yEAFkkQBV' + i+iiHBDw,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12`);
let cmp4fjX = this._lc('cOm6pelgB', {parent:component,props:{property:property},state:'stynuw9',insideLoop:true,index:"" +iiHBDw});
ec('article');
}
let eld1Uot = eo('div','u5lf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elDnJrl = eo('button','Oivf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else { 
let elNScxX = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let elUxx7k = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });