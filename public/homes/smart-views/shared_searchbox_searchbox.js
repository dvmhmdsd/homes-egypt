_Component({
                selector: 'searchbox',
                c: 'Searchbox', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elm13Xw = eo('h1');
text(`searchbox component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });