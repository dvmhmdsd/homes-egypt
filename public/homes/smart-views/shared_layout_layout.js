_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cwzB_um1A:'header-section',c2jcrteEZ:'footer-section'},
                render: function (component) {
                    let elNuyMK = eo('div',null,null,`id`,`wrapper`);
let cmpz7d9 = this._lc('cwzB_um1A', {parent:component});
let elLS1Rn = eo('main');

        if (this.hasContent()) {
            this.content();
        }ec('main');
let cmpqiKB = this._lc('c2jcrteEZ', {parent:component});
ec('div');

                    this.isReadyToGo();
                }
        });