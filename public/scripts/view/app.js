'use strict';

var app = app || {};

var books = [];


(function(module) {



  function seattleReads(){
    $.ajax({
      url: 'https://data.seattle.gov/resource/tjb6-zsmc.json',
      type: 'GET',
      data: {
        '$limit' : 20,
      }
    })
    .then(data => {
      books = data.map(function(book){
        return book;
      }) ;
      books.sort(function(a, b) {
        return parseFloat(b.checkouts) - parseFloat(a.checkouts);
      });
      console.log(`Retrieved ${books.length} records from the dataset!`)
      postToDom();
    });
  }

  seattleReads();

  function postToDom(){
    let source = $('#checkout-template').html();
    let template = Handlebars.compile(source);

    books.forEach(function(book){
      console.log(book);
      book.title = book.title.replace(/\/.*/, '');
      book.title = book.title.replace(/\[.*?\]/, '');
      let context = {title: `${book.title}`, type: `The medium is: ${book.usageclass}`};
      let html = template(context);
      console.log(html);
      $('#checkout-display').append(html);
    });
  }
})(app);
