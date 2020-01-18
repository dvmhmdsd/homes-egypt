_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['loadingSearch','searchForm','activateType','chooseRegion','getProperties','cache','removeChosenRegion','getCommercialTypes','getCompoundsTypes','loading','properties'],
                children: {cYDGapCNI:'loading',cctg8KM8E:'loading',co9v4bYLY:'flk-slider',crDyrklM3:'layout'},
                render: function (component) {
                    let cmppbSa = this._lc('crDyrklM3', {parent:component,content:(layout) => {let cndk8Hh = component.loadingSearch;
this.setState('stxCRtf', cndk8Hh);
if (cndk8Hh) { 
let elWgU5p = eo('div','C0Vf',null,`class`,`loader-container d-flex justify-content-center align-items-center`);
let cmpRBgY = this._lc('cYDGapCNI', {parent:component,parentTop:layout,state:'stxCRtf'});
ec('div');
}let elAXJZv = eo('section',null,null,`class`,`searchbox d-flex flex-column justify-content-center`);
let eljwlGW = eo('div',null,null,`class`,`container`);
let elJM6HY = eo('section',null,null,`class`,`types-panel d-flex justify-content-around flex-wrap`);
for (let i in component.searchForm.typesAvailable) {
let type = component.searchForm.typesAvailable[i]; 
 let iiqi7l = 'AnSs8eT' + i;
let elB1h6w = eo('button','Wl09rsNviBGW' + i+iiqi7l,null, eventListeners, {onclick:[function(e) {var $el = this;component.activateType($el, type)}]},`class`,`btn-action types-panel-btn`,`data-type`,`${ type.value }`);
text( type.label );
ec('button');
}
ec('section');
let el4DV6H = eo('section',null,null,`class`,`search-form`);
let elsk5Dk = eo('ul',null,null,`class`,`regions list-unstyled d-flex justify-content-center flex-wrap`);
for (let i in component.searchForm.featuredRegions) {
let region = component.searchForm.featuredRegions[i]; 
 let iiWuEr = 'yjT6zsP' + i;
let elvZzdy = eo('li','BU8lg7YuPDIJ' + i+iiWuEr,null, eventListeners, {onclick:[function(e) {var $el = this;component.chooseRegion(region.name)}]},`class`,`region-item`);
text( region.name );
ec('li');
}
ec('ul');
let cnd3fHG = component.searchForm.type == 'rent' || component.searchForm.type == 'sale';
this.setState('stc_QSE', cnd3fHG);
if (cnd3fHG) { 
let elCI__L = eo('form','Ghef',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties($el)}]},`class`,`d-flex flex-wrap`);

                if (! elCI__L.formHandler) {
                    window.cfrmdlr = elCI__L.formHandler = new FormHandler(elCI__L, component);
                } else {
                    window.cfrmdlr = elCI__L.formHandler;
                }
            let elXpzVz = eo('div','cG0f',null,`class`,`form-group col-md-7 col-xs-12`);
let elDHfVr = ev('input','iQuf',null, eventListeners, {onchange:[function(e) {var $el = this;component.chooseRegion($el.value)}]},`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el_sMZL = eo('datalist','NPLf',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let iifg9T = 'VLSlCdV' + i;
let elmOlBb = eo('option','j6I1cM5QGY4J' + i+iifg9T,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let el1jplv = eo('div','C7pf',null,`class`,`form-group col-md-5 col-xs-12`);
let elT5qg4 = ev('input','auQf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let elw8g6t = eo('div','Bcuf',null,`class`,`form-group col-md-3 col-xs-12`);
let elZKOxB = ev('input','Zk4f',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elb7slO = eo('datalist','WOcf',null,`id`,`typesList`);
for (let i in component.searchForm.propertyTypes) {
let type = component.searchForm.propertyTypes[i]; 
 let ii1XE1 = 'cl_w54r' + i;
let elQMZMQ = eo('option','iS_Eis7_F0Hp' + i+ii1XE1,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elU6gFA = eo('div','lEQf',null,`class`,`form-group col-md-3 col-xs-12`);
let elVnPdt = ev('input','g2Gf',null,`title`,`${trans(`Minimum Number of beds`)}`,`name`,`${(`min_beds`).toInputName()}`,`placeholder`,`${trans(`Min Beds`)}`,`type`,`text`,`list`,`minBeds`,`class`,`form-control`,`id`,`min_beds`);
let elPlzFT = eo('datalist','4nvf',null,`id`,`minBeds`);
for (let i = 0; i <= 10; i++) {
let iiw9k0 = '_hNIeBT' + i;
let elW78jg = eo('option','AMw76WJlLArl' + i+iiw9k0,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elVahr_ = eo('div','DEuf',null,`class`,`form-group col-md-3 col-xs-12`);
let el2AyFA = ev('input','X8If',null,`title`,`${trans(`Maximum number of beds`)}`,`name`,`${(`max_beds`).toInputName()}`,`placeholder`,`${trans(`Max Beds`)}`,`type`,`text`,`list`,`maxBeds`,`class`,`form-control`,`id`,`max_beds`);
let elwUS1V = eo('datalist','pUJf',null,`id`,`maxBeds`);
for (let i = 0; i <= 10; i++) {
let iiPZjG = '9bWNbgA' + i;
let elszZiN = eo('option','SemoRG1tfSw6' + i+iiPZjG,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elfwvpR = eo('div','g4rf',null,`class`,`form-group col-md-3 col-xs-12`);
let elHNxqG = ev('input','YpIf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elArXs4 = eo('datalist','8_xf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iizxEv = 'jpErHpP' + i;
let elCU2yL = eo('option','_8W7VScugV8E' + i+iizxEv,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elqAWg4 = eo('div','hMyf',null,`class`,`form-group col-md-3 col-xs-12`);
let elMaVwC = ev('input','iHCf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elm_3Lb = eo('div','Pqtf',null,`class`,`form-group col-md-3 col-xs-12`);
let el7suTT = ev('input','zNVf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndp5Hu = component.searchForm.chosenRegions.length > 0;
this.setState('stWELAC', cndp5Hu);
if (cndp5Hu) { 
let el78MGe = eo('div','IuVf',null,`class`,`form-group col-12`);
let elhcE52 = eo('ul','LAtf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiCckL = 'nWcTAoU' + index;
let el3KSf5 = eo('li','GEWMS4_0N9kK' + index+iiCckL,null,`class`,`chosen-region-item`);
text(region);
let el9CNk4 = eo('i','ttSff'+iiCckL,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elgW7qX = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elDRTUp = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elaJ6lb = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cndItjV = component.searchForm.type == 'commercial';
this.setState('stkXCLA', cndItjV);
if (cndItjV) { 
let elWteas = eo('form','0wMf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elWteas.formHandler) {
                    window.cfrmdlr = elWteas.formHandler = new FormHandler(elWteas, component);
                } else {
                    window.cfrmdlr = elWteas.formHandler;
                }
            let el3Dl8J = eo('div','1aOf',null,`class`,`form-group col-md-7 col-xs-12`);
let el72a9L = ev('input','HN0f',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Search for locations`)}`,`type`,`text`,`list`,`regionsList`,`class`,`form-control`,`id`,`regions`);
let el_nMCq = eo('datalist','bb4f',null,`id`,`regionsList`);
for (let i in component.searchForm.regions) {
let region = component.searchForm.regions[i]; 
 let ii0iy7 = 'ypU8h_w' + i;
let elp_CCm = eo('option','EleTQLvOerho' + i+ii0iy7,null,`value`,`${ region.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elYmGZu = eo('div','_evf',null,`class`,`form-group col-md-5 col-xs-12`);
let elmhSdE = ev('input','gaKf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let eluD5Ha = eo('div','0gnf',null,`class`,`form-group col-md-3 col-xs-12`);
let elFiLEh = ev('input','8v8f',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elDHxZk = eo('datalist','nVqf',null,`id`,`typesList`);
for (let i in component.getCommercialTypes()) {
let type = component.getCommercialTypes()[i]; 
 let iiQXln = 'IjVf5sd' + i;
let elybOmx = eo('option','lZsttPhcb7Hn' + i+iiQXln,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elj9N7O = eo('div','CcYf',null,`class`,`form-group col-md-2 col-xs-12`);
let elhA5GK = ev('input','R1Jf',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elKKNcF = eo('datalist','oitf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let iiXi1j = 'G6YjHgK' + i;
let elA94sY = eo('option','PfHWjLbc0lqp' + i+iiXi1j,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elFAOva = eo('div','xNQf',null,`class`,`form-group col-md-3 col-xs-12`);
let elGkqlz = ev('input','Itof',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elHkipf = eo('datalist','XsJf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iiU6oY = 'wBj8Gaz' + i;
let el9FKhU = eo('option','d9UqPNMRBZcH' + i+iiU6oY,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elyH75W = eo('div','ECgf',null,`class`,`form-group col-md-2 col-xs-12`);
let elCj3gK = ev('input','R9Uf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elMmMQY = eo('div','7HMf',null,`class`,`form-group col-md-2 col-xs-12`);
let elkcq0K = ev('input','Ngwf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndCQuq = component.searchForm.chosenRegions.length > 0;
this.setState('st73rDW', cndCQuq);
if (cndCQuq) { 
let elQckwY = eo('div','KQPf',null,`class`,`form-group col-12`);
let eljUATc = eo('ul','rv_f',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiYefV = '6McZqNm' + index;
let elwDjeh = eo('li','fkRWU50ETovp' + index+iiYefV,null,`class`,`chosen-region-item`);
text(region);
let elbgzF8 = eo('i','2ZMff'+iiYefV,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elnEbmG = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elc3jF0 = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegionsNames = []; component.searchForm.chosenRegions = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let elCkI9F = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}let cnd5Qxm = component.searchForm.type == 'new-homes';
this.setState('stCy5dE', cnd5Qxm);
if (cnd5Qxm) { 
let elTKhI9 = eo('form','R3Xf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.getProperties(e, $el)}]},`class`,`d-flex flex-wrap`);

                if (! elTKhI9.formHandler) {
                    window.cfrmdlr = elTKhI9.formHandler = new FormHandler(elTKhI9, component);
                } else {
                    window.cfrmdlr = elTKhI9.formHandler;
                }
            let ellgRYk = eo('div','fcVf',null,`class`,`form-group col-md-7 col-xs-12`);
let elhVZuf = ev('input','gODf',null,`title`,`${trans(`Search for a region`)}`,`name`,`${(`regions`).toInputName()}`,`placeholder`,`${trans(`Compounds`)}`,`type`,`text`,`list`,`compoundsList`,`class`,`form-control`,`id`,`regions`);
let elYz3we = eo('datalist','zL5f',null,`id`,`compoundsList`);
for (let i in component.searchForm.compounds) {
let compound = component.searchForm.compounds[i]; 
 let ii3Bgj = '7bkKFfH' + i;
let elv23EZ = eo('option','tmlZk48kjWcF' + i+ii3Bgj,null,`value`,`${ compound.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elzsEkU = eo('div','gJUf',null,`class`,`form-group col-md-5 col-xs-12`);
let el7jysv = ev('input','IvLf',null,`title`,`${trans(`ID of the property`)}`,`name`,`${(`id`).toInputName()}`,`placeholder`,`${trans(`#ID`)}`,`type`,`text`,`class`,`form-control`,`id`,`id`);
ec('div');
let eloXdYl = eo('div','SiVf',null,`class`,`form-group col-md-3 col-xs-12`);
let el26INl = ev('input','Tk5f',null,`title`,`${trans(`type`)}`,`name`,`${(`type`).toInputName()}`,`placeholder`,`${trans(`Type`)}`,`type`,`text`,`list`,`typesList`,`class`,`form-control`,`id`,`type`);
let elmr8SW = eo('datalist','M8Mf',null,`id`,`typesList`);
for (let i in component.getCompoundsTypes()) {
let type = component.getCompoundsTypes()[i]; 
 let ii4ezL = 'xtZ06Pv' + i;
let el9ukXS = eo('option','0zFiKXFlflkv' + i+ii4ezL,null,`value`,`${ type.name }`);
ec('option');
}
ec('datalist');
ec('div');
let elAumtW = eo('div','YLsf',null,`class`,`form-group col-md-2 col-xs-12`);
let elTiULr = ev('input','N1if',null,`title`,`${trans(`Number of rooms`)}`,`name`,`${(`rooms`).toInputName()}`,`placeholder`,`${trans(`Rooms`)}`,`type`,`text`,`list`,`roomsNum`,`class`,`form-control`,`id`,`rooms`);
let elsU7ed = eo('datalist','ZDrf',null,`id`,`roomsNum`);
for (let i = 0; i <= 10; i++) {
let ii3rcP = 'vRHKF2x' + i;
let ell6s0g = eo('option','1oc8xlyQOGgs' + i+ii3rcP,null,`value`,`${ i }`);
ec('option');
}
ec('datalist');
ec('div');
let elVn6eW = eo('div','A9Xf',null,`class`,`form-group col-md-3 col-xs-12`);
let elVrnGV = ev('input','pAZf',null,`title`,`${trans(`Currencies available`)}`,`name`,`${(`currency`).toInputName()}`,`placeholder`,`${trans(`${ component.cache.get('currency') }`)}`,`type`,`text`,`list`,`currencies`,`class`,`form-control`,`id`,`currency`);
let elTMW1K = eo('datalist','iIwf',null,`id`,`currencies`);
for (let i in component.searchForm.currencies) {
let currency = component.searchForm.currencies[i]; 
 let iilxDs = 'KfzuggY' + i;
let elDgAzy = eo('option','BacA9E61bgW9' + i+iilxDs,null,`value`,`${ currency.code }`);
ec('option');
}
ec('datalist');
ec('div');
let elX6bYN = eo('div','zLQf',null,`class`,`form-group col-md-2 col-xs-12`);
let elAJOf0 = ev('input','dyQf',null,`title`,`${trans(`Minimum price`)}`,`name`,`${(`min_price`).toInputName()}`,`placeholder`,`${trans(`Min price`)}`,`type`,`number`,`class`,`form-control`,`id`,`min_price`);
ec('div');
let elHPUq7 = eo('div','vd6f',null,`class`,`form-group col-md-2 col-xs-12`);
let elM2ml3 = ev('input','qpqf',null,`title`,`${trans(`Maximum price`)}`,`name`,`${(`max_price`).toInputName()}`,`placeholder`,`${trans(`Max price`)}`,`type`,`number`,`class`,`form-control`,`id`,`max_price`);
ec('div');
let cndAplo = component.searchForm.chosenRegions.length > 0;
this.setState('st1V8f7', cndAplo);
if (cndAplo) { 
let elRlZxr = eo('div','QHCf',null,`class`,`form-group col-12`);
let el_FVY9 = eo('ul','Rpnf',null,`class`,`list-unstyled d-flex chosen-regions`);
for (let index in component.searchForm.chosenRegionsNames) {
let region = component.searchForm.chosenRegionsNames[index]; 
 let iiyLZc = 'b1s_dwo' + index;
let elDoAdx = eo('li','izJvTp4aAnBR' + index+iiyLZc,null,`class`,`chosen-region-item`);
text(region);
let elE2TVz = eo('i','E82ff'+iiyLZc,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeChosenRegion($el, index)}]},`class`,`fa fa-times`);
ec('i');
ec('li');
}
ec('ul');
ec('div');
}let elxs4p3 = eo('div',null,null,`class`,`form-group col-12 text-right form-actions`);
let elmHrBu = ev('input',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.searchForm.chosenRegions = []; component.searchForm.chosenRegionsNames = []}]},`type`,`reset`,`class`,`modal-btn btn-action mr-auto`);
let el77mgk = ev('input',null,null,`type`,`submit`,`value`,`Search`,`class`,`modal-btn btn-action mr-auto`);
ec('div');
ec('form');
}ec('section');
ec('div');
ec('section');
let elVmO02 = eo('section',null,null,`class`,`properties p-4`);
let elMjLb5 = eo('h2',null,null,`class`,`properties-heading text-center`);
text(`Properties`);
ec('h2');
let cndnIkp = component.loading;
this.setState('stBJ4v7', cndnIkp);
let cndylEf = !component.loading;
this.setState('st62uqP', cndylEf);
if (cndnIkp) { 
let ellnAHW = eo('div','i30f',null,`class`,`d-flex justify-content-center align-items-center`);
let cmpwQcu = this._lc('cctg8KM8E', {parent:component,parentTop:layout,state:'stBJ4v7'});
ec('div');
}let cndEtpZ = !component.loading && component.properties && component.properties.length > 0;
this.setState('stL8oLk', cndEtpZ);
let cndN0Cu = cndylEf;
this.setState('stD6ioQ', cndN0Cu);
if (cndEtpZ) { 
let elV4ScY = eo('div','xmBf',null,`class`,`properties-grid d-flex flex-wrap`);
for (let i in component.properties) {
let property = component.properties[i]; 
 let iimaSc = 'Bwn0NSo' + i;
let eljOQAS = eo('article','qh4vWwCFBtM5' + i+iimaSc,null,`class`,`property-item col-lg-3 col-sm-12`);
let elSYajl = eo('header','ESuff'+iimaSc,null,`class`,`property-header`);
let elCtZ5W = eo('a','VRnff'+iimaSc,null,`href`,`/properties/${ property.old_id }/${
            property.name.split(' ').join('-')
          }`);
let elxsZDw = eo('section','4Zyff'+iimaSc,null,`class`,`property-img`);
let cmpwhHw = this._lc('co9v4bYLY', {parent:component,parentTop:layout,props:{slides:[property.images]},state:'stL8oLk',insideLoop:true,index:"" +iimaSc});
ec('section');
ec('a');
let elrEhYf = eo('section','uF5ff'+iimaSc,null,`class`,`property-metadata`);
let elSdzFK = eo('p','m5Nff'+iimaSc,null,`class`,`property-location absolute-position`);
text( property.region );
ec('p');
let elVo82p = eo('p','CnSff'+iimaSc,null,`class`,`property-type absolute-position`);
text( property.saleType );
ec('p');
let elgVbnH = eo('p','vO3ff'+iimaSc,null,`class`,`property-price absolute-position`);
text(`${ property.price.toLocaleString() } ${ property.currency }`);
ec('p');
ec('section');
ec('header');
let elQ_N29 = eo('main','Otyff'+iimaSc,null,`class`,`property-body`);
let eln05iU = eo('a','BZ6ff'+iimaSc,null,`href`,`/properties/${ property.old_id }/${
            property.name.split(' ').join('-')
          }`);
let elA3Cda = eo('h3','BZZff'+iimaSc,null,`class`,`property-name`);
text( property.name );
ec('h3');
ec('a');
let el3ysGd = eo('div','3mMff'+iimaSc,null,`class`,`property-numbers d-flex justify-content-between`);
let elCxc8d = eo('div','Aqsff'+iimaSc,null,`class`,`property-rooms`);
let eleAJKx = eo('span','VXmff'+iimaSc,null,`title`,`${trans(`Bed rooms`)}`,`class`,`property-beds`);
let el1ZUbG = eo('i','ZBnff'+iimaSc,null,`class`,`fa fa-bed`);
ec('i');
text( property.bed_rooms );
ec('span');
let elyond_ = eo('span','Nbuff'+iimaSc,null,`title`,`${trans(`Bath rooms`)}`,`class`,`property-bath`);
let elgbmCz = eo('i','V1Fff'+iimaSc,null,`class`,`fa fa-bath`);
ec('i');
text( property.bath_rooms );
ec('span');
ec('div');
let elah7Vk = eo('p','xCbff'+iimaSc,null,`class`,`property-id`);
text(`#${ property.id }`);
ec('p');
ec('div');
ec('main');
ec('article');
}
ec('div');
}else if (cndN0Cu) { 
let ely1bth = eo('div',null,null,`class`,`no-response d-flex justify-content-center align-items-center`);
let elYJKOm = eo('p',null,null,`style`,`font-size: 2rem; color: #0f5b97;`);
text(`No properties`);
ec('p');
ec('div');
}ec('section');
}});

                    this.isReadyToGo();
                }
        });