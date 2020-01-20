_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {c_aebq5HN:'loading'},
                render: function (component) {
                    let el4yCZ2 = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndQENV = component.loadingSearch;
this.setState('stQkwD3', cndQENV);
if (cndQENV) { 
let elph02_ = eo('div','Y8Kf',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpWVgs = this._lc('c_aebq5HN', {parent:component,state:'stQkwD3'});
ec('div');
}let elWmCCQ = eo('div',null,null,`class`,`container`);
let elESfMr = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiQYrx = '9Q5uvjv' + i;
let elcJ3Mz = eo('button','QHHxO1N04fUQ' + i+iiQYrx,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, elcJ3Mz);
                elcJ3Mz.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in elcJ3Mz.cls) {
                elcJ3Mz.classList.toggle(className, elcJ3Mz.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let elUMUFb = eo('section',null,null,`class`,`search-form`);
let elU2bWm = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iiT1bT = '9_BDkVx' + i;
let elnA6Pg = eo('li','bqE6Hl4wHTZ4' + i+iiT1bT,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cndQ4OG = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stUH4XA', cndQ4OG);
if (cndQ4OG) { 
let elVjB2f = eo('form','NWkf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elVjB2f.formHandler) {
                    window.cfrmdlr = elVjB2f.formHandler = new FormHandler(elVjB2f, component);
                } else {
                    window.cfrmdlr = elVjB2f.formHandler;
                }
            let eln8bgB = eo('div','2onf',null,`class`,`form-group col-md-7 col-xs-12`);
let elzBGXM = ev('input','7oBf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let eldF21H = eo('datalist','XEsf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiiBts = 'lrYcgWx' + i;
let eleVL5H = eo('option','ter_jgHgxlcr' + i+iiiBts,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elyZ4pc = eo('div','Cj3f',null,`class`,`form-group col-md-5 col-xs-12`);
let elb_G4I = ev('input','cb2f',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let el1mRUq = eo('div','eU6f',null,`class`,`form-group col-md-3 col-xs-12`);
let eleae4N = ev('input','Airf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el9nvcC = eo('datalist','zbof',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiWGaN = 'VIyWPvW' + i;
let eliUPW0 = eo('option','kViO8KOX_GEX' + i+iiWGaN,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elXq27Z = eo('div','EEXf',null,`class`,`form-group col-md-3 col-xs-12`);
let elppVCQ = ev('input','YAgf',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elzjJH_ = eo('datalist','seBf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiY9nu = 'eyOj5hB' + i;
let elJOVFw = eo('option','whB_X9mxon3g' + i+iiY9nu,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elWvr7m = eo('div','2Zuf',null,`class`,`form-group col-md-3 col-xs-12`);
let elqCyzt = ev('input','9a3f',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elCns6W = eo('datalist','AsTf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iihU3a = 'AUEi6CS' + i;
let eluu3R9 = eo('option','hTgptTo9PNrc' + i+iihU3a,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elQ8kxc = eo('div','kR3f',null,`class`,`form-group col-md-3 col-xs-12`);
let elnDCJi = ev('input','T4df',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elOSUKg = eo('datalist','g0Rf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiDDFP = '4pLg6Qb' + i;
let elS80eP = eo('option','byKZfywaJkto' + i+iiDDFP,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elTi1Rw = eo('div','OTYf',null,`class`,`form-group col-md-3 col-xs-12`);
let elCW3oY = ev('input','Z_Jf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el1aNhs = eo('div','5rbf',null,`class`,`form-group col-md-3 col-xs-12`);
let elcI3ml = ev('input','kBQf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndSFvq = component.searchForm.chosenRegions.length > 0;
this.setState('stg9GaB', cndSFvq);
if (cndSFvq) { 
let elkAglF = eo('div','nFkf',null,`class`,`form-group col-12`);
let elTpUxU = eo('ul','Zjbf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iifMSh = '4l3M3Zd' + index;
let eleqSjY = eo('li','jP4neqU46ak3' + index+iifMSh,null,`class`,`chosen-region-item`);
text( region );
let elMCiOM = eo('i','2ypff'+iifMSh,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elCvCTI = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elOX74T = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elGAODs = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndWnZt = component.searchForm.type == 'commercial';
this.setState('stns5ro', cndWnZt);
if (cndWnZt) { 
let elk4uNd = eo('form','xBhf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elk4uNd.formHandler) {
                    window.cfrmdlr = elk4uNd.formHandler = new FormHandler(elk4uNd, component);
                } else {
                    window.cfrmdlr = elk4uNd.formHandler;
                }
            let elVwzRk = eo('div','08sf',null,`class`,`form-group col-md-7 col-xs-12`);
let elkG0Ko = ev('input','aaXf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elUBXWb = eo('datalist','Cyef',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiqgRA = 'pCqvy7Z' + i;
let elExuFW = eo('option','6ydTiZRVWav3' + i+iiqgRA,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let eleZVx6 = eo('div','XI4f',null,`class`,`form-group col-md-5 col-xs-12`);
let elXJn_x = ev('input','bq7f',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let eljiQ5e = eo('div','oFuf',null,`class`,`form-group col-md-3 col-xs-12`);
let elFBr7M = ev('input','5Xdf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el5Tc71 = eo('datalist','FNNf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiw6Vv = 'hSU_kFx' + i;
let elTOrlH = eo('option','8TwHYagEhIlh' + i+iiw6Vv,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elmT3YQ = eo('div','qdJf',null,`class`,`form-group col-md-2 col-xs-12`);
let elBcVoF = ev('input','qqbf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elo1ssX = eo('datalist','Ldyf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiXcqX = 'UTC0v1m' + i;
let el0FIvT = eo('option','FMPCsI6XelwZ' + i+iiXcqX,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elZ1yS_ = eo('div','wN9f',null,`class`,`form-group col-md-3 col-xs-12`);
let eley4TN = ev('input','uq6f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elysfCa = eo('datalist','dHYf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let ii2xh5 = 'MRkd3gt' + i;
let elnv8Zb = eo('option','xhTbJiNbl_gC' + i+ii2xh5,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elfGlqZ = eo('div','_DZf',null,`class`,`form-group col-md-2 col-xs-12`);
let elbYSVX = ev('input','Z_7f',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el5CfM4 = eo('div','Cd1f',null,`class`,`form-group col-md-2 col-xs-12`);
let el3HEU_ = ev('input','CSZf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndhFHO = component.searchForm.chosenRegions.length > 0;
this.setState('stbNN5W', cndhFHO);
if (cndhFHO) { 
let el_WM9Z = eo('div','t5Qf',null,`class`,`form-group col-12`);
let elL7YYx = eo('ul','6DYf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiFDII = 'mnEgb3z' + index;
let elff7Sz = eo('li','UzBX5RfEiy0A' + index+iiFDII,null,`class`,`chosen-region-item`);
text( region );
let elgnRCZ = eo('i','e6xff'+iiFDII,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let el6Anz7 = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elNWuOG = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elI63of = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndkidZ = component.searchForm.type == 'new-homes';
this.setState('stWWA57', cndkidZ);
if (cndkidZ) { 
let elV2SpK = eo('form','V84f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elV2SpK.formHandler) {
                    window.cfrmdlr = elV2SpK.formHandler = new FormHandler(elV2SpK, component);
                } else {
                    window.cfrmdlr = elV2SpK.formHandler;
                }
            let elT4LXE = eo('div','N7jf',null,`class`,`form-group col-md-7 col-xs-12`);
let elHnwVj = ev('input','vWyf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elCffMN = eo('datalist','wRpf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iirSQE = 'hidAsQI' + i;
let elVvL3t = eo('option','76WbHeaCj4aG' + i+iirSQE,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elhQBmG = eo('div','qJ9f',null,`class`,`form-group col-md-5 col-xs-12`);
let elQZDmh = ev('input','IbSf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let ela1I7v = eo('div','yZSf',null,`class`,`form-group col-md-3 col-xs-12`);
let elCu9HF = ev('input','4mvf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el8SgE4 = eo('datalist','CcBf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let iiMJia = 'aNOYOBy' + i;
let el0dqwA = eo('option','2oF5FrwMo363' + i+iiMJia,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elNJqjb = eo('div','fkCf',null,`class`,`form-group col-md-2 col-xs-12`);
let elln6Uk = ev('input','MT2f',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elX5rrK = eo('datalist','aFrf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iimUDc = 'h9eTLDj' + i;
let eltgmry = eo('option','d6Q4wluFqgOu' + i+iimUDc,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el8byVE = eo('div','7Unf',null,`class`,`form-group col-md-3 col-xs-12`);
let elXA_Sq = ev('input','jYDf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elQzoey = eo('datalist','dbif',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iivaZV = 'M7IQH5H' + i;
let el5mvvZ = eo('option','DvbrImviRFOd' + i+iivaZV,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elHh_n3 = eo('div','oVRf',null,`class`,`form-group col-md-2 col-xs-12`);
let elX9yIO = ev('input','CMwf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el0YGI1 = eo('div','fslf',null,`class`,`form-group col-md-2 col-xs-12`);
let el_yiaq = ev('input','fdlf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndJm0K = component.searchForm.chosenRegions.length > 0;
this.setState('st_231T', cndJm0K);
if (cndJm0K) { 
let elJQj1E = eo('div','U0Zf',null,`class`,`form-group col-12`);
let elWGVhf = eo('ul','R1Vf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiFVb9 = '0nJ19un' + index;
let elMAUUA = eo('li','SgJfxmUwYsEl' + index+iiFVb9,null,`class`,`chosen-region-item`);
text( region );
let elazeZQ = eo('i','64Jff'+iiFVb9,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elyD0zi = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el7U_Mm = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elgC235 = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });