_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['properties'],
                children: {canUUZEIt:'searchform',cUyH77MJl:'properties-list',clBZpDYvG:'layout'},
                render: function (component) {
                    let cmpol27 = this._lc('clBZpDYvG', {parent:component,content:(layout) => {let cmpOUP9 = this._lc('canUUZEIt', {parent:component,parentTop:layout,events:{onsearch:function(e) {let $el = this; component.properties = e}}});
let cmpvJD6 = this._lc('cUyH77MJl', {parent:component,parentTop:layout});
}});

                    this.isReadyToGo();
                }
        });