'use strict';

var app = app || {};

(function(module){

  const homeView = {};

  homeView.renderResults = function () {
    compiledHtml.forEach(function(el) {
      $('#home-display').append(el);
    });
  };

  module.homeView = homeView;
})(app);
