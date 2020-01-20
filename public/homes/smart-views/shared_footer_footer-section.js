_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let elMASIS = eo('footer');
let el2KPDW = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let eljtDG_ = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let elfF7wx = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let elMC65k = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let el0yftb = eo('li',null,null,`class`,`column-link-item`);
let elHV9Jv = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elFxzHK = eo('li',null,null,`class`,`column-link-item`);
let elqsYpg = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let ele_GSo = eo('li',null,null,`class`,`column-link-item`);
let elpAbQU = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let elOwDvd = eo('li',null,null,`class`,`column-link-item`);
let el0ak4d = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let elYS56Y = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let eluW67I = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elLsWZG = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iiv5k2 = 'fuD2jIc' + i;
let elkPyv2 = eo('li','RTtjk4Mx56NY' + i+iiv5k2,null,`class`,`column-link-item`);
let elqbAD2 = eo('a','gEIff'+iiv5k2,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let elQdbkg = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let elr9W90 = eo('p',null,null,`class`,`site-phone`);
let elQgfSS = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let eldU3dQ = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let eln0go6 = eo('p',null,null,`class`,`site-mail`);
let elVVwJ4 = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let el_OmZC = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let elVXgrQ = eo('p',null,null,`class`,`site-facebook`);
let el410xm = eo('a',null,null,`href`,`${component.info.facebook}`);
let elDHmFZ = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elIuj71 = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let elS71vr = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let el1BaLu = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });