'use strict';

var app = app || {};

(function(module) {
  $('#button').on('click', function(event) {
    event.preventDefault();
    let $checkoutDiv = $('#checkout-div');
    $('div').hide();
    $checkoutDiv.show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json';
    url += '?checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    app.checkout.fetchCheckouts(url);
    app.checkoutView.renderResults();
  });
})(app);
