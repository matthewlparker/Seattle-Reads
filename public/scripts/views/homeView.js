'use strict';

var app = app || {};

(function(module){

  const checkoutView = {};
  let elements = [];

  //call this first to make ajax call and populate html array with elements.
  app.checkout.fetchCheckouts();

  //this renders each element to the DOM
  checkoutView.renderResults = function () {
    elements = app.checkout.toHtml();
    console.log('elements', elements);
    elements.forEach(function(el) {
      console.log(el);
      $('#checkout-display').append(el);
    });
  };

  checkoutView.renderResults();

  module.checkoutView = checkoutView;
})(app);
