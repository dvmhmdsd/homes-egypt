_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {cRcrgHFsg:'loading'},
                render: function (component) {
                    let el3hrOw = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cnd9cgt = component.loadingSearch;
this.setState('stEy_Cx', cnd9cgt);
if (cnd9cgt) { 
let elBimV2 = eo('div','15If',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpVUQS = this._lc('cRcrgHFsg', {parent:component,state:'stEy_Cx'});
ec('div');
}let el011M9 = eo('div',null,null,`class`,`container`);
let el0I1wi = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiDgVD = 'Li7N2PG' + i;
let eljWQR8 = eo('button','AH45QJ7si6PS' + i+iiDgVD,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, eljWQR8);
                eljWQR8.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in eljWQR8.cls) {
                eljWQR8.classList.toggle(className, eljWQR8.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let elmQcqz = eo('section',null,null,`class`,`search-form`);
let elaIuQN = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iiSUHh = '4kLHN4F' + i;
let elJWVlk = eo('li','ipVYlDwxbZ8X' + i+iiSUHh,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cndjvgw = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stdliUD', cndjvgw);
if (cndjvgw) { 
let elS2ovh = eo('form','psLf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elS2ovh.formHandler) {
                    window.cfrmdlr = elS2ovh.formHandler = new FormHandler(elS2ovh, component);
                } else {
                    window.cfrmdlr = elS2ovh.formHandler;
                }
            let elxXqZc = eo('div','F6df',null,`class`,`form-group col-md-7 col-xs-12`);
let elVeqBv = ev('input','QWSf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el61lqK = eo('datalist','1cCf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiOCzz = 'hHT_wgK' + i;
let elWWQG2 = eo('option','tPvcyXBpyYmK' + i+iiOCzz,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elQWPlb = eo('div','5Qff',null,`class`,`form-group col-md-5 col-xs-12`);
let el8_eDU = ev('input','v8Qf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elZqiCJ = eo('div','kBUf',null,`class`,`form-group col-md-3 col-xs-12`);
let elGvfGp = ev('input','0avf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elrgmHg = eo('datalist','joFf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiK0RV = 'M57BNBP' + i;
let elQRMN6 = eo('option','8o84eJCVsbme' + i+iiK0RV,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elqTxD0 = eo('div','RjGf',null,`class`,`form-group col-md-3 col-xs-12`);
let elABKlM = ev('input','j38f',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elzLSwv = eo('datalist','r79f',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiY3mj = '0XvxLTk' + i;
let el2gFIJ = eo('option','DJYoqkkUMp3j' + i+iiY3mj,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elciPlq = eo('div','cyxf',null,`class`,`form-group col-md-3 col-xs-12`);
let el6xOt7 = ev('input','lk5f',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elybd4k = eo('datalist','aJKf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiWQ_E = 'f5W_nvU' + i;
let el8AtNS = eo('option','YoCxN4u2yimO' + i+iiWQ_E,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el3VYLH = eo('div','vwff',null,`class`,`form-group col-md-3 col-xs-12`);
let elJmGGH = ev('input','mhof',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elNz0V2 = eo('datalist','49Hf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iid6aE = 'kRRek2m' + i;
let elQh9QN = eo('option','kYJiriDdFPSm' + i+iid6aE,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let eli1pXV = eo('div','lmKf',null,`class`,`form-group col-md-3 col-xs-12`);
let el6pTyo = ev('input','aYvf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elaBO4e = eo('div','6zdf',null,`class`,`form-group col-md-3 col-xs-12`);
let el3VBRh = ev('input','sJ2f',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnddKVa = component.searchForm.chosenRegions.length > 0;
this.setState('st_W7yW', cnddKVa);
if (cnddKVa) { 
let el3SQct = eo('div','VuMf',null,`class`,`form-group col-12`);
let el9U9hx = eo('ul','oz0f',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let ii7JMj = 'yzfr3ra' + index;
let elFsbh7 = eo('li','LoVuM88ZDfyF' + index+ii7JMj,null,`class`,`chosen-region-item`);
text( region );
let elovJCZ = eo('i','qetff'+ii7JMj,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elpGG2u = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el5k28U = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elPNOlK = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndaY9G = component.searchForm.type == 'commercial';
this.setState('stf5k80', cndaY9G);
if (cndaY9G) { 
let elponCc = eo('form','K5Df',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elponCc.formHandler) {
                    window.cfrmdlr = elponCc.formHandler = new FormHandler(elponCc, component);
                } else {
                    window.cfrmdlr = elponCc.formHandler;
                }
            let elKSFqv = eo('div','yI2f',null,`class`,`form-group col-md-7 col-xs-12`);
let el9uQsc = ev('input','NNEf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el9EIcB = eo('datalist','7tSf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iirFGI = '2whvJk3' + i;
let elbx3Bx = eo('option','j_Tej97QYWUW' + i+iirFGI,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elKabun = eo('div','U6Uf',null,`class`,`form-group col-md-5 col-xs-12`);
let el0eKEc = ev('input','RW0f',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let eldMCoP = eo('div','ONuf',null,`class`,`form-group col-md-3 col-xs-12`);
let elNG4IL = ev('input','jPGf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elZfhWg = eo('datalist','NB9f',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiFZGU = 'L717iTK' + i;
let elpkyyB = eo('option','BnI5fB26svLh' + i+iiFZGU,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elu_9fi = eo('div','bGuf',null,`class`,`form-group col-md-2 col-xs-12`);
let el8ZeeD = ev('input','STIf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elVJfNP = eo('datalist','Z_mf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiCZwR = 'JW6qj1I' + i;
let elqyY3m = eo('option','O8al6u25W_Mx' + i+iiCZwR,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el_1oxy = eo('div','Z8Wf',null,`class`,`form-group col-md-3 col-xs-12`);
let elzKANq = ev('input','6IMf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elf3FXJ = eo('datalist','wEif',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiqyby = '3sQEHuc' + i;
let elf43Zv = eo('option','9xy5EduaCOHi' + i+iiqyby,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let el7QiEN = eo('div','tUof',null,`class`,`form-group col-md-2 col-xs-12`);
let elaTTpM = ev('input','y3Vf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elQELRp = eo('div','B49f',null,`class`,`form-group col-md-2 col-xs-12`);
let elLTBlv = ev('input','AW8f',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndoarF = component.searchForm.chosenRegions.length > 0;
this.setState('stNzroB', cndoarF);
if (cndoarF) { 
let eloZSwF = eo('div','pk2f',null,`class`,`form-group col-12`);
let elOWiWf = eo('ul','Egyf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let ii59eU = '0i3Z_kE' + index;
let elvvZCG = eo('li','Lil81Rcm3teI' + index+ii59eU,null,`class`,`chosen-region-item`);
text( region );
let el5uT8A = eo('i','Ov6ff'+ii59eU,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let eljBOVB = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elfkCT7 = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elaPHhU = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndG9Uo = component.searchForm.type == 'new-homes';
this.setState('stG0s5l', cndG9Uo);
if (cndG9Uo) { 
let elD46Fe = eo('form','06Sf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elD46Fe.formHandler) {
                    window.cfrmdlr = elD46Fe.formHandler = new FormHandler(elD46Fe, component);
                } else {
                    window.cfrmdlr = elD46Fe.formHandler;
                }
            let elhXUtV = eo('div','MH_f',null,`class`,`form-group col-md-7 col-xs-12`);
let elGHfuM = ev('input','wyef',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elDEGW5 = eo('datalist','MZOf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iiuT8H = 'EObUbtD' + i;
let el9NmOH = eo('option','yImUb7Ixq2q5' + i+iiuT8H,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elGKUN4 = eo('div','N38f',null,`class`,`form-group col-md-5 col-xs-12`);
let elDGJHs = ev('input','wjyf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elSpO_0 = eo('div','qMrf',null,`class`,`form-group col-md-3 col-xs-12`);
let elg80ac = ev('input','AOjf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elLvZF5 = eo('datalist','oqaf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let ii8FH6 = 'f0VCwEO' + i;
let eli4nys = eo('option','BlChEmqi9P6a' + i+ii8FH6,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elYfLmV = eo('div','djcf',null,`class`,`form-group col-md-2 col-xs-12`);
let eljbOHm = ev('input','W9Nf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elJij1Y = eo('datalist','j7Tf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iihJuv = 'Sh2t8P8' + i;
let eluVO6d = eo('option','GcMuKib2SnZx' + i+iihJuv,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elAcaEZ = eo('div','9saf',null,`class`,`form-group col-md-3 col-xs-12`);
let eliFp9u = ev('input','Rsnf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elx7qui = eo('datalist','FLuf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iibYqG = 'C0MQO2O' + i;
let elQK3N7 = eo('option','FPPcZ1VXICkS' + i+iibYqG,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elaEFzM = eo('div','1Bqf',null,`class`,`form-group col-md-2 col-xs-12`);
let elit1fZ = ev('input','0vJf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el39KDe = eo('div','zkzf',null,`class`,`form-group col-md-2 col-xs-12`);
let elUC9cf = ev('input','si6f',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnddkZj = component.searchForm.chosenRegions.length > 0;
this.setState('stBVglM', cnddkZj);
if (cnddkZj) { 
let el_EmUy = eo('div','k_Df',null,`class`,`form-group col-12`);
let elwqZIS = eo('ul','wFBf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iio0Zg = 'h10ZDYb' + index;
let elposKE = eo('li','zEB0rsOiQh9v' + index+iio0Zg,null,`class`,`chosen-region-item`);
text( region );
let elylnKp = eo('i','Np6ff'+iio0Zg,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elImW0s = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el9z3i2 = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let ellZ1Uq = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });