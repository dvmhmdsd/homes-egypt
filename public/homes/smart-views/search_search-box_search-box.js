_Component({
                selector: 'search-box',
                c: 'SearchBox', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {czqs1BzYz:'loading'},
                render: function (component) {
                    let elXRh34 = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndkn8M = component.loadingSearch;
this.setState('st2_1ou', cndkn8M);
if (cndkn8M) { 
let elrkpA4 = eo('div','Z3df',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpWRCl = this._lc('czqs1BzYz', {parent:component,state:'st2_1ou'});
ec('div');
}let eljE5xy = eo('div',null,null,`class`,`container`);
let eljN7gK = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let ii3PCS = 'V5yHes9' + i;
let ell1ciq = eo('button','3iCn9Ru8o89F' + i+ii3PCS,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, ell1ciq);
                ell1ciq.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in ell1ciq.cls) {
                ell1ciq.classList.toggle(className, ell1ciq.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let elB09OJ = eo('section',null,null,`class`,`search-form`);
let elQ3Hgk = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let ii_mkp = 'XDaxtiu' + i;
let el7cwe8 = eo('li','1J42NZqfAaGg' + i+ii_mkp,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
text(`if`);
let cndiUFx = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('st5OfUy', cndiUFx);
if (cndiUFx) { 
let el98BgA = eo('form','yvuf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! el98BgA.formHandler) {
                    window.cfrmdlr = el98BgA.formHandler = new FormHandler(el98BgA, component);
                } else {
                    window.cfrmdlr = el98BgA.formHandler;
                }
            let elh4WL4 = eo('div','Lalf',null,`class`,`form-group col-md-7 col-xs-12`);
let elStBP9 = ev('input','D0Kf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elbiiTR = eo('datalist','eN1f',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiqwUV = 'bL2Y2hX' + i;
let el33b6b = eo('option','ss_ocksAFyJE' + i+iiqwUV,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let eliJHA_ = eo('div','Re4f',null,`class`,`form-group col-md-5 col-xs-12`);
let elrI7m0 = ev('input','otif',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elUBFQZ = eo('div','KtLf',null,`class`,`form-group col-md-3 col-xs-12`);
let el0fNHV = ev('input','tbpf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elIui8o = eo('datalist','GNpf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiDD1Y = 'tsEBT4Z' + i;
let eln3pUP = eo('option','kqSa1UHypstD' + i+iiDD1Y,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elxNFza = eo('div','s2Mf',null,`class`,`form-group col-md-3 col-xs-12`);
let elanzKG = ev('input','fR1f',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elXc47y = eo('datalist','p0Tf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiUhrC = 'cJcrX0U' + i;
let elIGoOD = eo('option','QC9cBZiRwF9J' + i+iiUhrC,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elKIK59 = eo('div','Wrqf',null,`class`,`form-group col-md-3 col-xs-12`);
let elM32Nf = ev('input','ofkf',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let el_3N0U = eo('datalist','PbPf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iivoZE = 'DBVUtsf' + i;
let el1rcpG = eo('option','xh1j_sqxniyV' + i+iivoZE,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elZElTi = eo('div','J9Of',null,`class`,`form-group col-md-3 col-xs-12`);
let eldAhgp = ev('input','U44f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elSgIyM = eo('datalist','LCVf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiEEa6 = 'oIMs64m' + i;
let elfUiDd = eo('option','HBineLG9qJkA' + i+iiEEa6,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elNbF2H = eo('div','RQaf',null,`class`,`form-group col-md-3 col-xs-12`);
let elO9qFy = ev('input','VPnf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elnSvnp = eo('div','7X0f',null,`class`,`form-group col-md-3 col-xs-12`);
let elHju56 = ev('input','mi5f',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndvBeX = component.searchForm.chosenRegions.length > 0;
this.setState('stGr37d', cndvBeX);
if (cndvBeX) { 
let elR1LDr = eo('div','u6Mf',null,`class`,`form-group col-12`);
let elOZspe = eo('ul','pbZf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiAjo_ = 'NuupREC' + index;
let elXd0f1 = eo('li','VAp9gvVOiVip' + index+iiAjo_,null,`class`,`chosen-region-item`);
text( region );
let elYuS5o = eo('i','NSBff'+iiAjo_,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elrOwVz = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elCIadf = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elVNQ_j = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndmEGn = component.searchForm.type == 'commercial';
this.setState('stZqjnM', cndmEGn);
if (cndmEGn) { 
let elrUSD0 = eo('form','p8Bf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elrUSD0.formHandler) {
                    window.cfrmdlr = elrUSD0.formHandler = new FormHandler(elrUSD0, component);
                } else {
                    window.cfrmdlr = elrUSD0.formHandler;
                }
            let elLETza = eo('div','wrHf',null,`class`,`form-group col-md-7 col-xs-12`);
let elSmUNi = ev('input','kU6f',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elOQxI4 = eo('datalist','KnQf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iikgx7 = 'pA3IUTr' + i;
let elM6fir = eo('option','Pk4J0PowU5Oz' + i+iikgx7,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elvFW9m = eo('div','9d4f',null,`class`,`form-group col-md-5 col-xs-12`);
let elthp7G = ev('input','MGAf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elhn262 = eo('div','Gk9f',null,`class`,`form-group col-md-3 col-xs-12`);
let elzqEZg = ev('input','fBQf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let ell9gCj = eo('datalist','9c7f',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiGvyy = '4LLy710' + i;
let elxdRvH = eo('option','wQQLwaddVAoe' + i+iiGvyy,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elTbROW = eo('div','lqif',null,`class`,`form-group col-md-2 col-xs-12`);
let el8iFUl = ev('input','BvOf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let el8Ztob = eo('datalist','Bcff',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let ii4URM = 'JFMhXfZ' + i;
let eliDgy6 = eo('option','yWoYkfuEwinQ' + i+ii4URM,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el0g7pC = eo('div','ECvf',null,`class`,`form-group col-md-3 col-xs-12`);
let elu_7qw = ev('input','Qfuf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elpnbxR = eo('datalist','UTof',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiU3vs = 't3f7iwK' + i;
let elGPOO_ = eo('option','sAx7ImfOsmdu' + i+iiU3vs,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elmGvwt = eo('div','HVLf',null,`class`,`form-group col-md-2 col-xs-12`);
let elmQiDk = ev('input','LzCf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elJ_KdJ = eo('div','bQgf',null,`class`,`form-group col-md-2 col-xs-12`);
let elavf4i = ev('input','ogmf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd24nX = component.searchForm.chosenRegions.length > 0;
this.setState('stgx1po', cnd24nX);
if (cnd24nX) { 
let elt_T4z = eo('div','dJhf',null,`class`,`form-group col-12`);
let ellfAID = eo('ul','GB0f',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iichcq = 'umMctKa' + index;
let elOfrx7 = eo('li','Ss73gEUc2gKA' + index+iichcq,null,`class`,`chosen-region-item`);
text( region );
let elCrdMA = eo('i','5Tyff'+iichcq,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let eldeBla = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elLGeck = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
                    component.searchForm.chosenRegionsNames = [];
                    component.searchForm.chosenRegions = []
                  }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elRT8HS = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cnd_iq6 = component.searchForm.type == 'new-homes';
this.setState('ste2dam', cnd_iq6);
if (cnd_iq6) { 
let elPRyyM = eo('form','BQVf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elPRyyM.formHandler) {
                    window.cfrmdlr = elPRyyM.formHandler = new FormHandler(elPRyyM, component);
                } else {
                    window.cfrmdlr = elPRyyM.formHandler;
                }
            let el82EdS = eo('div','86_f',null,`class`,`form-group col-md-7 col-xs-12`);
let elxzpLW = ev('input','YhTf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let eluwdQb = eo('datalist','d9Af',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iii_JS = 'CdVl83C' + i;
let elyULSG = eo('option','sl9lYLQqdNQ0' + i+iii_JS,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elx90RF = eo('div','xL2f',null,`class`,`form-group col-md-5 col-xs-12`);
let elWdYQU = ev('input','lAyf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elQPE2X = eo('div','hoof',null,`class`,`form-group col-md-3 col-xs-12`);
let elfyXdg = ev('input','5ANf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elrBE0Y = eo('datalist','nNZf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let ii7C3R = 'pwx60y_' + i;
let eljhGFo = eo('option','Zb6MfdgCD9c0' + i+ii7C3R,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elQh0CG = eo('div','cqdf',null,`class`,`form-group col-md-2 col-xs-12`);
let elSSXCS = ev('input','u1rf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let el8l58c = eo('datalist','v_7f',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiEkgU = 'uCZfte6' + i;
let elQdR55 = eo('option','U4jwenLzcwL4' + i+iiEkgU,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elfZbF9 = eo('div','T5tf',null,`class`,`form-group col-md-3 col-xs-12`);
let elOWGbn = ev('input','9pQf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elhA7fJ = eo('datalist','0f5f',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiEbn8 = 'FB41MLQ' + i;
let elx4LpO = eo('option','F_ZPzycyH9wg' + i+iiEbn8,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elBsF5F = eo('div','fRIf',null,`class`,`form-group col-md-2 col-xs-12`);
let elmI8H6 = ev('input','ds5f',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el7_ESW = eo('div','OMDf',null,`class`,`form-group col-md-2 col-xs-12`);
let el59JO1 = ev('input','P5Nf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd8Ix2 = component.searchForm.chosenRegions.length > 0;
this.setState('st7Hb4M', cnd8Ix2);
if (cnd8Ix2) { 
let eltk822 = eo('div','Wstf',null,`class`,`form-group col-12`);
let elzWg_7 = eo('ul','QqKf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iipSXY = 'e73L1pc' + index;
let ele18IM = eo('li','rz7qtv8o5giP' + index+iipSXY,null,`class`,`chosen-region-item`);
text( region );
let elh3LTv = eo('i','DWLff'+iipSXY,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elbVyPt = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elvbLmu = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
                    component.searchForm.chosenRegions = [];
                    component.searchForm.chosenRegionsNames = []
                  }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elnbEHv = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });