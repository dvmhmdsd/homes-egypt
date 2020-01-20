_Component({
                selector: 'properties-list',
                c: 'PropertiesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loading','properties','propertiesToShow','viewMore'],
                children: {cnzGDdwpD:'loading',c7VBP4Che:'property-card'},
                render: function (component) {
                    let elCj0Ut = eo('section',null,null,`class`,`properties p-4`);
let elQ7Kcc = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndPnTf = component.loading;
this.setState('stJ_EYU', cndPnTf);
let cndbR9b = !(cndPnTf);
this.setState('str_QLW', cndbR9b);
if (cndPnTf) { 
let elrCba7 = eo('div','4Y1f',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpINJv = this._lc('cnzGDdwpD', {parent:component,state:'stJ_EYU'});
ec('div');
}else { 
let cndngF4 = ! Is.empty(component.properties);
this.setState('stIFb7J', cndngF4);
let cnddvZD = !(cndngF4);
this.setState('stSWW0D', cnddvZD);
if (cndngF4) { 
let elxpnQG = eo('div','8f_f',null,`class`,`properties-grid d-flex flex-wrap justify-content-between`);
for (let i in component.propertiesToShow) {
let property = component.propertiesToShow[i]; 
 let iivK6t = '932oRJo' + i;
let el31JQd = eo('article','lJ8mjN3NTwTj' + i+iivK6t,null,`class`,`property-item col-lg-4 col-md-6 col-sm-12`);
let cmpcqyC = this._lc('c7VBP4Che', {parent:component,props:{property:property},state:'stIFb7J',insideLoop:true,index:"" +iivK6t});
ec('article');
}
let elPl5Yz = eo('div','kOvf',null,`class`,`d-block text-center`,`style`,`width: 100%;`);
let elr366L = eo('button','QWnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewMore($el)}]},`class`,`btn-action view-properties-btn`);
text(`View More`);
ec('button');
ec('div');
ec('div');
}else { 
let el1bJHj = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let el4TJhU = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });