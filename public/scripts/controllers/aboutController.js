'use strict';

var app = app || {};

(function(module) {
  let aboutController = {};
    aboutController.initAbout = function(){

    $('div').hide();
    $('#about-display').empty();
    $('#about-div').show();

    $('#about-div').append("<img src='./public/images/IMG951723.jpg' />");
    $('#about-div').append("<img src='./public/images/me.jpg' />");
    $('#about-div').append("<img src='./public/images/ryanturner.jpg' />");
    $('#about-div').append("<img src='./public/images/mathewcmartin.jpg' />");
    };

    module.aboutController =aboutController;
  })(app);
