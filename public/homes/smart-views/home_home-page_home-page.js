_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['searchForm','activateType','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {cExELRx53:'layout'},
                render: function (component) {
                    let cmpThOs = this._lc('cExELRx53', {parent:component,content:(layout) => {let elw_fwi = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let ele245_ = eo('div',null,null,`class`,`container`);
let elcTElx = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiRmWn = 'hfa0HRs' + i;
let elGiUyT = eo('button','DfQonHDazt7Y' + i+iiRmWn,null, eventListeners, {onclick:[function(e) {var $el = this;component.activateType($el, type)}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);
text( type.label );
ec('button');
}
ec('section');
let elXzK9p = eo('section',null,null,`class`,`search-form`);
let elpx_y4 = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iiQROK = 'WzStDkY' + i;
let elJBXCm = eo('li','EBV_ccI4AZ12' + i+iiQROK,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions.push(region);}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cnd8NVL = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stlX91G', cnd8NVL);
if (cnd8NVL) { 
let elMV_vV = eo('form','EJMf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elMV_vV.formHandler) {
                    window.cfrmdlr = elMV_vV.formHandler = new FormHandler(elMV_vV, component);
                } else {
                    window.cfrmdlr = elMV_vV.formHandler;
                }
            let elLYlQX = eo('div','SHmf',null,`class`,`form-group col-md-7 col-xs-12`);
let elRN0Tm = ev('input','7gnf',null,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elxH8Ns = eo('datalist','00Uf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiEezX = 'c7cW3Ml' + i;
let elACZyo = eo('option','bOgIU5OL7k64' + i+iiEezX,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elA0VMi = eo('div','LKRf',null,`class`,`form-group col-md-5 col-xs-12`);
let elVK0T5 = ev('input','vZ0f',null,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elXXxyv = eo('div','9y3f',null,`class`,`form-group col-md-3 col-xs-12`);
let elNhPBH = ev('input','97Pf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el7bePM = eo('datalist','n8Nf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiSvRz = 't0PxqUg' + i;
let elACy_9 = eo('option','qMCw06IvRoyZ' + i+iiSvRz,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elRyohT = eo('div','fLCf',null,`class`,`form-group col-md-3 col-xs-12`);
let elGkuE5 = ev('input','Cyjf',null,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elbUzTh = eo('datalist','xE2f',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iih3nA = 'aelP0Sb' + i;
let elr9P7C = eo('option','k6t12uUW7cpz' + i+iih3nA,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let ela7RPx = eo('div','McKf',null,`class`,`form-group col-md-3 col-xs-12`);
let ellssWZ = ev('input','Bovf',null,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elcXYBG = eo('datalist','e1Sf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiJmf0 = 'OrvASPb' + i;
let elCiG6J = eo('option','4XubZCdci6hA' + i+iiJmf0,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elgGa2h = eo('div','4FVf',null,`class`,`form-group col-md-3 col-xs-12`);
let elmx3BI = ev('input','v50f',null,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let el90XJp = eo('datalist','EvIf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iitd42 = 'QkaCjuV' + i;
let elkKP9p = eo('option','HJw4xT9PWpXN' + i+iitd42,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elYh0rX = eo('div','K_Uf',null,`class`,`form-group col-md-3 col-xs-12`);
let eluqJCs = ev('input','iOrf',null,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elyyG10 = eo('div','U_Tf',null,`class`,`form-group col-md-3 col-xs-12`);
let el4QoaV = ev('input','c5Af',null,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndzuM2 = component.searchForm.chosenRegions.length > 0;
this.setState('steLhhy', cndzuM2);
if (cndzuM2) { 
let ely7QhT = eo('div','jhCf',null,`class`,`form-group col-12`);
let elLCcqK = eo('ul','DRWf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegions) {
let region = component.searchForm.chosenRegions[index]; 
 let iiU44_ = 'LTnwxee' + index;
let eli89VV = eo('li','ypRzxg4Tyj5c' + index+iiU44_,null,`class`,`chosen-region-item`);
text(region.name);
let el8NQrl = eo('i','c0Vff'+iiU44_,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elaqI5h = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elqGExz = ev('input',null,null,`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elupBxG = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cnd96u4 = component.searchForm.type == 'commercial';
this.setState('stfI6Gc', cnd96u4);
if (cnd96u4) { 
let elNny9h = eo('form','WIbf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elNny9h.formHandler) {
                    window.cfrmdlr = elNny9h.formHandler = new FormHandler(elNny9h, component);
                } else {
                    window.cfrmdlr = elNny9h.formHandler;
                }
            let el7ctDR = eo('div','OeBf',null,`class`,`form-group col-md-7 col-xs-12`);
let elUGG3d = ev('input','6VNf',null,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el81_Cp = eo('datalist','bzNf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiJPt2 = 'g3nYH_f' + i;
let elwrGti = eo('option','Nr7I0Wuh7Bpe' + i+iiJPt2,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elLwSW_ = eo('div','w9sf',null,`class`,`form-group col-md-5 col-xs-12`);
let elml2KI = ev('input','1fxf',null,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elhG8Kj = eo('div','8epf',null,`class`,`form-group col-md-3 col-xs-12`);
let elgok7N = ev('input','55Bf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elMNPgD = eo('datalist','pcRf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iinQaO = 'JdFoOlO' + i;
let elQvNGn = eo('option','KVpHtT9T3FQE' + i+iinQaO,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elsQHzA = eo('div','gm6f',null,`class`,`form-group col-md-2 col-xs-12`);
let elm_bIL = ev('input','HEwf',null,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let el1C1Z8 = eo('datalist','bzcf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iilnCR = 'jvUdHX9' + i;
let elflekf = eo('option','AQvgfoli6Jju' + i+iilnCR,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elrSmyw = eo('div','hnmf',null,`class`,`form-group col-md-3 col-xs-12`);
let elZ2Co7 = ev('input','y4of',null,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let el5UfmS = eo('datalist','5x4f',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iie_RB = 'bTW5oda' + i;
let el5P212 = eo('option','0E_pU5CSc200' + i+iie_RB,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elIumVx = eo('div','pOpf',null,`class`,`form-group col-md-2 col-xs-12`);
let elHJu0K = ev('input','ajdf',null,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elvvmH2 = eo('div','Kh5f',null,`class`,`form-group col-md-2 col-xs-12`);
let elmGIEo = ev('input','3QLf',null,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndrY4x = component.searchForm.chosenRegions.length > 0;
this.setState('stHhvmr', cndrY4x);
if (cndrY4x) { 
let elv1YCZ = eo('div','TIzf',null,`class`,`form-group col-12`);
let elZXqLs = eo('ul','qmqf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegions) {
let region = component.searchForm.chosenRegions[index]; 
 let iid1EX = 'zNhcaxa' + index;
let eltKuE0 = eo('li','QQ3N1Hp5zFIG' + index+iid1EX,null,`class`,`chosen-region-item`);
text(region.name);
let ela3Que = eo('i','umHff'+iid1EX,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elRoItp = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elNXJ0J = ev('input',null,null,`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elUqOiQ = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndOa4h = component.searchForm.type == 'new_homes';
this.setState('sty3GQt', cndOa4h);
if (cndOa4h) { 
let elu_B6a = eo('form','J0xf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elu_B6a.formHandler) {
                    window.cfrmdlr = elu_B6a.formHandler = new FormHandler(elu_B6a, component);
                } else {
                    window.cfrmdlr = elu_B6a.formHandler;
                }
            let elYA54V = eo('div','LX6f',null,`class`,`form-group col-md-7 col-xs-12`);
let elWf5iP = ev('input','gyKf',null,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let el04O06 = eo('datalist','OyEf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let ii4x44 = 'WdQLnfL' + i;
let el9qNGw = eo('option','afCCwYBRiDIL' + i+ii4x44,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el3nWBg = eo('div','2jvf',null,`class`,`form-group col-md-5 col-xs-12`);
let elX7gZl = ev('input','Aw4f',null,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elt44zd = eo('div','jJKf',null,`class`,`form-group col-md-3 col-xs-12`);
let elURbPr = ev('input','rwMf',null,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elHwx5r = eo('datalist','1Lwf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let iiP1au = 'G9XiEBb' + i;
let el5Jnuz = eo('option','YzD65DXDthry' + i+iiP1au,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elMmOZg = eo('div','ocLf',null,`class`,`form-group col-md-2 col-xs-12`);
let elaZ5nL = ev('input','ZI5f',null,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elWb6N4 = eo('datalist','UY5f',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iivfRZ = 'KrVpI5t' + i;
let elVk3VI = eo('option','zma9Z7VuNZcd' + i+iivfRZ,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elXPehF = eo('div','gIXf',null,`class`,`form-group col-md-3 col-xs-12`);
let elP8CKP = ev('input','Kf7f',null,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let el2mwNr = eo('datalist','THAf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iihk0y = 'SRJAunv' + i;
let elQuE5a = eo('option','lQ2l4R4ZEHZz' + i+iihk0y,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elM0O0F = eo('div','riYf',null,`class`,`form-group col-md-2 col-xs-12`);
let el2XcpF = ev('input','abTf',null,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elalxm0 = eo('div','1uGf',null,`class`,`form-group col-md-2 col-xs-12`);
let el5IbSY = ev('input','f31f',null,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndS9MY = component.searchForm.chosenRegions.length > 0;
this.setState('stPR968', cndS9MY);
if (cndS9MY) { 
let elKQd5n = eo('div','Mw7f',null,`class`,`form-group col-12`);
let elJtUSH = eo('ul','bWwf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegions) {
let region = component.searchForm.chosenRegions[index]; 
 let iidtta = '3CFm9df' + index;
let elIdK9F = eo('li','8oka2Ej0EPP6' + index+iidtta,null,`class`,`chosen-region-item`);
text(region.name);
let elHGrve = eo('i','8nWff'+iidtta,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elhFkDX = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elyaA23 = ev('input',null,null,`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elrpkCO = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');
let elWWVBO = eo('section',null,null,`class`,`properties p-4`);
let elIrI0B = eo('h2',null,null,`class`,`properties-heading`);
text(`Properties`);
ec('h2');
let elibqSH = eo('div',null,null,`class`,`container`);
let el0AaBj = eo('div',null,null,`class`,`properties-grid d-flex flex-wrap justify-content-around`);
let elAhgio = eo('article',null,null,`class`,`property-item col-lg-4 col-sm-6 col-xs-12`);
let el71isu = eo('header',null,null,`class`,`property-header`);
let elQbyXZ = eo('figure',null,null,`class`,`property-img`);
let elHcO3d = eo('a',null,null,`href`,`/`);
let elDIJil = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('a');
ec('figure');
let elDzDwR = eo('section',null,null,`class`,`property-metadata`);
let eliuQ36 = eo('p',null,null,`class`,`property-location absolute-position`);
text(`Cairo`);
ec('p');
let elzDi6J = eo('p',null,null,`class`,`property-type absolute-position`);
text(`Rent`);
ec('p');
let eliFZN3 = eo('p',null,null,`class`,`property-price absolute-position`);
text(`1,800 USD`);
ec('p');
ec('section');
ec('header');
let elGfY7t = eo('main',null,null,`class`,`property-body`);
let elxM2t6 = eo('a',null,null,`href`,`/`);
let elQ_0MA = eo('h3',null,null,`class`,`property-name`);
text(`Furnished Office For Rent In Garden City`);
ec('h3');
ec('a');
let elMD0bw = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elTL74x = eo('div',null,null,`class`,`property-rooms`);
let elY3Clj = eo('span',null,null,`class`,`property-beds`);
text(`2`);
ec('span');
let elIoQEb = eo('span',null,null,`class`,`property-bath`);
text(`2`);
ec('span');
ec('div');
let elRxETG = eo('p',null,null,`class`,`property-id`);
text(`#2345`);
ec('p');
ec('div');
ec('main');
ec('article');
let eluebto = eo('article',null,null,`class`,`property-item col-lg-4 col-sm-6 col-xs-12`);
let el_O5vH = eo('header',null,null,`class`,`property-header`);
let elaPUda = eo('figure',null,null,`class`,`property-img`);
let elMOp3R = eo('a',null,null,`href`,`/`);
let eltlLrg = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('a');
ec('figure');
let eltPvWr = eo('section',null,null,`class`,`property-metadata`);
let elDMKdt = eo('p',null,null,`class`,`property-location absolute-position`);
text(`Cairo`);
ec('p');
let elmeHyz = eo('p',null,null,`class`,`property-type absolute-position`);
text(`Rent`);
ec('p');
let el_yhJn = eo('p',null,null,`class`,`property-price absolute-position`);
text(`1,800 USD`);
ec('p');
ec('section');
ec('header');
let elND5Af = eo('main',null,null,`class`,`property-body`);
let elgTsLb = eo('a',null,null,`href`,`/`);
let elPQk2j = eo('h3',null,null,`class`,`property-name`);
text(`Furnished Office For Rent In Garden City`);
ec('h3');
ec('a');
let el6IgGY = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let el8AgCi = eo('div',null,null,`class`,`property-rooms`);
let el5Hjmc = eo('span',null,null,`class`,`property-beds`);
text(`2`);
ec('span');
let elrjc4T = eo('span',null,null,`class`,`property-bath`);
text(`2`);
ec('span');
ec('div');
let elhDSOv = eo('p',null,null,`class`,`property-id`);
text(`#2345`);
ec('p');
ec('div');
ec('main');
ec('article');
let el8bR6Y = eo('article',null,null,`class`,`property-item col-lg-4 col-sm-6 col-xs-12`);
let elDgirS = eo('header',null,null,`class`,`property-header`);
let elPNgV7 = eo('figure',null,null,`class`,`property-img`);
let eloxMht = eo('a',null,null,`href`,`/`);
let elpntji = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('a');
ec('figure');
let elh2Ub8 = eo('section',null,null,`class`,`property-metadata`);
let elGnTFu = eo('p',null,null,`class`,`property-location absolute-position`);
text(`Cairo`);
ec('p');
let el7wGrU = eo('p',null,null,`class`,`property-type absolute-position`);
text(`Rent`);
ec('p');
let elQkXVh = eo('p',null,null,`class`,`property-price absolute-position`);
text(`1,800 USD`);
ec('p');
ec('section');
ec('header');
let elkhCln = eo('main',null,null,`class`,`property-body`);
let el5Pv8i = eo('a',null,null,`href`,`/`);
let eldZhM7 = eo('h3',null,null,`class`,`property-name`);
text(`Furnished Office For Rent In Garden City`);
ec('h3');
ec('a');
let el6UHFU = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elD91eB = eo('div',null,null,`class`,`property-rooms`);
let elreVfi = eo('span',null,null,`class`,`property-beds`);
text(`2`);
ec('span');
let elOOX_1 = eo('span',null,null,`class`,`property-bath`);
text(`2`);
ec('span');
ec('div');
let elgrax9 = eo('p',null,null,`class`,`property-id`);
text(`#2345`);
ec('p');
ec('div');
ec('main');
ec('article');
let elADfSO = eo('article',null,null,`class`,`property-item col-lg-4 col-sm-6 col-xs-12`);
let el9wlk5 = eo('header',null,null,`class`,`property-header`);
let elbLLws = eo('figure',null,null,`class`,`property-img`);
let elKGdup = eo('a',null,null,`href`,`/`);
let elPipyN = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('a');
ec('figure');
let elDRRtZ = eo('section',null,null,`class`,`property-metadata`);
let el8bNvv = eo('p',null,null,`class`,`property-location absolute-position`);
text(`Cairo`);
ec('p');
let elauHuA = eo('p',null,null,`class`,`property-type absolute-position`);
text(`Rent`);
ec('p');
let elPft8L = eo('p',null,null,`class`,`property-price absolute-position`);
text(`1,800 USD`);
ec('p');
ec('section');
ec('header');
let el5mK_s = eo('main',null,null,`class`,`property-body`);
let elwlBSn = eo('a',null,null,`href`,`/`);
let elnY5E3 = eo('h3',null,null,`class`,`property-name`);
text(`Furnished Office For Rent In Garden City`);
ec('h3');
ec('a');
let ell2Tkv = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let el36BWP = eo('div',null,null,`class`,`property-rooms`);
let el9Z3hp = eo('span',null,null,`class`,`property-beds`);
text(`2`);
ec('span');
let elVrI_t = eo('span',null,null,`class`,`property-bath`);
text(`2`);
ec('span');
ec('div');
let elv7OB6 = eo('p',null,null,`class`,`property-id`);
text(`#2345`);
ec('p');
ec('div');
ec('main');
ec('article');
let eltfr9z = eo('article',null,null,`class`,`property-item col-lg-4 col-sm-6 col-xs-12`);
let elyo6jV = eo('header',null,null,`class`,`property-header`);
let el24l0g = eo('figure',null,null,`class`,`property-img`);
let elR1rEv = eo('a',null,null,`href`,`/`);
let el2xhN5 = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('a');
ec('figure');
let elQ8sbW = eo('section',null,null,`class`,`property-metadata`);
let elolR4P = eo('p',null,null,`class`,`property-location absolute-position`);
text(`Cairo`);
ec('p');
let el213bE = eo('p',null,null,`class`,`property-type absolute-position`);
text(`Rent`);
ec('p');
let elrQxbs = eo('p',null,null,`class`,`property-price absolute-position`);
text(`1,800 USD`);
ec('p');
ec('section');
ec('header');
let elxYW72 = eo('main',null,null,`class`,`property-body`);
let el9mBUh = eo('a',null,null,`href`,`/`);
let elTNu83 = eo('h3',null,null,`class`,`property-name`);
text(`Furnished Office For Rent In Garden City`);
ec('h3');
ec('a');
let el2i1Km = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elS92ep = eo('div',null,null,`class`,`property-rooms`);
let el3oKmv = eo('span',null,null,`class`,`property-beds`);
text(`2`);
ec('span');
let elHXadE = eo('span',null,null,`class`,`property-bath`);
text(`2`);
ec('span');
ec('div');
let elg6L7X = eo('p',null,null,`class`,`property-id`);
text(`#2345`);
ec('p');
ec('div');
ec('main');
ec('article');
let elL4imv = eo('article',null,null,`class`,`property-item col-lg-4 col-sm-6 col-xs-12`);
let elWwRG5 = eo('header',null,null,`class`,`property-header`);
let ele01Pn = eo('figure',null,null,`class`,`property-img`);
let elby13B = eo('a',null,null,`href`,`/`);
let el9SIwD = ev('img',null,null,`src`,`/public/homes/images/logo.png`,`alt`,``);
ec('a');
ec('figure');
let el7ngEx = eo('section',null,null,`class`,`property-metadata`);
let elL55eM = eo('p',null,null,`class`,`property-location absolute-position`);
text(`Cairo`);
ec('p');
let eljxOox = eo('p',null,null,`class`,`property-type absolute-position`);
text(`Rent`);
ec('p');
let elUly5E = eo('p',null,null,`class`,`property-price absolute-position`);
text(`1,800 USD`);
ec('p');
ec('section');
ec('header');
let elw6ND2 = eo('main',null,null,`class`,`property-body`);
let elinUwQ = eo('a',null,null,`href`,`/`);
let elDA9Zx = eo('h3',null,null,`class`,`property-name`);
text(`Furnished Office For Rent In Garden City`);
ec('h3');
ec('a');
let elRn5xH = eo('div',null,null,`class`,`property-numbers d-flex justify-content-between`);
let elLU5aN = eo('div',null,null,`class`,`property-rooms`);
let eluki6C = eo('span',null,null,`class`,`property-beds`);
text(`2`);
ec('span');
let elzmTnM = eo('span',null,null,`class`,`property-bath`);
text(`2`);
ec('span');
ec('div');
let elbALRn = eo('p',null,null,`class`,`property-id`);
text(`#2345`);
ec('p');
ec('div');
ec('main');
ec('article');
ec('div');
ec('div');
let elqDN0A = eo('button',null,null,`class`,`btn-action view-properties-btn`);
text(`View All`);
ec('button');
ec('section');
}});

                    this.isReadyToGo();
                }
        });