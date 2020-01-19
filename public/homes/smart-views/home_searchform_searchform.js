_Component({
                selector: 'searchform',
                c: 'Searchform', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes'],
                children: {c49FExgll:'loading'},
                render: function (component) {
                    let elx6Oqx = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let cndMr2F = component.loadingSearch;
this.setState('stQdAxH', cndMr2F);
if (cndMr2F) { 
let el4Pv_L = eo('div','e95f',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpuEYP = this._lc('c49FExgll', {parent:component,state:'stQdAxH'});
ec('div');
}let elUWyls = eo('div',null,null,`class`,`container`);
let elhRUI5 = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiPT1z = 'qjAfsln' + i;
let eltJleo = eo('button','x4yyTcW22jVW' + i+iiPT1z,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.type = type.value}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);

                    if (! component.buttonsPanel) {
                        component.buttonsPanel = [];
                    }

                    Array.pushOnce(component.buttonsPanel, eltJleo);
                eltJleo.cls = { 'type-active': type.value == component.searchForm.type };

            for (let className in eltJleo.cls) {
                eltJleo.classList.toggle(className, eltJleo.cls[className]);
            }  
            text( type.label );
ec('button');
}
ec('section');
let elMJTrY = eo('section',null,null,`class`,`search-form`);
let elYaTV_ = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iiDZRC = 'upJhQ6D' + i;
let elRA1_q = eo('li','T_sWnMaiwwRJ' + i+iiDZRC,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cnddx7U = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('st4s9zW', cnddx7U);
if (cnddx7U) { 
let elgaQsj = eo('form','UNQf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elgaQsj.formHandler) {
                    window.cfrmdlr = elgaQsj.formHandler = new FormHandler(elgaQsj, component);
                } else {
                    window.cfrmdlr = elgaQsj.formHandler;
                }
            let el0vTV1 = eo('div','_ncf',null,`class`,`form-group col-md-7 col-xs-12`);
let elpqJiy = ev('input','DWjf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el_kDeP = eo('datalist','KDHf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiYQx6 = 'aInaxmK' + i;
let elrPY7O = eo('option','J4hj5MWRrNtk' + i+iiYQx6,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elcdQjI = eo('div','m2Sf',null,`class`,`form-group col-md-5 col-xs-12`);
let eljIoN7 = ev('input','yEJf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let eluI_v8 = eo('div','v0sf',null,`class`,`form-group col-md-3 col-xs-12`);
let elA1KXT = ev('input','tfQf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elVk8gD = eo('datalist','yaXf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let iiAyuh = '46iBx9M' + i;
let elpzqej = eo('option','5_c3vBLCIlz9' + i+iiAyuh,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elddyFN = eo('div','ngSf',null,`class`,`form-group col-md-3 col-xs-12`);
let elqGHD1 = ev('input','qMLf',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elJMQWP = eo('datalist','rSgf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiyRTB = 'G0xgLqQ' + i;
let eldrvWa = eo('option','_z27mimGPMoY' + i+iiyRTB,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elprbMT = eo('div','qnuf',null,`class`,`form-group col-md-3 col-xs-12`);
let elTjzaB = ev('input','4Epf',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let el5mGvc = eo('datalist','ZAdf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiSwzc = 'dFIUfeo' + i;
let elSYfcg = eo('option','SOAouonuY36Z' + i+iiSwzc,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let el4l5qz = eo('div','qHff',null,`class`,`form-group col-md-3 col-xs-12`);
let el0ceAI = ev('input','P13f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elOIFZ0 = eo('datalist','08Gf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iii_UD = 'eXM_bf7' + i;
let elbfg51 = eo('option','tbRnCTL7b_8l' + i+iii_UD,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elABvbs = eo('div','Uksf',null,`class`,`form-group col-md-3 col-xs-12`);
let elcf9NM = ev('input','dNtf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elk5PJx = eo('div','b5sf',null,`class`,`form-group col-md-3 col-xs-12`);
let ellGvQf = ev('input','YHZf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd9cdI = component.searchForm.chosenRegions.length > 0;
this.setState('stcBNiO', cnd9cdI);
if (cnd9cdI) { 
let elc7tzf = eo('div','Gf1f',null,`class`,`form-group col-12`);
let el231u1 = eo('ul','15Ef',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iib35J = 'U_GMQFU' + index;
let elYZ90t = eo('li','3oIB_kdyp978' + index+iib35J,null,`class`,`chosen-region-item`);
text( region );
let el_VB13 = eo('i','inYff'+iib35J,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let eldkdCY = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elBqioG = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elnt9qY = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndhd0h = component.searchForm.type == 'commercial';
this.setState('stzx10V', cndhd0h);
if (cndhd0h) { 
let elY9O7r = eo('form','gFWf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elY9O7r.formHandler) {
                    window.cfrmdlr = elY9O7r.formHandler = new FormHandler(elY9O7r, component);
                } else {
                    window.cfrmdlr = elY9O7r.formHandler;
                }
            let elpRUys = eo('div','Ivpf',null,`class`,`form-group col-md-7 col-xs-12`);
let elIduoy = ev('input','Synf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let elCf4Ui = eo('datalist','_VIf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iiHiH7 = 'wPN1JlB' + i;
let eltTB9H = eo('option','LpdDXcupQ9ik' + i+iiHiH7,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elVMl4s = eo('div','bkUf',null,`class`,`form-group col-md-5 col-xs-12`);
let elYRWvO = ev('input','Gggf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elHkvTS = eo('div','6saf',null,`class`,`form-group col-md-3 col-xs-12`);
let eljY2Te = ev('input','rDxf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let el3wPi3 = eo('datalist','Ndmf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiqCFX = 'HmArDeN' + i;
let elgDD2O = eo('option','rMJNCJEsHy_x' + i+iiqCFX,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elX0wfh = eo('div','Rvyf',null,`class`,`form-group col-md-2 col-xs-12`);
let el8hlpG = ev('input','l1Qf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elINUk6 = eo('datalist','IRyf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let ii_6YI = 'xOzwyEy' + i;
let el2VjJB = eo('option','dLAhD7QQBS9u' + i+ii_6YI,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elat5b6 = eo('div','n6Zf',null,`class`,`form-group col-md-3 col-xs-12`);
let elfq41w = ev('input','a_hf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elD9ddp = eo('datalist','XZtf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iicPwN = 'iROH8K9' + i;
let el2BSdR = eo('option','_1H0Q7M7maop' + i+iicPwN,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let el8icdf = eo('div','0Dhf',null,`class`,`form-group col-md-2 col-xs-12`);
let elOvKCO = ev('input','aQJf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elVnHFT = eo('div','ggOf',null,`class`,`form-group col-md-2 col-xs-12`);
let elU4xWb = ev('input','ciyf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndOizV = component.searchForm.chosenRegions.length > 0;
this.setState('stKCTER', cndOizV);
if (cndOizV) { 
let el4mE77 = eo('div','EzVf',null,`class`,`form-group col-12`);
let elCQZD4 = eo('ul','NaGf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiLzXK = 'iopXQHh' + index;
let elstcLZ = eo('li','cZrDUk5eAEb0' + index+iiLzXK,null,`class`,`chosen-region-item`);
text( region );
let el9CgAI = eo('i','xiyff'+iiLzXK,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elrbdbR = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elax4He = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegionsNames = [];
              component.searchForm.chosenRegions = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let el3g4qB = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndeWdL = component.searchForm.type == 'new-homes';
this.setState('stJhMtS', cndeWdL);
if (cndeWdL) { 
let elkqSEJ = eo('form','NZaf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elkqSEJ.formHandler) {
                    window.cfrmdlr = elkqSEJ.formHandler = new FormHandler(elkqSEJ, component);
                } else {
                    window.cfrmdlr = elkqSEJ.formHandler;
                }
            let eltf2HJ = eo('div','lTYf',null,`class`,`form-group col-md-7 col-xs-12`);
let el7QGRZ = ev('input','v5hf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elheuKx = eo('datalist','naNf',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let iiPI11 = 'g0RCp2w' + i;
let elqCQXG = eo('option','06B3Bx2ylpTj' + i+iiPI11,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elzZQJh = eo('div','k_if',null,`class`,`form-group col-md-5 col-xs-12`);
let elZoHTK = ev('input','ydDf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let el9tFsb = eo('div','vOAf',null,`class`,`form-group col-md-3 col-xs-12`);
let eldTxZj = ev('input','oZHf',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let eltHpJk = eo('datalist','KWTf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let iifbwW = 'e6AvpBq' + i;
let elcV3U8 = eo('option','lMKSxiaYVjyK' + i+iifbwW,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elTofed = eo('div','HVqf',null,`class`,`form-group col-md-2 col-xs-12`);
let elgh5Gm = ev('input','Uu1f',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elf_eCj = eo('datalist','znWf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiwffI = 'VmF6LmJ' + i;
let elc5_dP = eo('option','Z1XGF85G7FMw' + i+iiwffI,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let eld8Hvo = eo('div','GDlf',null,`class`,`form-group col-md-3 col-xs-12`);
let elcRGUE = ev('input','T33f',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elVh6TR = eo('datalist','U5lf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iitPA7 = 'Exc0qOt' + i;
let elCBqL0 = eo('option','qXaFRtqEdDCr' + i+iitPA7,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elZU2Bq = eo('div','whzf',null,`class`,`form-group col-md-2 col-xs-12`);
let elIROJA = ev('input','9vYf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elEqJiu = eo('div','DOrf',null,`class`,`form-group col-md-2 col-xs-12`);
let elCw77J = ev('input','tHUf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cnd_Xeq = component.searchForm.chosenRegions.length > 0;
this.setState('stlPdpH', cnd_Xeq);
if (cnd_Xeq) { 
let elrWFxv = eo('div','gC5f',null,`class`,`form-group col-12`);
let el9RIBu = eo('ul','wVPf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiLt7M = '_GHoJg2' + index;
let elENzbk = eo('li','sGtPSV8Y4xkW' + index+iiLt7M,null,`class`,`chosen-region-item`);
text( region );
let el19NNc = eo('i','K0Xff'+iiLt7M,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let el3wu1j = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elv9KyK = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;
              component.searchForm.chosenRegions = [];
              component.searchForm.chosenRegionsNames = []
            }]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elbymoa = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');

                    this.isReadyToGo();
                }
        });