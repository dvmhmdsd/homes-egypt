_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['properties'],
                children: {cGgF2s6PQ:'searchform',c_uywkjox:'properties-list',cyAfehz16:'layout'},
                render: function (component) {
                    let cmp9BRI = this._lc('cyAfehz16', {parent:component,content:(layout) => {let cmpSNC3 = this._lc('cGgF2s6PQ', {parent:component,parentTop:layout,events:{onsearch:function(e) {let $el = this; component.properties = e}}});
let cmphuQL = this._lc('c_uywkjox', {parent:component,parentTop:layout});
}});

                    this.isReadyToGo();
                }
        });