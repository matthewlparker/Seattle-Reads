'use strict';

var app = app || {};

(function(module) {
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

      //Following code is template to sort checked out items by genre

  //   let lions = [
  //   {name: 'simba', description: 'lions are fantastic animals'},
  //   {name: 'sarc', description: 'scar is a total loser'}
  //   ];
  //
  // let heroes = [];
  //
  //   function fantasticLions(){
  //     heroes = lions.filter(function(lion){
  //       return findWord('fantastic').test(lion.description);
  //     });
  //     console.log(heroes);
  //   }
  //
  //   function findWord(word) {
  //     // console.log(RegExp(word, 'g'));
  //     return RegExp(word);
  //   }
  //
  //   fantasticLions();


  });
})(app);
