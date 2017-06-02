'use strict';

var app = app || {};

(function(module) {
  let checkoutController = {};
  let genreLengths = [];


  checkoutController.initCheckout = function(){
    $('div').hide();
    $('#checkout-display').empty();
    $('.canvas-size').show();
    $('.canvas-pie-size').show();
    $('#checkout-div').show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC';
    url += '&checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    if($('#select-type option:selected').attr('value')) url += '&materialtype=' + $('#select-type option:selected').attr('value');
    app.checkout.fetchCheckouts(url, $('#range-returns').val());
    app.checkoutView.renderResults();

    sortGenre();

    app.checkoutChart.myBarChart.destroy();
    if(app.checkoutChart.myPieChart) app.checkoutChart.myPieChart.destroy();
    app.checkoutChart.getChart('checkoutBarCanvas', 'checkoutPieCanvas', genreLengths);
    if($('#chart-button').attr('visible') === '1') $('#checkoutPieCanvas').hide();
  };


  let genres = ['Fiction', 'Fantasy', 'Comedy', 'Romantic', 'Sci\-Fi', 'Music', 'History'];
  let genresRegExp = RegExp(genres.join('|'), 'g');
  checkoutController.other = [];

  function sortGenre(){

    checkoutController.Fiction = [];
    checkoutController.Fantasy = [];
    checkoutController.Comedy = [];
    checkoutController.Romantic = [];
    checkoutController['sci\-fi'] = [];
    checkoutController.Music = [];
    checkoutController.History = [];
    checkoutController.other= [];

    books.forEach(function(checkout){
      if(!checkout.subjects){
        checkoutController.other.push(checkout);
      } else {
        let matches = checkout.subjects.match(genresRegExp);
        if(matches){
          matches.forEach(function(genre){
            if(!checkoutController[genre]){
              checkoutController[genre] = [];
            }
            checkoutController[genre].push(checkout);
          });
        } else {
          checkoutController.other.push(checkout);
        }
      }
    });
    genreLengths = [
      checkoutController.Fiction.length,
      checkoutController.Fantasy.length,
      checkoutController.Comedy.length,
      checkoutController.Romantic.length,
      checkoutController['sci\-fi'].length,
      checkoutController.Music.length,
      checkoutController.History.length,
      checkoutController.other.length
    ];
  }

  module.checkoutController = checkoutController;
})(app);
