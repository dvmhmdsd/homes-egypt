_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {cwIz_Iklj:'loading'},
                render: function (component) {
                    let el1TcdG = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndvX4X = component.loadingSearch;
this.setState('stQl4hu', cndvX4X);
if (cndvX4X) { 
let eldUgte = eo('div','Q1If',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpuz_9 = this._lc('cwIz_Iklj', {parent:component,state:'stQl4hu'});
ec('div');
}let elG79JV = eo('div',null,null,`class`,`container`);
let elxszje = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiPAQj = 'bqmRDoU' + i;
let eldIO_f = eo('button','A64nYf1Ec0PQ' + i+iiPAQj,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, eldIO_f);
                eldIO_f.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in eldIO_f.cls) {
                eldIO_f.classList.toggle(className, eldIO_f.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let els5wpf = eo('section',null,null,`class`,`search-form`);
let elcoBiM = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iinbqw = 'vd_vk1t' + i;
let elPEy_v = eo('li','eKqZbwQfLKB3' + i+iinbqw,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cnd8NYY = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stNjklS', cnd8NYY);
if (cnd8NYY) { 
let elxmHnh = eo('form','o5hf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elxmHnh.formHandler) {
                    window.cfrmdlr = elxmHnh.formHandler = new FormHandler(elxmHnh, component);
                } else {
                    window.cfrmdlr = elxmHnh.formHandler;
                }
            let elUXbtR = eo('div','NV3f',null,`class`,`form-group col-md-7 col-xs-12`);
let eloERIZ = ev('input','v1cf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el0tjPM = eo('datalist','jx5f',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iipTnF = 'oA75WvI' + i;
let elaKcRI = eo('option','AjJbBGbESaQZ' + i+iipTnF,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el82y2x = eo('div','5pcf',null,`class`,`form-group col-md-5 col-xs-12`);
let elSjkVp = ev('input','c4Rf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let eljYlaN = eo('div','3onf',null,`class`,`form-group col-md-3 col-xs-12`);
let el2x7Ug = ev('input','sjyf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elh3lUj = eo('datalist','XsHf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iil42r = 'Dk2RNT1' + i;
let elyqCp9 = eo('option','xLuBLYs7fw6G' + i+iil42r,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el20Yl9 = eo('div','uOPf',null,`class`,`form-group col-md-3 col-xs-12`);
let elUlrZO = ev('input','9r5f',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elX2yLy = eo('datalist','IJJf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iihz0I = '3r1C5Vc' + i;
let el8wtB_ = eo('option','jdDfbe2eFZGs' + i+iihz0I,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elV3suc = eo('div','NbVf',null,`class`,`form-group col-md-3 col-xs-12`);
let elakqJp = ev('input','oMuf',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elVsxby = eo('datalist','xquf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiGYHy = 'bkxtyVH' + i;
let el4z0o1 = eo('option','w0qFdf2GEaif' + i+iiGYHy,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elIrD3Y = eo('div','w3Af',null,`class`,`form-group col-md-3 col-xs-12`);
let elfAOjZ = ev('input','2Npf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elqMrcy = eo('datalist','NxEf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iidX7p = 'dmdgjki' + i;
let elgcGky = eo('option','SNswtVGI0Xqo' + i+iidX7p,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elIP0u6 = eo('div','as3f',null,`class`,`form-group col-md-3 col-xs-12`);
let el2gj0d = ev('input','R7vf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el4nFG9 = eo('div','Hlzf',null,`class`,`form-group col-md-3 col-xs-12`);
let elgMYiV = ev('input','5dvf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd8CLM = component.searchForm.chosenRegions.length > 0;
this.setState('stUcfxX', cnd8CLM);
if (cnd8CLM) { 
let elWstL8 = eo('div','PeNf',null,`class`,`form-group col-12`);
let ella7c4 = eo('ul','_8Jf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iihcZP = '90wKVuW' + index;
let elUegHY = eo('li','Rx02fI1WSN6A' + index+iihcZP,null,`class`,`chosen-region-item`);
text( region );
let elglIWI = eo('i','Cucff'+iihcZP,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elmfmRh = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elUvcMJ = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elBZO1T = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cnd0csu = component.searchForm.type == 'commercial';
this.setState('stuaQgd', cnd0csu);
if (cnd0csu) { 
let elE6VSf = eo('form','UGgf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elE6VSf.formHandler) {
                    window.cfrmdlr = elE6VSf.formHandler = new FormHandler(elE6VSf, component);
                } else {
                    window.cfrmdlr = elE6VSf.formHandler;
                }
            let eldrgbm = eo('div','sc5f',null,`class`,`form-group col-md-7 col-xs-12`);
let el68HLt = ev('input','rIJf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elIJ3l7 = eo('datalist','pGlf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiSj4N = 'QquDesW' + i;
let elVXgEF = eo('option','SdWAxMJSg_qv' + i+iiSj4N,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elw9Zrn = eo('div','kLdf',null,`class`,`form-group col-md-5 col-xs-12`);
let elhHWku = ev('input','Jaff',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elT240H = eo('div','M9Tf',null,`class`,`form-group col-md-3 col-xs-12`);
let elmxMQ8 = ev('input','1zof',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elfohAM = eo('datalist','Y5Kf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiez4o = 'RFzHzre' + i;
let elJ_d9Y = eo('option','DU3_mHrHfyX4' + i+iiez4o,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elvpHlI = eo('div','DiAf',null,`class`,`form-group col-md-2 col-xs-12`);
let elstpfu = ev('input','gPzf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elMsKS2 = eo('datalist','R7uf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiTZph = 'Vt9NP8y' + i;
let elikIU6 = eo('option','MSqTmoDaA6We' + i+iiTZph,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el3CTR1 = eo('div','cTaf',null,`class`,`form-group col-md-3 col-xs-12`);
let elGx8Ye = ev('input','kqZf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let eltyKZs = eo('datalist','Uhnf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiW8FV = 'oGLDVnu' + i;
let elextHn = eo('option','1hfVZTyCIKn_' + i+iiW8FV,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let el4eGVS = eo('div','l1yf',null,`class`,`form-group col-md-2 col-xs-12`);
let elp2wLi = ev('input','woKf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elFjgMR = eo('div','vHyf',null,`class`,`form-group col-md-2 col-xs-12`);
let elFQQw9 = ev('input','t2Of',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndTnCq = component.searchForm.chosenRegions.length > 0;
this.setState('stSRTgc', cndTnCq);
if (cndTnCq) { 
let el3TFSB = eo('div','3rdf',null,`class`,`form-group col-12`);
let elseNkG = eo('ul','1K3f',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iidMcx = 'GQbKlLY' + index;
let elmjT_B = eo('li','bKXSXqqalMuO' + index+iidMcx,null,`class`,`chosen-region-item`);
text( region );
let ell7p1A = eo('i','uw7ff'+iidMcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elSNkDk = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elGxDns = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let el16YV_ = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndqWCv = component.searchForm.type == 'new-homes';
this.setState('st075L9', cndqWCv);
if (cndqWCv) { 
let elwSBVt = eo('form','sdRf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elwSBVt.formHandler) {
                    window.cfrmdlr = elwSBVt.formHandler = new FormHandler(elwSBVt, component);
                } else {
                    window.cfrmdlr = elwSBVt.formHandler;
                }
            let el659PY = eo('div','Ap8f',null,`class`,`form-group col-md-7 col-xs-12`);
let elIpGoN = ev('input','SlDf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elgwQts = eo('datalist','LTDf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iixMrJ = 'apL5x0j' + i;
let eltIGHS = eo('option','ZKYxaNr9rZw1' + i+iixMrJ,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let ele0BEd = eo('div','Ndjf',null,`class`,`form-group col-md-5 col-xs-12`);
let el3qgkq = ev('input','qSUf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elwZx5f = eo('div','Mpaf',null,`class`,`form-group col-md-3 col-xs-12`);
let elpGYIU = ev('input','g8bf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elJ4NEX = eo('datalist','v2mf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let iimFfR = 'ivjMJSs' + i;
let elksxYN = eo('option','50hC2kz9JlQg' + i+iimFfR,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elnb2nD = eo('div','ltef',null,`class`,`form-group col-md-2 col-xs-12`);
let elrqgCW = ev('input','peTf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elAFiA_ = eo('datalist','99Vf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iixrmn = 'sTy22kR' + i;
let elDfnFq = eo('option','7u1OiQrncGkD' + i+iixrmn,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elwYA1y = eo('div','2n1f',null,`class`,`form-group col-md-3 col-xs-12`);
let eldka1x = ev('input','j3Kf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elXxO18 = eo('datalist','Yctf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiuAGM = 'KA2NwrA' + i;
let elsLSkk = eo('option','ZGNCOuv8B6R1' + i+iiuAGM,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elBOcbu = eo('div','m0lf',null,`class`,`form-group col-md-2 col-xs-12`);
let elkrYRR = ev('input','bWof',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elda527 = eo('div','Rs2f',null,`class`,`form-group col-md-2 col-xs-12`);
let elqJQws = ev('input','F81f',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd3d68 = component.searchForm.chosenRegions.length > 0;
this.setState('stllWB7', cnd3d68);
if (cnd3d68) { 
let eliMTJe = eo('div','SEpf',null,`class`,`form-group col-12`);
let elzmgoM = eo('ul','4tjf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiW9uo = 'd0QTMbr' + index;
let eleoFqv = eo('li','yH7IH3Md10B4' + index+iiW9uo,null,`class`,`chosen-region-item`);
text( region );
let elBRP4m = eo('i','42tff'+iiW9uo,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elaezAD = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el4qE3g = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let el_LgsV = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });