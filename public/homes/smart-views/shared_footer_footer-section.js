_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['featuredRegions','info'],
                children: {},
                render: function (component) {
                    let eljXvyl = eo('footer');
let elQX4rb = eo('section',null,null,`class`,`main-footer d-flex justify-content-around p-6 flex-wrap`);
let elzSqbw = eo('article',null,null,`class`,`main-footer-column mb-1 col-lg-4 col-sm-12`);
let elMNgX_ = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Quick Links`);
ec('h2');
let elMkQl6 = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
let elyFPkb = eo('li',null,null,`class`,`column-link-item`);
let elQQdVT = eo('a',null,null,`href`,`/`);
text(`Home`);
ec('a');
ec('li');
let elm2KHJ = eo('li',null,null,`class`,`column-link-item`);
let el6RtAy = eo('a',null,null,`href`,`/?sale_type=rent`);
text(`Renting`);
ec('a');
ec('li');
let elBInmC = eo('li',null,null,`class`,`column-link-item`);
let el2E2Xb = eo('a',null,null,`href`,`/?sale_type=commercial`);
text(`Commercial`);
ec('a');
ec('li');
let elaheOU = eo('li',null,null,`class`,`column-link-item`);
let elq4FkJ = eo('a',null,null,`href`,`/?sale_type=sale`);
text(`Buying`);
ec('a');
ec('li');
ec('ul');
ec('article');
let elad5Sj = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 mb-3`);
let elvhwLA = eo('h2',null,null,`class`,`footer-column-heading text-left`);
text(`Popular Locations`);
ec('h2');
let elZM1Z5 = eo('ul',null,null,`class`,`column-links list-unstyled text-left`);
for (let i in component.featuredRegions) {
let region = component.featuredRegions[i]; 
 let iigItn = 'uZqughM' + i;
let elN8nJu = eo('li','iEy3e57Knrvb' + i+iigItn,null,`class`,`column-link-item`);
let elW9LFX = eo('a','q3Fff'+iigItn,null,`href`,`/?regions[]=${region.id}`);
text(`Properties for rent in ${region.name}`);
ec('a');
ec('li');
}
ec('ul');
ec('article');
let eluDuOj = eo('article',null,null,`class`,`main-footer-column col-lg-4 col-sm-12 social-contact text-left`);
let el95sVy = eo('p',null,null,`class`,`site-phone`);
let eljAcl2 = eo('a',null,null,`href`,`tel:${component.info.phone}`);
let elDGreH = eo('i',null,null,`class`,`fas fa-phone-alt`);
ec('i');
text(component.info.phone);
ec('a');
ec('p');
let elmCqYc = eo('p',null,null,`class`,`site-mail`);
let elFpA3B = eo('a',null,null,`href`,`mailto:${component.info.email}`);
let elyxPL9 = eo('i',null,null,`class`,`fas fa-envelope`);
ec('i');
text(component.info.email);
ec('a');
ec('p');
let el1RF4r = eo('p',null,null,`class`,`site-facebook`);
let elxzuQh = eo('a',null,null,`href`,`${component.info.facebook}`);
let elQP5pa = eo('i',null,null,`class`,`fab fa-facebook`);
ec('i');
text(`Homes Egypt`);
ec('a');
ec('p');
ec('article');
ec('section');
let elkfZOd = eo('section',null,null,`class`,`copy d-flex justify-content-center align-items-center p-1`);
let elkmn2S = eo('p',null,null,`class`,`mb-0`);
text(`© 2020`);
let elJK2rn = eo('a',null,null,`href`,`/`);
text(`CI`);
ec('a');
text(`- All rights reserved`);
ec('p');
ec('section');
ec('footer');

                    this.isReadyToGo();
                }
        });