_Component({
                selector: 'loading',
                c: 'Loading', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elx2DBt = eo('div',null,null,`class`,`loader`);
ec('div');

                    this.isReadyToGo();
                }
        });