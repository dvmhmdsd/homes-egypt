_Component({
                selector: 'singleProperty-page',
                c: 'SinglePropertyPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elA11AA = eo('h1');
text(`singleProperty-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });