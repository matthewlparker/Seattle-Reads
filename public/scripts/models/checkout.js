'use strict';

var app = app || {};

var books = [];
let compiledHtml = [];

(function(module) {

  const checkout = {};

  checkout.fetchCheckouts = function(url){
    $.ajax({
      url: url,
      type: 'GET',
      async: false,
      data: {
        '$limit' : 20,
      }
    })
    .then(data => {
      books = [];
      books = data.map(function(book){
        return book;
      }) ;
      books.sort(function(a, b) {
        return parseFloat(b.checkouts) - parseFloat(a.checkouts);
      });
      console.log(`Retrieved ${books.length} records from the dataset!`);
    })
    .then(() => {
      checkout.toHtml();
    });
  };


  checkout.toHtml = function(){
    let source = $('#checkout-template').html();
    let template = Handlebars.compile(source);
    compiledHtml = [];
    books.forEach(function(book){
      book.title = book.title.replace(/\/.*/, '').replace(/\,.*/, '').replace(/\[.*?\]/, '');
      let context = {title: `${book.title}`, type: `The medium is: ${book.usageclass}`};
      compiledHtml.push(template(context));
    });
    return compiledHtml;
  };

  module.checkout = checkout;
})(app);
