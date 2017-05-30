'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.defaultResults = function() {
    let $homeDiv = $('#home-div');
    $('#checkout-div').hide();
    $homeDiv.show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json';
    url += '?checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    app.checkout.fetchCheckouts(url);
    app.homeView.renderResults();
  };

  homeController.defaultResults();
  module.homeController = module;
})(app);
