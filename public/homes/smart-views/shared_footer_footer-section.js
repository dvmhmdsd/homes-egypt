_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let el9YSMN = eo('footer');
let elxaY81 = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let elIO1VG = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let elbJnq7 = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let el4RKRT = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let elkDC5R = eo('li',null,null,`class`,`column-link-item`);
let eliPuk1 = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elsLFS7 = eo('li',null,null,`class`,`column-link-item`);
let el6LjLG = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let el8QWrz = eo('li',null,null,`class`,`column-link-item`);
let elDdtAp = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let el9_JgC = eo('li',null,null,`class`,`column-link-item`);
let elTAJRX = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let el9NP1M = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let elfgxw7 = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elGKuve = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iiVcFe = 'ZKSEs_A' + i;
let elnZ_jj = eo('li','pTi51wZiV2Vy' + i+iiVcFe,null,`class`,`column-link-item`);
let elJuARo = eo('a','vs3ff'+iiVcFe,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let elsPMrz = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let elBCvg7 = eo('p',null,null,`class`,`site-phone`);
let el8I8SD = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elXbofT = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let elVYD8i = eo('p',null,null,`class`,`site-mail`);
let elqsr36 = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let el9GUI4 = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let elfBODR = eo('p',null,null,`class`,`site-facebook`);
let el3M3_6 = eo('a',null,null,`href`,`${component.info.facebook}`);
let el2qLN6 = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elY7uaI = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let eljeQJW = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let elPvN6b = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });