_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cmuCzv024:'header-section',cPYbsapv_:'footer-section'},
                render: function (component) {
                    let elGcIaX = eo('div',null,null,`id`,`wrapper`);
let cmptiNG = this._lc('cmuCzv024', {parent:component});
let eltqrsS = eo('main');

        if (this.hasContent()) {
            this.content();
        }ec('main');
let cmpHMNW = this._lc('cPYbsapv_', {parent:component});
ec('div');

                    this.isReadyToGo();
                }
        });