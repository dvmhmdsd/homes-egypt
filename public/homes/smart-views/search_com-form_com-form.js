_Component({
                selector: 'com-form',
                c: 'ComForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elCTxzg = eo('h1');
text(`com-form component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });