_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','viewMore'],
                children: {c_D5aVhDP:'loading',cEYVf5UuE:'property-card'},
                render: function (component) {
                    let elHQsGH = eo('section',null,null,`class`,`properties p-4`);
let eloYaT6 = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cnd83Ce = component.loading;
this.setState('st19I2U', cnd83Ce);
let cnd7TJD = !(cnd83Ce);
this.setState('st5hQP8', cnd7TJD);
if (cnd83Ce) { 
let elzhRGg = eo('div','NDxf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmp06BA = this._lc('c_D5aVhDP', {parent:component,state:'st19I2U'});
ec('div');
}else { 
let cndKqut = ! Is.empty(component.properties);
this.setState('stBY4M1', cndKqut);
let cnd3tWF = !(cndKqut);
this.setState('st8AyyS', cnd3tWF);
if (cndKqut) { 
let elq3iEH = eo('div','HK1f',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iitrvw = 'BIUkOJL' + i;
let elaTUoQ = eo('article','7xslIBtSCB64' + i+iitrvw,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12`);
let cmpvY67 = this._lc('cEYVf5UuE', {parent:component,props:{property:property},state:'stBY4M1',insideLoop:true,index:"" +iitrvw});
ec('article');
}
let elgsOMR = eo('div','jWFf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elZ_8fb = eo('button','nXsf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else { 
let elB70Aw = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let el3JMCv = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });