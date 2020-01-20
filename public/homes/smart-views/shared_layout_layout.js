_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cUEvTulZS:'header-section',cPvx_6Oel:'footer-section'},
                render: function (component) {
                    let elm1bQL = eo('div',null,null,`id`,`wrapper`);
let cmpNV9g = this._lc('cUEvTulZS', {parent:component});
let elAlCm5 = eo('main');

        if (this.hasContent()) {
            this.content();
        }ec('main');
let cmpejrO = this._lc('cPvx_6Oel', {parent:component});
ec('div');

                    this.isReadyToGo();
                }
        });