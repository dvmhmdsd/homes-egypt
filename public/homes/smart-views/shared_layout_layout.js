_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cue79Pwo4:'header-section',c5UsNjjQf:'footer-section'},
                render: function (component) {
                    let el6PRp1 = eo('div',null,null,`id`,`wrapper`);
let cmpYdlt = this._lc('cue79Pwo4', {parent:component});
let elDfApo = eo('main');

        if (this.hasContent()) {
            this.content();
        }ec('main');
let cmp2XNL = this._lc('c5UsNjjQf', {parent:component});
ec('div');

                    this.isReadyToGo();
                }
        });