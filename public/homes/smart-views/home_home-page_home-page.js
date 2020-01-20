_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['properties'],
                children: {cHvfz4RPt:'searchform',c7mE1PQvK:'properties-list',cW_N2nof8:'layout'},
                render: function (component) {
                    let cmpZ7x0 = this._lc('cW_N2nof8', {parent:component,content:(layout) => {let cmprEr3 = this._lc('cHvfz4RPt', {parent:component,parentTop:layout,events:{onsearch:function(e) {let $el = this; component.properties = e}}});
let cmpMWzB = this._lc('c7mE1PQvK', {parent:component,parentTop:layout});
}});

                    this.isReadyToGo();
                }
        });