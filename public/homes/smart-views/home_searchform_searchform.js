_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {c8xJSg9f3:'loading'},
                render: function (component) {
                    let elo6N39 = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndeaOB = component.loadingSearch;
this.setState('stAbtMp', cndeaOB);
if (cndeaOB) { 
let elCpugb = eo('div','fO4f',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpMkKn = this._lc('c8xJSg9f3', {parent:component,state:'stAbtMp'});
ec('div');
}let elUJKbD = eo('div',null,null,`class`,`container`);
let elXhYwf = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let ii_aoJ = 'MmkAXLi' + i;
let elBzsVU = eo('button','ce7ankRfXwkM' + i+ii_aoJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, elBzsVU);
                elBzsVU.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in elBzsVU.cls) {
                elBzsVU.classList.toggle(className, elBzsVU.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let elqfdXG = eo('section',null,null,`class`,`search-form`);
let elUtmv3 = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iirOiW = 'ax0ReR8' + i;
let elX6_Lc = eo('li','PGSwYLrKpjeN' + i+iirOiW,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cndS4ZT = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stKpjpv', cndS4ZT);
if (cndS4ZT) { 
let elnh1Wv = eo('form','kDLf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elnh1Wv.formHandler) {
                    window.cfrmdlr = elnh1Wv.formHandler = new FormHandler(elnh1Wv, component);
                } else {
                    window.cfrmdlr = elnh1Wv.formHandler;
                }
            let elsVjLY = eo('div','TIgf',null,`class`,`form-group col-md-7 col-xs-12`);
let elhPKRG = ev('input','TiCf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elZIrhP = eo('datalist','SMjf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let ii90QT = 'RrR5KXo' + i;
let elbEtuI = eo('option','16SZdpo5vrFN' + i+ii90QT,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elTsXnd = eo('div','HA5f',null,`class`,`form-group col-md-5 col-xs-12`);
let elcrWIS = ev('input','VkWf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elXcMvo = eo('div','kWmf',null,`class`,`form-group col-md-3 col-xs-12`);
let elf4dc8 = ev('input','vWpf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elfH1Lv = eo('datalist','zYef',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiO2WZ = '4wNOf99' + i;
let ellzY2i = eo('option','xJnujhUr8LX2' + i+iiO2WZ,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let eloV4uG = eo('div','yvGf',null,`class`,`form-group col-md-3 col-xs-12`);
let elt7SE6 = ev('input','qf1f',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elJcmlX = eo('datalist','Watf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiFWXn = 'QnZuD3z' + i;
let elXmKYx = eo('option','mV6LLlp3DeIn' + i+iiFWXn,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el6WNJY = eo('div','TMXf',null,`class`,`form-group col-md-3 col-xs-12`);
let elolshz = ev('input','dRlf',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let eliiFg1 = eo('datalist','A_if',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiwdPW = 'dtx2JWg' + i;
let elpZOBI = eo('option','Cfk5rvGfdA1y' + i+iiwdPW,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elNdO9P = eo('div','Qfvf',null,`class`,`form-group col-md-3 col-xs-12`);
let elPr0Aq = ev('input','ZvIf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let els7Hnb = eo('datalist','PWSf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iinoG8 = 'HUNyM0b' + i;
let elRB5aM = eo('option','eKfP1tVzwsHq' + i+iinoG8,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elXMVtQ = eo('div','6PXf',null,`class`,`form-group col-md-3 col-xs-12`);
let elsQr_Z = ev('input','m9uf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elXdYqb = eo('div','Tr0f',null,`class`,`form-group col-md-3 col-xs-12`);
let elbIjQc = ev('input','bWcf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndBmgm = component.searchForm.chosenRegions.length > 0;
this.setState('stKRsIh', cndBmgm);
if (cndBmgm) { 
let elja0Sh = eo('div','hejf',null,`class`,`form-group col-12`);
let elFaZmh = eo('ul','yaof',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iilC9R = 'm64cmyj' + index;
let elqg0hf = eo('li','OOl_wUGSjG92' + index+iilC9R,null,`class`,`chosen-region-item`);
text( region );
let elos9Q5 = eo('i','N8uff'+iilC9R,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elwNbsw = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el4FyDL = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elNpLoV = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndi_3D = component.searchForm.type == 'commercial';
this.setState('stYs4nS', cndi_3D);
if (cndi_3D) { 
let elhJahs = eo('form','DGhf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elhJahs.formHandler) {
                    window.cfrmdlr = elhJahs.formHandler = new FormHandler(elhJahs, component);
                } else {
                    window.cfrmdlr = elhJahs.formHandler;
                }
            let eloDTW9 = eo('div','SzJf',null,`class`,`form-group col-md-7 col-xs-12`);
let elsWgMe = ev('input','oocf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elqW_jR = eo('datalist','EFSf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iilBZb = '4ypLvyc' + i;
let elkEz1v = eo('option','iBXIfg6HaZSm' + i+iilBZb,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elCQB8n = eo('div','uFRf',null,`class`,`form-group col-md-5 col-xs-12`);
let elHPeQH = ev('input','KkDf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elKhQtZ = eo('div','yl5f',null,`class`,`form-group col-md-3 col-xs-12`);
let el8ghxT = ev('input','597f',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let eldrl2F = eo('datalist','yUFf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iirdTI = 'EClU0LV' + i;
let el5vLlr = eo('option','HlryPN8JGNy2' + i+iirdTI,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elJ4oZa = eo('div','Fusf',null,`class`,`form-group col-md-2 col-xs-12`);
let el3LgQq = ev('input','CAGf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let eliZtae = eo('datalist','kb4f',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let ii2zYf = 'dDfjof4' + i;
let el5OWYH = eo('option','RmN30KyMOH4R' + i+ii2zYf,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elEwgja = eo('div','jp1f',null,`class`,`form-group col-md-3 col-xs-12`);
let elAB584 = ev('input','QA6f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elZ5SeT = eo('datalist','Ppbf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let ii6Q0k = '1nnWko1' + i;
let el8EQim = eo('option','JQfM9dXQfiCK' + i+ii6Q0k,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elN1Fa2 = eo('div','yjwf',null,`class`,`form-group col-md-2 col-xs-12`);
let eluWa9v = ev('input','S3qf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elGCFba = eo('div','XY2f',null,`class`,`form-group col-md-2 col-xs-12`);
let elERBSM = ev('input','0tkf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndDEeF = component.searchForm.chosenRegions.length > 0;
this.setState('st_s9bI', cndDEeF);
if (cndDEeF) { 
let elnmB46 = eo('div','zhff',null,`class`,`form-group col-12`);
let elrbZx7 = eo('ul','UDlf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiDRB7 = 'cYtZF2D' + index;
let elsw6Te = eo('li','gYMi9i4LGWZx' + index+iiDRB7,null,`class`,`chosen-region-item`);
text( region );
let elPx9dv = eo('i','kdvff'+iiDRB7,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elT_Chm = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elFPKy1 = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let el0D5xQ = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndGdQS = component.searchForm.type == 'new-homes';
this.setState('stdazZc', cndGdQS);
if (cndGdQS) { 
let elzGA4x = eo('form','bN1f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elzGA4x.formHandler) {
                    window.cfrmdlr = elzGA4x.formHandler = new FormHandler(elzGA4x, component);
                } else {
                    window.cfrmdlr = elzGA4x.formHandler;
                }
            let eliI9iC = eo('div','zZxf',null,`class`,`form-group col-md-7 col-xs-12`);
let elrNSyz = ev('input','Z1kf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elkuWJA = eo('datalist','6Epf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let ii_lR7 = 'WYXceDj' + i;
let eliQfE7 = eo('option','HO32Meaeq7pI' + i+ii_lR7,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elDcQLB = eo('div','RH5f',null,`class`,`form-group col-md-5 col-xs-12`);
let elb97vC = ev('input','qvof',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elZ0FbN = eo('div','WVpf',null,`class`,`form-group col-md-3 col-xs-12`);
let elSU4Jk = ev('input','EEtf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let eldOUqv = eo('datalist','5Inf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let iily41 = 'YkxpL0I' + i;
let elURAwh = eo('option','Ahi0oJOlU6n3' + i+iily41,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elTwM3k = eo('div','rEMf',null,`class`,`form-group col-md-2 col-xs-12`);
let el2i_sy = ev('input','qECf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elcoy4Q = eo('datalist','SsLf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let ii8M8L = 'MoeEOey' + i;
let elJ4ZP7 = eo('option','MRj2fBVT2IRs' + i+ii8M8L,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elRbQgn = eo('div','qmtf',null,`class`,`form-group col-md-3 col-xs-12`);
let eltIsnJ = ev('input','K3ff',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elp8Zfe = eo('datalist','7RKf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiWQBA = 'bhOBKQ0' + i;
let elHGPIK = eo('option','n3EeFj6pab8x' + i+iiWQBA,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elwXe4p = eo('div','0zZf',null,`class`,`form-group col-md-2 col-xs-12`);
let elDFiGZ = ev('input','zS7f',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elwyXYb = eo('div','Neqf',null,`class`,`form-group col-md-2 col-xs-12`);
let elpl6c4 = ev('input','13Mf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndOpD2 = component.searchForm.chosenRegions.length > 0;
this.setState('stomL7Q', cndOpD2);
if (cndOpD2) { 
let elHEM0q = eo('div','TVaf',null,`class`,`form-group col-12`);
let elRkbd1 = eo('ul','PQ6f',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiUXkR = '7TWwunF' + index;
let eluzkLH = eo('li','T8VD_0gvxePl' + index+iiUXkR,null,`class`,`chosen-region-item`);
text( region );
let el4EgEQ = eo('i','JFGff'+iiUXkR,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let eleHY9L = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el7FE72 = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elFD0Kh = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });