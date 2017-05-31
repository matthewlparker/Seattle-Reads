'use strict';

var app = app || {};

(function(module) {
  const checkoutController = {};
  $('#button').on('click', function(event) {
    event.preventDefault();
    $('div').hide();
    $('#checkout-display').empty();
    $('#checkout-div').show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json';
    url += '?checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    if($('#select-usage option:selected').attr('value')) url += '&usageclass=' + $('#select-usage option:selected').attr('value');
    app.checkout.fetchCheckouts(url, $('#range-returns').val());
    app.checkoutView.renderResults();

    app.checkoutChart.myChart.destroy();
    app.checkoutChart.getChart('checkoutCanvas');
    sortGenre();
  });

  let genres = ['Fiction', 'Fantasy', 'Comedy', 'Romantic', 'Sci\-Fi', 'Music', 'History'];
  let genresRegExp = RegExp(genres.join('|'), 'g');
  console.log(genresRegExp);
  checkoutController.other = [];

  function sortGenre(){
    books.forEach(function(checkout){
      if(!checkout.subjects){
        checkoutController.other.push(checkout)
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

  }

  module.checkoutController = checkoutController;
})(app);
