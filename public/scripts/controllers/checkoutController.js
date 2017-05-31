'use strict';

var app = app || {};

(function(module) {
  const checkoutController = {};
  $('#button').on('click', function(event) {
    event.preventDefault();
    let $checkoutDiv = $('#checkout-div');
    $('div').hide();
    $checkoutDiv.show();

    let url = 'https://data.seattle.gov/resource/tjb6-zsmc.json';
    url += '?checkoutmonth=' + $('#select-month option:selected').attr('value');
    url += '&checkoutyear=' + $('#select-year option:selected').attr('value');
    if($('#select-usage option:selected').attr('value')) url += '&usageclass=' + $('#select-usage option:selected').attr('value');
    app.checkout.fetchCheckouts(url, $('#range-returns').val());
    app.checkoutView.renderResults();

    sortGenre();
  });
      //Following code is template to sort checked out items by genre

  //   let lions = [
  //   {name: 'simba', subject: 'lions are fantastic animals'},
  //   {name: 'sarc', subject: 'scar is a total loser'}
  //   ];
  //
  checkoutController.fiction = [];
  checkoutController.fantasy = [];
  checkoutController.comedy = [];
  checkoutController.romance = [];
  checkoutController.sciFi = [];
  checkoutController.music = [];
  checkoutController.history = [];
  checkoutController.other = [];

  function sortGenre(){
    books.forEach(function(checkout){
      checkoutController.fiction = books.filter(function(checkout){
        return findWord('Fiction').test(checkout.subjects);
      });
      checkoutController.fantasy = books.filter(function(checkout){
        return findWord('Fantasy').test(checkout.subjects);
      });
      checkoutController.comedy= books.filter(function(checkout){
        return findWord('Comedy').test(checkout.subjects);
      });
      checkoutController.romantic = books.filter(function(checkout){
        return findWord('Romantic').test(checkout.subjects);
      });
      checkoutController.sciFi = books.filter(function(checkout){
        return findWord('Sci-Fi').test(checkout.subjects);
      });
      checkoutController.music = books.filter(function(checkout){
        return findWord('Music').test(checkout.subjects);
      });
      checkoutController.music = books.filter(function(checkout){
        return findWord('Songs').test(checkout.subjects);
      });
      checkoutController.history = books.filter(function(checkout){
        return findWord('History').test(checkout.subjects);
      });
      checkoutController.documentary = books.filter(function(checkout){
        return findWord('Documentary').test(checkout.subjects);
      });
      checkoutController.other = books.filter(function(checkout){
        return findWord(!'Other').test(checkout.subjects);
      });
    });
    console.log('Fiction', checkoutController.fiction);
    console.log('Fantasy', checkoutController.fantasy);
    console.log('Comedy', checkoutController.comedy);
    console.log('Romantic', checkoutController.romantic);
    console.log('Sci-Fi', checkoutController.sciFi);
    console.log('Music', checkoutController.music);
    console.log('Songs', checkoutController.music);
    console.log('History', checkoutController.history);
    console.log('Documentary', checkoutController.documentary);
    console.log('Other', checkoutController.other);
    // checkoutController.fiction = books.filter(function(checkout){
    //   return findWord('Fiction').test(checkout.subjects);
    // });
    // console.log(books);
    // console.log(checkoutController.fiction);
    //
    // checkoutController.fiction = books.filter(function(checkout){
    //   return findWord('Romance').test(checkout.subjects);
    // });
    // console.log(checkoutController.romance);
  }
  function findWord(word) {
      // console.log(RegExp(word, 'g'));
    return RegExp(word);
  }

  module.checkoutController = checkoutController;
})(app);
