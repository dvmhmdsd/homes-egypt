_Component({
                selector: 'test-com',
                c: 'TestCom', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elgV5TL = eo('h1');
text(`test-com component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });