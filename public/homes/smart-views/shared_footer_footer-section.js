_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let elJACR5 = eo('footer');
let el5e6da = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let eloM5tl = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let elAd0jr = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let eloIzMe = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let elGWDIR = eo('li',null,null,`class`,`column-link-item`);
let elpy2_s = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elye6t0 = eo('li',null,null,`class`,`column-link-item`);
let elkfaf4 = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let elAZE9B = eo('li',null,null,`class`,`column-link-item`);
let elfZlvK = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let elnnx0X = eo('li',null,null,`class`,`column-link-item`);
let elozez3 = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let elVzZsH = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let el735iw = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elVOPGQ = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iiY0sD = 'EA85eEN' + i;
let elgBJux = eo('li','0oLidZWUvLrW' + i+iiY0sD,null,`class`,`column-link-item`);
let elLWZ3s = eo('a','9maff'+iiY0sD,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let elYzwFY = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let el7Fa42 = eo('p',null,null,`class`,`site-phone`);
let elMO9I1 = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elLpJe2 = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let elUPByc = eo('p',null,null,`class`,`site-mail`);
let elyiSa2 = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elkKf1Z = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let elyrE04 = eo('p',null,null,`class`,`site-facebook`);
let elc6Wcp = eo('a',null,null,`href`,`${component.info.facebook}`);
let elvo3eR = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elcwWKF = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let elnu3lk = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let elZJSRh = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });