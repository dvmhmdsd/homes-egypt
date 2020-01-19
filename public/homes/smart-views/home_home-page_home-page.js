_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['properties'],
                children: {cpcLvFvDz:'searchform',c_F0zKhQo:'properties-list',cylcsGRtG:'layout'},
                render: function (component) {
                    let cmpXq5A = this._lc('cylcsGRtG', {parent:component,content:(layout) => {let cmpc_sb = this._lc('cpcLvFvDz', {parent:component,parentTop:layout,events:{onsearch:function(e) {let $el = this; component.properties = e}}});
let cmpdA0N = this._lc('c_F0zKhQo', {parent:component,parentTop:layout});
}});

                    this.isReadyToGo();
                }
        });