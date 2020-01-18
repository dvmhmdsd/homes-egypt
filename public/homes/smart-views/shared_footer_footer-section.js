_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let elcSUPb = eo('footer');
let elZQUjE = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let eldTltd = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let eltEklY = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let elL2bBy = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let elr7bfJ = eo('li',null,null,`class`,`column-link-item`);
let elkWdo6 = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elaiHCm = eo('li',null,null,`class`,`column-link-item`);
let el4MJQj = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let el_1nve = eo('li',null,null,`class`,`column-link-item`);
let elUO1yv = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let elXZCQ3 = eo('li',null,null,`class`,`column-link-item`);
let el_qRf8 = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let elMLjpl = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let elFiV1b = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elNym72 = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iib1q6 = 'JkGSt1t' + i;
let elvcxGc = eo('li','jupG5agrgToD' + i+iib1q6,null,`class`,`column-link-item`);
let elloQMW = eo('a','0EOff'+iib1q6,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let el16TSx = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let elMs3jq = eo('p',null,null,`class`,`site-phone`);
let elWcetC = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elQzg3S = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let elM3Xvl = eo('p',null,null,`class`,`site-mail`);
let elWgqEd = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elJ84oy = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let elbqbqZ = eo('p',null,null,`class`,`site-facebook`);
let elUnF50 = eo('a',null,null,`href`,`${component.info.facebook}`);
let el2nNpN = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elfta4y = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let elClx1o = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let elGXq8T = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });