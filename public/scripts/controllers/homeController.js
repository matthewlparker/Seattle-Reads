'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.defaultResults = function() {
    let $homeDiv = $('#home-div');
    $('#about-div').hide();
    $('#checkout-div').hide();
    $homeDiv.show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC';
    url += '&checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    app.checkout.fetchCheckouts(url, 10);
    app.homeView.renderResults();
    app.checkoutChart.getChart('homeCanvas');
  };

  homeController.defaultResults();
  module.homeController = module;
})(app);
