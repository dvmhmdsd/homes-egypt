_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {cGKmJ2Yb_:'loading'},
                render: function (component) {
                    let elMhs0C = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndQGEt = component.loadingSearch;
this.setState('stxrP4M', cndQGEt);
if (cndQGEt) { 
let elEVKY6 = eo('div','sOof',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmp8cgW = this._lc('cGKmJ2Yb_', {parent:component,state:'stxrP4M'});
ec('div');
}let el9X2wD = eo('div',null,null,`class`,`container`);
let elC9mHz = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiykcd = '2t2rRCo' + i;
let eluiu01 = eo('button','XyPrcBI__huJ' + i+iiykcd,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, eluiu01);
                eluiu01.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in eluiu01.cls) {
                eluiu01.classList.toggle(className, eluiu01.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let elGAQ9e = eo('section',null,null,`class`,`search-form`);
let el4t63v = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let ii_nBW = 'pGl45Ob' + i;
let el0rlvU = eo('li','GSAZkbvwvdLd' + i+ii_nBW,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cndqBlM = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stPULe_', cndqBlM);
if (cndqBlM) { 
let elQ8oGl = eo('form','JHOf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elQ8oGl.formHandler) {
                    window.cfrmdlr = elQ8oGl.formHandler = new FormHandler(elQ8oGl, component);
                } else {
                    window.cfrmdlr = elQ8oGl.formHandler;
                }
            let eluMw8F = eo('div','F1bf',null,`class`,`form-group col-md-7 col-xs-12`);
let elEEUXZ = ev('input','DSmf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elJMCcP = eo('datalist','7dnf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let ii1qBb = 'sk0O9Lp' + i;
let elqRO7r = eo('option','hrOONuHlirc7' + i+ii1qBb,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elnIJIG = eo('div','qZ4f',null,`class`,`form-group col-md-5 col-xs-12`);
let el6mRlp = ev('input','1Byf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elsHaJY = eo('div','lTKf',null,`class`,`form-group col-md-3 col-xs-12`);
let elKLzEy = ev('input','d8lf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el7tOR9 = eo('datalist','TaOf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiOU9Y = 'eockfr2' + i;
let elz6cJm = eo('option','DcTAnJQ70iuV' + i+iiOU9Y,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elCiKTg = eo('div','oBgf',null,`class`,`form-group col-md-3 col-xs-12`);
let elTaIJl = ev('input','8aaf',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elKRowU = eo('datalist','JzZf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiVR6d = 'F3v0_XY' + i;
let elozXy8 = eo('option','ZMClGWpB9lLs' + i+iiVR6d,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elF0nvV = eo('div','5vcf',null,`class`,`form-group col-md-3 col-xs-12`);
let elE_4xH = ev('input','NXpf',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elZvQ5E = eo('datalist','1kwf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiKRGV = 'vIvjzv7' + i;
let elk_Wwv = eo('option','A3JlDNdUZ63j' + i+iiKRGV,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elw6uRg = eo('div','dsNf',null,`class`,`form-group col-md-3 col-xs-12`);
let elagP4S = ev('input','PEXf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elmbvwL = eo('datalist','eF_f',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let ii37lk = 'vmdaUvS' + i;
let el4glGV = eo('option','BCyJlxP8Lcv2' + i+ii37lk,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elvRpsb = eo('div','Kqff',null,`class`,`form-group col-md-3 col-xs-12`);
let elauhf8 = ev('input','QQrf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let el8aJLb = eo('div','oaaf',null,`class`,`form-group col-md-3 col-xs-12`);
let elGhxUe = ev('input','2UOf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd7oKh = component.searchForm.chosenRegions.length > 0;
this.setState('st7eFAF', cnd7oKh);
if (cnd7oKh) { 
let elmx3qn = eo('div','39Kf',null,`class`,`form-group col-12`);
let ela3HnT = eo('ul','Hisf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iicFLX = 'UF1UgwE' + index;
let el83Gzn = eo('li','qjjauk1aGkFU' + index+iicFLX,null,`class`,`chosen-region-item`);
text( region );
let ellivR8 = eo('i','Gr4ff'+iicFLX,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elrtpLP = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elgiZcV = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elBC29v = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndcv2R = component.searchForm.type == 'commercial';
this.setState('styCNU6', cndcv2R);
if (cndcv2R) { 
let elzOPxD = eo('form','e_Tf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elzOPxD.formHandler) {
                    window.cfrmdlr = elzOPxD.formHandler = new FormHandler(elzOPxD, component);
                } else {
                    window.cfrmdlr = elzOPxD.formHandler;
                }
            let elnrmTk = eo('div','yZvf',null,`class`,`form-group col-md-7 col-xs-12`);
let el0c4Xt = ev('input','at7f',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let eligl9P = eo('datalist','Py0f',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiOJfR = 'fM6dh4o' + i;
let elsgLhz = eo('option','jtJR_B0lNAsM' + i+iiOJfR,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let eljj9dF = eo('div','S5Qf',null,`class`,`form-group col-md-5 col-xs-12`);
let elqKdp2 = ev('input','ADDf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let el9T6NY = eo('div','UxDf',null,`class`,`form-group col-md-3 col-xs-12`);
let el3AGE0 = ev('input','2JXf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elAI3IT = eo('datalist','pfxf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iik2ST = 'pEcGsah' + i;
let ellunvR = eo('option','MKbvxipV22aZ' + i+iik2ST,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elBiMmU = eo('div','s_0f',null,`class`,`form-group col-md-2 col-xs-12`);
let elRJFLe = ev('input','GkEf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elJO_7r = eo('datalist','0Lgf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiswtn = 'mLltakU' + i;
let elOvfWC = eo('option','yYBLckXl32TZ' + i+iiswtn,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elsIsGe = eo('div','RlDf',null,`class`,`form-group col-md-3 col-xs-12`);
let elIty0I = ev('input','Kkdf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elVaH3e = eo('datalist','61Lf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiVksb = 'fULNySz' + i;
let elhqpFO = eo('option','TkTTDDvBjkML' + i+iiVksb,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elDZGN7 = eo('div','Ge6f',null,`class`,`form-group col-md-2 col-xs-12`);
let elrz1Fk = ev('input','Ntjf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let eleNWUt = eo('div','6JKf',null,`class`,`form-group col-md-2 col-xs-12`);
let elkOuxG = ev('input','e5gf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd4Clh = component.searchForm.chosenRegions.length > 0;
this.setState('stMIR1T', cnd4Clh);
if (cnd4Clh) { 
let elnpDTI = eo('div','8bbf',null,`class`,`form-group col-12`);
let el_uEqL = eo('ul','azNf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiO4j_ = '0txVk9g' + index;
let el3p3wu = eo('li','oiLnVQ7m28aQ' + index+iiO4j_,null,`class`,`chosen-region-item`);
text( region );
let elNtj_1 = eo('i','Oboff'+iiO4j_,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elO302w = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let eltjnHb = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let eltpqvG = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndY7sv = component.searchForm.type == 'new-homes';
this.setState('st6GWIz', cndY7sv);
if (cndY7sv) { 
let elOAl1o = eo('form','tCGf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elOAl1o.formHandler) {
                    window.cfrmdlr = elOAl1o.formHandler = new FormHandler(elOAl1o, component);
                } else {
                    window.cfrmdlr = elOAl1o.formHandler;
                }
            let ellgdc4 = eo('div','RTBf',null,`class`,`form-group col-md-7 col-xs-12`);
let elIpaPB = ev('input','4YKf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elJC4jA = eo('datalist','8FEf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iioOJu = 'gGnyC24' + i;
let elLJqUU = eo('option','Q1XKRSKJ2DTc' + i+iioOJu,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let eleulEe = eo('div','V7Ff',null,`class`,`form-group col-md-5 col-xs-12`);
let eloMrym = ev('input','34wf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let el2gxEB = eo('div','nTrf',null,`class`,`form-group col-md-3 col-xs-12`);
let elvUddd = ev('input','Ynbf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elFefbE = eo('datalist','1Xgf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let ii8JeE = 'SD_3sZO' + i;
let el8TpSV = eo('option','TjA_1Dtjlh3k' + i+ii8JeE,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elODHol = eo('div','5Lxf',null,`class`,`form-group col-md-2 col-xs-12`);
let elG6nqY = ev('input','90sf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let el9I0on = eo('datalist','oPuf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiy1XG = 'pwJUUZI' + i;
let el7xYBc = eo('option','xf6kgbS0rz56' + i+iiy1XG,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elVhnyV = eo('div','VW0f',null,`class`,`form-group col-md-3 col-xs-12`);
let elbZiQi = ev('input','A90f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elERWvP = eo('datalist','RdTf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiPsT7 = 'AYzzu83' + i;
let elh1mNB = eo('option','xuuonzRsfL9C' + i+iiPsT7,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elZIQz4 = eo('div','eRwf',null,`class`,`form-group col-md-2 col-xs-12`);
let elpNiGF = ev('input','y5af',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elgLsUc = eo('div','gO_f',null,`class`,`form-group col-md-2 col-xs-12`);
let eln2jEm = ev('input','lhWf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndjzTo = component.searchForm.chosenRegions.length > 0;
this.setState('sta93GB', cndjzTo);
if (cndjzTo) { 
let el5KrZW = eo('div','wJVf',null,`class`,`form-group col-12`);
let el_ETj9 = eo('ul','dUOf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiso3k = 'MDW74Gg' + index;
let el3cM0o = eo('li','P6hB10eQcvW3' + index+iiso3k,null,`class`,`chosen-region-item`);
text( region );
let elp3tbt = eo('i','59Gff'+iiso3k,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elWg1QN = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let el1LxRU = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elddsRm = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });