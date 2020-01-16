_Component({
                selector: 'singleproperties',
                c: 'Singleproperties', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elqjEnv = eo('h1');
text(`singleproperties component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });