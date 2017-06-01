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
      // books.sort(function(a, b) {
      //   console.log(books);
      //   return parseFloat(b.checkouts) - parseFloat(a.checkouts);
      // });
      // cut out elements in array after num
      // books = books.splice(0, num);
      console.log(books);
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
      let context = {title: `${book.title}`, type: `The medium is: ${book.usageclass}`, checkouts: `Number of checkouts: ${book.checkouts}`};
      compiledHtml.push(template(context));
    });
    return compiledHtml;
  };

  module.checkout = checkout;
})(app);
