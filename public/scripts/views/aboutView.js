'use strict';

var app = app || {};

(function(module){

  const aboutView = {};

  //this renders each element to the DOM
  aboutView.renderResults = function () {
    compiledHtml.forEach(function(el) {
      $('#about-display').append(el);
    });
  };

  module.aboutView = aboutView;
})(app);
