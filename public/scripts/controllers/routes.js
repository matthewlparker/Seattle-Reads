'use strict';

page('/', app.homeController.defaultResults);
page('/checkouts', app.checkoutController.initCheckout);
page('/about', app.aboutController.initAbout);


page();
