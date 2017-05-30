'use strict';

var app = app || {};

(function(module){

  const homeView = {};

  //this renders each element to the DOM
  homeView.renderResults = function () {
    compiledHtml.forEach(function(el) {
      console.log(el);
      $('#home-display').append(el);
    });
  };

  module.homeView = homeView;
})(app);
