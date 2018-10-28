var myChart = document.getElementById("myChart-01");
Chart.defaults.global.defaultFontColor = 'white';
var barChart = new Chart(myChart, {
    type: 'horizontalBar',
    data: {
        labels: ["Animal1", "Animal2", "Animal3", "Animal4", "Animal5", "Animal6"],
        datasets: [{
            data: [100, 200, 300, 400, 500, 600],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            text: "Chart01",
            fontSize: 32
        }
    }
});