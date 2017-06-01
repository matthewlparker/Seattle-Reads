'use strict';

var app = app || {};

(function(module) {
  let checkoutController = {};
  let genreLengths = [];


  checkoutController.initCheckout = function(){
    $('div').hide();
    $('#checkout-display').empty();
    $('#checkout-div').show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC';
    url += '&checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    if($('#select-type option:selected').attr('value')) url += '&materialtype=' + $('#select-type option:selected').attr('value');
    app.checkout.fetchCheckouts(url, $('#range-returns').val());
    app.checkoutView.renderResults();

    sortGenre();

    app.checkoutChart.myChart.destroy();
    console.log(genreLengths);
    app.checkoutChart.getChart('checkoutBarCanvas', 'checkoutPieCanvas', genreLengths);
  };


  let genres = ['Fiction', 'Fantasy', 'Comedy', 'Romantic', 'Sci\-Fi', 'Music', 'History'];
  let genresRegExp = RegExp(genres.join('|'), 'g');
  checkoutController.other = [];

  function sortGenre(){

    //let checkoutController = {};
    checkoutController.Fiction = [];
    checkoutController.Fantasy = [];
    checkoutController.Comedy = [];
    checkoutController.Romantic = [];
    checkoutController['sci\-fi'] = [];
    checkoutController.music = [];
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
    console.log(checkoutController);
    genreLengths = [
      checkoutController.Fiction.length,
      checkoutController.Fantasy.length,
      checkoutController.Comedy.length,
      checkoutController.Romantic.length,
      checkoutController['sci\-fi'].length,
      checkoutController.music.length,
      checkoutController.other.length
    ];
  }

  module.checkoutController = checkoutController;
})(app);
