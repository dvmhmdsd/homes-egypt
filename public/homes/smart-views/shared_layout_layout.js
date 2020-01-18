_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cQKomGgLP:'header-section',cV8ywSLyI:'footer-section'},
                render: function (component) {
                    let elq2uN0 = eo('div',null,null,`id`,`wrapper`);
let cmpBiJA = this._lc('cQKomGgLP', {parent:component});
let elZbHN3 = eo('main');

        if (this.hasContent()) {
            this.content();
        }ec('main');
let cmp3q59 = this._lc('cV8ywSLyI', {parent:component});
ec('div');

                    this.isReadyToGo();
                }
        });