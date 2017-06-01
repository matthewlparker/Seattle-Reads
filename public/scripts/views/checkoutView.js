'use strict';

var app = app || {};

(function(module){

  const checkoutView = {};

  //this renders each element to the DOM
  checkoutView.renderResults = function () {
    compiledHtml.forEach(function(el) {
      $('#checkout-display').append(el);
    });
  };

  $('#chart-button').on('click', function() {
    if($('#chart-button').attr('visible') === '1') {
      $('#chart-button').attr('visible', '0');
      $('#checkoutBarCanvas').hide();
      $('#checkoutPieCanvas').show();
      $('#chart-button').text('Checkouts');
    } else {
      $('#chart-button').attr('visible', '1');
      $('#checkoutPieCanvas').hide();
      $('#checkoutBarCanvas').show();
      $('#chart-button').text('Genres');
    }
  });

  module.checkoutView = checkoutView;
})(app);
