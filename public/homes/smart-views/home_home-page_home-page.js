_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['properties'],
                children: {crsAfONW9:'searchform',ccAlKRdgU:'properties-list',culQ5fQ2x:'layout'},
                render: function (component) {
                    let cmpuAMa = this._lc('culQ5fQ2x', {parent:component,content:(layout) => {let cmp8k8W = this._lc('crsAfONW9', {parent:component,parentTop:layout,events:{onsearch:function(e) {let $el = this; component.properties = e}}});
let cmpsmqZ = this._lc('ccAlKRdgU', {parent:component,parentTop:layout});
}});

                    this.isReadyToGo();
                }
        });