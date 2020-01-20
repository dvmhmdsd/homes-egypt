_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {cf5ky2qS_:'loading'},
                render: function (component) {
                    let elTNwfd = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndwnvO = component.loadingSearch;
this.setState('stc209U', cndwnvO);
if (cndwnvO) { 
let elGk_KU = eo('div','NRLf',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpqTJl = this._lc('cf5ky2qS_', {parent:component,state:'stc209U'});
ec('div');
}let el1Wi_Z = eo('div',null,null,`class`,`container`);
let elSvUhC = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiK69n = 'iThA5Oa' + i;
let elrf_rl = eo('button','TNlYrutms0yH' + i+iiK69n,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, elrf_rl);
                elrf_rl.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in elrf_rl.cls) {
                elrf_rl.classList.toggle(className, elrf_rl.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let eluPgcS = eo('section',null,null,`class`,`search-form`);
let el3eNKx = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iiHZmG = '8VdJviz' + i;
let elNXrtC = eo('li','ZiiSJ3wrjtjw' + i+iiHZmG,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cndA31D = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stfnZHH', cndA31D);
if (cndA31D) { 
let el_f7kE = eo('form','CELf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! el_f7kE.formHandler) {
                    window.cfrmdlr = el_f7kE.formHandler = new FormHandler(el_f7kE, component);
                } else {
                    window.cfrmdlr = el_f7kE.formHandler;
                }
            let elFFEQz = eo('div','j7Vf',null,`class`,`form-group col-md-7 col-xs-12`);
let elQfMPf = ev('input','PdDf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elE2SPN = eo('datalist','6Xsf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iivrrn = '_9JUPqQ' + i;
let elNX3zq = eo('option','0RA15xZ_nUSH' + i+iivrrn,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el06UUu = eo('div','f71f',null,`class`,`form-group col-md-5 col-xs-12`);
let elJSHVs = ev('input','x04f',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elivsK9 = eo('div','rXPf',null,`class`,`form-group col-md-3 col-xs-12`);
let elr3LWF = ev('input','SqUf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el2zPc9 = eo('datalist','R_Bf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiaLAL = 'KlyLFUM' + i;
let elHRQzB = eo('option','VIGcaHpS0Uv2' + i+iiaLAL,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elu7MO0 = eo('div','NJ0f',null,`class`,`form-group col-md-3 col-xs-12`);
let elPBmqs = ev('input','aYhf',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let eloUAaw = eo('datalist','0E0f',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiXIZD = 'VtfeJiD' + i;
let elVysol = eo('option','qvr29JoiwAg7' + i+iiXIZD,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el_apsg = eo('div','9Y0f',null,`class`,`form-group col-md-3 col-xs-12`);
let el8CQf2 = ev('input','aa5f',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elQSDwc = eo('datalist','HYhf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiH3YZ = '1jCZhQT' + i;
let el3RRBs = eo('option','MsIQz_5VHnf4' + i+iiH3YZ,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elPp1te = eo('div','R2xf',null,`class`,`form-group col-md-3 col-xs-12`);
let el6ares = ev('input','frnf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elqwm10 = eo('datalist','gnqf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let ii99RP = 'Sa_36z3' + i;
let elUr0Oi = eo('option','CG1XQ77XHqTl' + i+ii99RP,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let el1Vo3k = eo('div','Pdwf',null,`class`,`form-group col-md-3 col-xs-12`);
let elae1Pk = ev('input','hnkf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elMryhN = eo('div','hj8f',null,`class`,`form-group col-md-3 col-xs-12`);
let elTQ3HY = ev('input','NdPf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndU5Qx = component.searchForm.chosenRegions.length > 0;
this.setState('st0Pjld', cndU5Qx);
if (cndU5Qx) { 
let elSoD7n = eo('div','2FQf',null,`class`,`form-group col-12`);
let elI1Tgj = eo('ul','BcCf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iipo6T = 'gI3pP2b' + index;
let elUD9zY = eo('li','tEgtMVy33DPz' + index+iipo6T,null,`class`,`chosen-region-item`);
text( region );
let elyV0QN = eo('i','_XPff'+iipo6T,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elRo7JA = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elSTWv4 = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elUjHKT = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndHE9E = component.searchForm.type == 'commercial';
this.setState('stL1Jpu', cndHE9E);
if (cndHE9E) { 
let elGrs9X = eo('form','32ff',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elGrs9X.formHandler) {
                    window.cfrmdlr = elGrs9X.formHandler = new FormHandler(elGrs9X, component);
                } else {
                    window.cfrmdlr = elGrs9X.formHandler;
                }
            let el8NUNd = eo('div','LFQf',null,`class`,`form-group col-md-7 col-xs-12`);
let el2utDX = ev('input','Ce2f',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elV4ljF = eo('datalist','z8uf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiFvQ6 = 'AH_CrAd' + i;
let elQwizb = eo('option','arIJKs_Q2Mju' + i+iiFvQ6,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elV5tRl = eo('div','Dutf',null,`class`,`form-group col-md-5 col-xs-12`);
let eljAH4b = ev('input','8Orf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elUZVRA = eo('div','ttwf',null,`class`,`form-group col-md-3 col-xs-12`);
let elmxLyd = ev('input','brPf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elzHyuX = eo('datalist','R3yf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiSW0L = 'qc18tA3' + i;
let elY2QN7 = eo('option','Qx4SMMGBECHU' + i+iiSW0L,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elw9mS2 = eo('div','6D1f',null,`class`,`form-group col-md-2 col-xs-12`);
let elFx3i9 = ev('input','juxf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elvPq37 = eo('datalist','FeCf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiCzWV = 'C7CbpR2' + i;
let el540vS = eo('option','Kp2kYVPB9QWB' + i+iiCzWV,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elEMEgV = eo('div','Z2af',null,`class`,`form-group col-md-3 col-xs-12`);
let el3QGV9 = ev('input','2YJf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elw2Mf3 = eo('datalist','6Xvf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiGYvM = 'vgbzmXw' + i;
let el3wEOu = eo('option','GwADzPOBC8mE' + i+iiGYvM,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elePxvF = eo('div','Wu7f',null,`class`,`form-group col-md-2 col-xs-12`);
let elpZgjt = ev('input','Qa0f',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elSN71o = eo('div','mKQf',null,`class`,`form-group col-md-2 col-xs-12`);
let eljMjfB = ev('input','HvEf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndU1yi = component.searchForm.chosenRegions.length > 0;
this.setState('stpIE_R', cndU1yi);
if (cndU1yi) { 
let elatlLc = eo('div','JoWf',null,`class`,`form-group col-12`);
let elyPhpp = eo('ul','jhUf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iitoSq = 'h3fmLny' + index;
let elFwQs8 = eo('li','H8QFuOYOEZjr' + index+iitoSq,null,`class`,`chosen-region-item`);
text( region );
let eliYnkB = eo('i','OXzff'+iitoSq,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elQJ_qf = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elKIgJu = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elCoZTs = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndipPv = component.searchForm.type == 'new-homes';
this.setState('stTf5eu', cndipPv);
if (cndipPv) { 
let eljhIsQ = eo('form','QySf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! eljhIsQ.formHandler) {
                    window.cfrmdlr = eljhIsQ.formHandler = new FormHandler(eljhIsQ, component);
                } else {
                    window.cfrmdlr = eljhIsQ.formHandler;
                }
            let elPYzqC = eo('div','TwDf',null,`class`,`form-group col-md-7 col-xs-12`);
let elkqqKa = ev('input','i7of',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elEGTba = eo('datalist','4CAf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iivaAZ = 'mbZboph' + i;
let elAXp7Y = eo('option','jiCPRW_TPzBN' + i+iivaAZ,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elXsvDG = eo('div','GIuf',null,`class`,`form-group col-md-5 col-xs-12`);
let elN09eP = ev('input','wjff',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elZjaqn = eo('div','hZjf',null,`class`,`form-group col-md-3 col-xs-12`);
let elcCqbh = ev('input','RyRf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let els4K6u = eo('datalist','Sgpf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let iiIJxZ = '8qFXgcX' + i;
let elyxxdj = eo('option','9WbNnTh_V0Uu' + i+iiIJxZ,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elod7O_ = eo('div','ELvf',null,`class`,`form-group col-md-2 col-xs-12`);
let el6Yv8W = ev('input','E3lf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elDPnQR = eo('datalist','JPhf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiiAto = '4zpHLeu' + i;
let elUUJ86 = eo('option','yYv13dC19u4_' + i+iiiAto,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el58caQ = eo('div','oUbf',null,`class`,`form-group col-md-3 col-xs-12`);
let elbDVUp = ev('input','8T5f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elUt2Bw = eo('datalist','5sff',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiNxrf = 'CjWZLVa' + i;
let elKAOUW = eo('option','CafkTmrODGT4' + i+iiNxrf,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elEF6DN = eo('div','FxMf',null,`class`,`form-group col-md-2 col-xs-12`);
let elbgKzo = ev('input','kHjf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elDppQ9 = eo('div','kCqf',null,`class`,`form-group col-md-2 col-xs-12`);
let elUmz1n = ev('input','aUrf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndYvg7 = component.searchForm.chosenRegions.length > 0;
this.setState('stzBOfc', cndYvg7);
if (cndYvg7) { 
let elqIycA = eo('div','LYKf',null,`class`,`form-group col-12`);
let elqFx3v = eo('ul','JYZf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiCEZR = 'x50c0Jj' + index;
let elBN_o7 = eo('li','Zy0AmNYmG3Xj' + index+iiCEZR,null,`class`,`chosen-region-item`);
text( region );
let elstpzT = eo('i','xosff'+iiCEZR,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let eliE0Uv = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elvn9hg = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elWJrmO = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });