'use strict';

var app = app || {};

var books = [];

let compiledHtml = [];

(function(module) {

  const checkout = {};

  checkout.fetchCheckouts = function(url, num){
    books = [];

    $.ajax({
      url: url,
      type: 'GET',
      async: false,
      data: {
        '$limit' : num,
      }
    })
    .then(data => {
      books = data.map(function(book){
        return book;
      }) ;
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
      let context = {title: `${book.title}`, publisher: `Published by: ${book.publisher}`, type: `The medium is: ${book.materialtype}`, checkouts: `Checkouts: ${book.checkouts}`};
      compiledHtml.push(template(context));
    });
    return compiledHtml;
  };

  module.checkout = checkout;
})(app);
