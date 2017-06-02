'use strict';

var app = app || {};

(function(module){

  const checkoutChart = {};

  checkoutChart.getChart = function (barCanvas, pieCanvas, genreLengths) {
    let bookTitles = books.map(book => book.title);
    let bookCheckouts = books.map(book => book.checkouts);

    let ctx = document.getElementById(barCanvas).getContext('2d');
    Chart.defaults.global.defaultFontColor = 'black';
    checkoutChart.myBarChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: bookTitles,
        datasets: [{
          label: '# of Checkouts',
          data: bookCheckouts,
          backgroundColor: [
            'rgba(255,99,132, .8)',
            'rgba(54, 162, 235, .8)',
            'rgba(255, 206, 86, .8)',
            'rgba(75, 192, 192, .8)',
            'rgba(153, 102, 255, .8)',
            'rgba(255, 159, 64, .8)',
            'rgba(255, 99, 132, .8)',
            'rgba(54, 162, 235, .8)',
            'rgba(255, 206, 86, .8)',
            'rgba(75, 192, 192, .8)',
            'rgba(153, 102, 255, .8)',
            'rgba(255, 159, 64, .8)'
          ],
          borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
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
      checkoutChart.myPieChart = new Chart(ctx, {
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
              'rgba(255, 99, 132, .8)',
              'rgba(54, 162, 235, .8)',
              'rgba(255, 206, 86, .8)',
              'rgba(75, 192, 192, .8)',
              'rgba(153, 102, 255, .8)',
              'rgba(255, 159, 64, .8)',
              'rgba(255, 99, 132, .8)',
              'rgba(54, 162, 235, .8)',
            ],
            borderColor: [
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
            ]
          }]
        }
      });
    }
  };

  module.checkoutChart = checkoutChart;
})(app);
