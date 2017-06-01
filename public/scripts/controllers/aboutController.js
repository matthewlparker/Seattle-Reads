'use strict';

var app = app || {};

(function(module) {

  let aboutController = {};

  aboutController.initAbout = function(){
    $('div').hide();
    $('#about-div').show();
    app.aboutView.renderResults();
  };


  module.aboutController = aboutController;
})(app);

