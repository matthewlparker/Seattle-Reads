'use strict';

var app = app || {};

(function(module){

  const checkoutView = {};

  //this renders each element to the DOM
  checkoutView.renderResults = function () {
    compiledHtml.forEach(function(el) {
      console.log(el);
      $('#checkout-display').append(el);
    });
  };

  module.checkoutView = checkoutView;
})(app);
