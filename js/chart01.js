let myChart = document.getElementById("myChart-01");
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 14;
let barChart = new Chart(myChart, {
    type: 'pie',
    data: {
        labels: ["Koala", "Galápagos tortoise", "Penguin", "Bison", "Sloth", "Panda", "Manta ray", "Polar bear", "Lion", "Camel"],
        datasets: [{
            data: [100, 200, 300, 400, 500, 500, 400, 300, 200, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(186, 243, 100, 0.2)',
                'rgba(28, 161, 169, 0.2)',
                'rgba(214, 102, 153, 0.2)',
                'rgba(200, 104, 20, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(186, 243, 100, 1)',
                'rgba(28, 161, 169, 1)',
                'rgba(214, 102, 153, 1)',
                'rgba(200, 104, 20, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: "Chart01",
            fontSize: 32
        }
    }
});