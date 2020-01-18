_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','activateType','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes','loading','properties'],
                children: {cuTuBhCj2:'loading',c8iE0s6jA:'loading',c4rKtAILh:'flk-slider',cHTC_xkoa:'layout'},
                render: function (component) {
                    let cmpPYuq = this._lc('cHTC_xkoa', {parent:component,content:(layout) => {let cndHHTY = component.loadingSearch;
this.setState('stwIS7T', cndHHTY);
if (cndHHTY) { 
let elUWq3r = eo('div','Ms6f',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpsX5s = this._lc('cuTuBhCj2', {parent:component,parentTop:layout,state:'stwIS7T'});
ec('div');
}let elxbIW0 = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let elfoJnr = eo('div',null,null,`class`,`container`);
let elqADun = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iivObF = 'Pb87ILZ' + i;
let el4mypO = eo('button','MLZM0ceU5O2z' + i+iivObF,null, eventListeners, {onclick:[function(e) {var $el = this;component.activateType($el, type)}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);
text( type.label );
ec('button');
}
ec('section');
let eluTb8Z = eo('section',null,null,`class`,`search-form`);
let elzE9GC = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iirXv0 = 'SEvMf32' + i;
let elxwcB6 = eo('li','4aSb2gOubJ53' + i+iirXv0,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cndA4Gx = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stMWZSr', cndA4Gx);
if (cndA4Gx) { 
let elng5Zp = eo('form','ulqf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elng5Zp.formHandler) {
                    window.cfrmdlr = elng5Zp.formHandler = new FormHandler(elng5Zp, component);
                } else {
                    window.cfrmdlr = elng5Zp.formHandler;
                }
            let elZKc8C = eo('div','raZf',null,`class`,`form-group col-md-7 col-xs-12`);
let elwaRNN = ev('input','igsf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elsCLQ1 = eo('datalist','4Z6f',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiMjO1 = 'bvXz70R' + i;
let elQmDr9 = eo('option','QI_3ZVG5siEe' + i+iiMjO1,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elk4HIw = eo('div','JeJf',null,`class`,`form-group col-md-5 col-xs-12`);
let el5UgeY = ev('input','DIMf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let el25FNE = eo('div','pO6f',null,`class`,`form-group col-md-3 col-xs-12`);
let elWuUFM = ev('input','CU3f',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let els2Y43 = eo('datalist','WoPf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiX5C_ = 'AeN25QQ' + i;
let elFEhNJ = eo('option','CkjxKHo35HTP' + i+iiX5C_,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elwxFD5 = eo('div','R57f',null,`class`,`form-group col-md-3 col-xs-12`);
let elVMjOD = ev('input','6ukf',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elOWU_U = eo('datalist','z7Sf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiSIMi = 'Rptofvc' + i;
let elXQZm_ = eo('option','qoq_k3_5IvtY' + i+iiSIMi,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elOWzfk = eo('div','xmwf',null,`class`,`form-group col-md-3 col-xs-12`);
let el_kaCK = ev('input','qkBf',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elLN74k = eo('datalist','YGMf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iirtP3 = 'I0eiEGx' + i;
let elQjoxd = eo('option','JZdhv7gPYjwb' + i+iirtP3,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elr3pnf = eo('div','k7_f',null,`class`,`form-group col-md-3 col-xs-12`);
let elRh6mM = ev('input','0Sif',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let eloszD0 = eo('datalist','tBhf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiSGLJ = 'YHK_1cB' + i;
let elECQh4 = eo('option','PQ8z9z2iKtXm' + i+iiSGLJ,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elpd1Wr = eo('div','qhkf',null,`class`,`form-group col-md-3 col-xs-12`);
let eleKqzv = ev('input','I6xf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elA0OxC = eo('div','HmJf',null,`class`,`form-group col-md-3 col-xs-12`);
let elHmf2m = ev('input','YFsf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndK1_E = component.searchForm.chosenRegions.length > 0;
this.setState('stsTYmk', cndK1_E);
if (cndK1_E) { 
let elvss_m = eo('div','KNRf',null,`class`,`form-group col-12`);
let el42YSj = eo('ul','8azf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiwmpe = 'FHgqqbB' + index;
let elsW2n4 = eo('li','D5BBZJXnnpMs' + index+iiwmpe,null,`class`,`chosen-region-item`);
text(region);
let eln7vX5 = eo('i','c7Qff'+iiwmpe,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elgst_v = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el9NUHa = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elgtIkf = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndh00W = component.searchForm.type == 'commercial';
this.setState('st9T02L', cndh00W);
if (cndh00W) { 
let el7MUpP = eo('form','InHf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! el7MUpP.formHandler) {
                    window.cfrmdlr = el7MUpP.formHandler = new FormHandler(el7MUpP, component);
                } else {
                    window.cfrmdlr = el7MUpP.formHandler;
                }
            let elPHK9p = eo('div','z4Nf',null,`class`,`form-group col-md-7 col-xs-12`);
let elRLCWa = ev('input','0gFf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el3Xjho = eo('datalist','5Twf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iinm2v = 'nsrGkNC' + i;
let elhoF1o = eo('option','O0Y4_AZo9nDJ' + i+iinm2v,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el3zKLh = eo('div','uGTf',null,`class`,`form-group col-md-5 col-xs-12`);
let ela4vf8 = ev('input','y7Gf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let el9ZE4o = eo('div','ZrUf',null,`class`,`form-group col-md-3 col-xs-12`);
let el6q3HA = ev('input','Xx8f',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elNppQQ = eo('datalist','RI5f',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiYE0j = 'p5lFxMa' + i;
let elV0gAx = eo('option','CtbEPa7Lpb3Z' + i+iiYE0j,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elHQql2 = eo('div','Qg6f',null,`class`,`form-group col-md-2 col-xs-12`);
let elmRQ_z = ev('input','eoyf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let el2PCC8 = eo('datalist','1vXf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiyXBO = '43Egc5I' + i;
let elA02MS = eo('option','jw3wBEJmev_j' + i+iiyXBO,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elRBvXV = eo('div','Frbf',null,`class`,`form-group col-md-3 col-xs-12`);
let els1bHA = ev('input','tzCf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let eliJfmB = eo('datalist','rJtf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiqdWk = 'guE3Wgj' + i;
let el4d7Oi = eo('option','KMYXkfnu4h7j' + i+iiqdWk,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let el_3ACw = eo('div','Mtif',null,`class`,`form-group col-md-2 col-xs-12`);
let els8BDk = ev('input','01Ef',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elfam34 = eo('div','BJSf',null,`class`,`form-group col-md-2 col-xs-12`);
let el8atjR = ev('input','hpLf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndQToS = component.searchForm.chosenRegions.length > 0;
this.setState('stUO88G', cndQToS);
if (cndQToS) { 
let elAchq8 = eo('div','3wCf',null,`class`,`form-group col-12`);
let elDmpHM = eo('ul','d9Rf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiS9W1 = 'Z6KPmyE' + index;
let elLxT2N = eo('li','JSxym_f84EqI' + index+iiS9W1,null,`class`,`chosen-region-item`);
text(region);
let el6LzZk = eo('i','sluff'+iiS9W1,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elzOx3T = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elM8LaS = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegionsNames = []; component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elC4X0H = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndwjYG = component.searchForm.type == 'new-homes';
this.setState('stmMZux', cndwjYG);
if (cndwjYG) { 
let elp2_8V = eo('form','6p8f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elp2_8V.formHandler) {
                    window.cfrmdlr = elp2_8V.formHandler = new FormHandler(elp2_8V, component);
                } else {
                    window.cfrmdlr = elp2_8V.formHandler;
                }
            let elnwIGb = eo('div','_7Vf',null,`class`,`form-group col-md-7 col-xs-12`);
let el0TiZp = ev('input','yQ6f',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elSlwMl = eo('datalist','ftHf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iixIFy = 'iKfkJ7d' + i;
let elibfzB = eo('option','TbjrUxHr1qcx' + i+iixIFy,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el6IdhW = eo('div','P9df',null,`class`,`form-group col-md-5 col-xs-12`);
let elPLLQM = ev('input','XJQf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elpBMwl = eo('div','N9Mf',null,`class`,`form-group col-md-3 col-xs-12`);
let elLQ7aA = ev('input','qsSf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elAwRDs = eo('datalist','Kayf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let ii4EdG = 'aKdqNGc' + i;
let el2hSvQ = eo('option','bUTXESXaSpZX' + i+ii4EdG,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el7AJcb = eo('div','mn7f',null,`class`,`form-group col-md-2 col-xs-12`);
let eloFXGj = ev('input','BWWf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elYqtT5 = eo('datalist','KFrf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiT0Uw = 'GQNr4o7' + i;
let elkh0Ea = eo('option','49fXK8FApR31' + i+iiT0Uw,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elYp3cc = eo('div','PFNf',null,`class`,`form-group col-md-3 col-xs-12`);
let elEa7Ty = ev('input','ikrf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elDix7h = eo('datalist','lGUf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiUF0P = 'Cg2DFzB' + i;
let elB5Krt = eo('option','Hbb2TCvDd8Y8' + i+iiUF0P,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elqUQfx = eo('div','Epyf',null,`class`,`form-group col-md-2 col-xs-12`);
let elhcbyP = ev('input','wCvf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elbcSvX = eo('div','Kbsf',null,`class`,`form-group col-md-2 col-xs-12`);
let el023II = ev('input','Tlzf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndWJI9 = component.searchForm.chosenRegions.length > 0;
this.setState('st9gmlK', cndWJI9);
if (cndWJI9) { 
let el6OKLT = eo('div','6BGf',null,`class`,`form-group col-12`);
let elGUmZo = eo('ul','uGpf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiBEo9 = 'GBOXwvH' + index;
let elubLn0 = eo('li','Zw5k2vgJe8hI' + index+iiBEo9,null,`class`,`chosen-region-item`);
text(region);
let elMuhiE = eo('i','ssQff'+iiBEo9,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elIuRkG = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elCIH_h = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []; component.searchForm.chosenRegionsNames = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elmMmGR = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');
let el2rOCU = eo('section',null,null,`class`,`properties p-4`);
let elZ7Yxw = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cnd8PUm = component.loading;
this.setState('stCQIYy', cnd8PUm);
let cndjSQk = !component.loading;
this.setState('stFVf93', cndjSQk);
if (cnd8PUm) { 
let elH_PXv = eo('div','q1Wf',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpBjC0 = this._lc('c8iE0s6jA', {parent:component,parentTop:layout,state:'stCQIYy'});
ec('div');
}let cndrqP8 = !component.loading && component.properties && component.properties.length > 0;
this.setState('st16geL', cndrqP8);
let cnd7T4M = cndjSQk;
this.setState('stbrqhq', cnd7T4M);
if (cndrqP8) { 
let elNhnfj = eo('div','y25f',null,`class`,`properties-grid d-flex flex-wrap`);
for (let i in component.properties) {
let property = component.properties[i]; 
 let ii2MGH = 'K6uuTQv' + i;
let eloswnF = eo('article','Wh29Wb1NDSRy' + i+ii2MGH,null,`class`,`property-item col-lg-3 col-sm-12`);
let eloBSH_ = eo('header','GOvff'+ii2MGH,null,`class`,`property-header`);
let el1skPZ = eo('figure','Nbyff'+ii2MGH,null,`class`,`property-img`);
let elQKG1s = eo('a','kIGff'+ii2MGH,null,`href`,`/properties/${ property.id }/${
              property.name.split(' ').join('-')
            }`);
let cmpwqYt = this._lc('c4rKtAILh', {parent:component,parentTop:layout,props:{slides:[property.images]},state:'st16geL',insideLoop:true,index:"" +ii2MGH});
ec('a');
ec('figure');
let elHykQk = eo('section','G0Vff'+ii2MGH,null,`class`,`property-metadata`);
let elfMG19 = eo('p','fcJff'+ii2MGH,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let elzP4Pl = eo('p','7Rlff'+ii2MGH,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let el65nKu = eo('p','Imdff'+ii2MGH,null,`class`,`property-price absolute-position`);
text(`${ property.price } ${ property.currency }`);
ec('p');
ec('section');
ec('header');
let elEJ5Rj = eo('main','o4dff'+ii2MGH,null,`class`,`property-body`);
let elvcQ5r = eo('a','SuYff'+ii2MGH,null,`href`,`/properties/${ property.id }/${
            property.name.split(' ').join('-')
          }`);
let elhs29S = eo('h3','p1Eff'+ii2MGH,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let elRCr69 = eo('div','VAdff'+ii2MGH,null,`class`,`property-numbers d-flex justify-content-between`);
let eluLfXI = eo('div','qOsff'+ii2MGH,null,`class`,`property-rooms`);
let elF0PQn = eo('span','BPpff'+ii2MGH,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let elWWoWI = eo('i','GNGff'+ii2MGH,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let eljhBjj = eo('span','ItWff'+ii2MGH,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elxaaIH = eo('i','oYAff'+ii2MGH,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elr1qMv = eo('p','xfJff'+ii2MGH,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('article');
}
ec('div');
}else if (cnd7T4M) { 
let elVaCkX = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let el_mrYC = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');
}});

                    this.isReadyToGo();
                }
        });