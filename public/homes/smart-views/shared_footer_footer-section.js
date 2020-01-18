_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let eldE8xc = eo('footer');
let el0uWUY = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let elc3u_5 = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let elmmBN3 = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let eliEW6x = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let elIB4Nk = eo('li',null,null,`class`,`column-link-item`);
let el0StHw = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elJSWkK = eo('li',null,null,`class`,`column-link-item`);
let elDSXVK = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let el0o_OE = eo('li',null,null,`class`,`column-link-item`);
let elxnpcj = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let elqAZl4 = eo('li',null,null,`class`,`column-link-item`);
let elCT9Uz = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let elabhTr = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let elkyAvp = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elMBktQ = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iiCsa7 = 'Z0iAVL_' + i;
let elwBVEP = eo('li','lUIDWUWWqQXU' + i+iiCsa7,null,`class`,`column-link-item`);
let elHme3a = eo('a','1dTff'+iiCsa7,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let elqkHXW = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let eluruNy = eo('p',null,null,`class`,`site-phone`);
let elKZ1rj = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let el9K4aE = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let elhmWnn = eo('p',null,null,`class`,`site-mail`);
let ela3ZP5 = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elcu_9i = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let elpz_kg = eo('p',null,null,`class`,`site-facebook`);
let elRNAnm = eo('a',null,null,`href`,`${component.info.facebook}`);
let elSyO9E = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elUAGx7 = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let el9gl4J = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let elP8PE6 = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });