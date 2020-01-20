_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let elkAKia = eo('footer');
let elpC0aC = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let elhpkcO = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let elP93D1 = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let elPP1jm = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let el6aham = eo('li',null,null,`class`,`column-link-item`);
let elkuW6B = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elXZjgr = eo('li',null,null,`class`,`column-link-item`);
let elO7I62 = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let elZNSso = eo('li',null,null,`class`,`column-link-item`);
let elzowLc = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let el8WLhr = eo('li',null,null,`class`,`column-link-item`);
let eldd2WO = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let elmdFxx = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let elb0gq2 = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elEr0G2 = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iiHWcU = 'u0gAmoE' + i;
let elY2Wm5 = eo('li','hYYDVL2tZLoG' + i+iiHWcU,null,`class`,`column-link-item`);
let el0q9Ri = eo('a','6YCff'+iiHWcU,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let elbSB8z = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let el0i5Hd = eo('p',null,null,`class`,`site-phone`);
let eliFuGv = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let ellEnEC = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let elzdLqk = eo('p',null,null,`class`,`site-mail`);
let els9o0k = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elwbSXf = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let elm_qaZ = eo('p',null,null,`class`,`site-facebook`);
let elaLNaB = eo('a',null,null,`href`,`${component.info.facebook}`);
let elxo56G = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elsB78A = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let el7XT8R = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let elwtkR4 = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });