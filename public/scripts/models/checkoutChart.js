'use strict';

var app = app || {};

(function(module){

  const checkoutChart = {};

  checkoutChart.getChart = function (barCanvas, pieCanvas, genreLengths) {
    console.log('chart', pieCanvas);
    let bookTitles = books.map(book => book.title);
    let bookCheckouts = books.map(book => book.checkouts);

    let ctx = document.getElementById(barCanvas).getContext('2d');
    checkoutChart.myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: bookTitles,
        datasets: [{
          label: '# of Checkouts',
          data: bookCheckouts,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

    if(genreLengths) {
      ctx = document.getElementById(pieCanvas).getContext('2d');
      checkoutChart.myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [
            'Fiction',
            'Fantasy',
            'Comedy',
            'Romantic',
            'Sci\-Fi',
            'Music',
            'History',
            'Other'
          ],
          datasets: [{
            data: genreLengths,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ]
          }]
        }
      });
    }
  };

  module.checkoutChart = checkoutChart;
})(app);
