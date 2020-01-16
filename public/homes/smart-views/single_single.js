_Component({
                selector: 'single',
                c: 'Single', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elL1egO = eo('h1');
text(`single component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });