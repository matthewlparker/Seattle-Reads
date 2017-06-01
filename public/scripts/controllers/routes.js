'use strict';

page('/', app.homeController.defaultResults);
page('/checkout', app.checkoutController.initCheckout);

page();
