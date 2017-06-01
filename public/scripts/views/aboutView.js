'use strict';

var app = app || {};

(function(module){

  const aboutView = {};

  //this renders each element to the DOM
  aboutView.renderResults = function () {
    $('#about-div').append("<img src='./images/IMG951723.jpg' />");
    $('#about-div').append("<img src='./images/Me.jpg' />");
    $('#about-div').append("<img src='./images/ryanturner.jpg' />");
    $('#about-div').append("<img src='./images/mathewcmartin.jpg' />");
  };

  module.aboutView = aboutView;
})(app);
