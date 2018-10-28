$( document ).ready(function () {
    let dynamicData = [];

    let mysparqlendpoint = "http://localhost:5820/ProjectAnimals/query?query=";

    let mysparqlquery_landAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT (COUNT(*) AS ?a) WHERE{?a rdf:type dc:land_Animals}";
    let mysparqlquery_seaAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT (COUNT(*) AS ?a) WHERE{?a rdf:type dc:sea_Animals}";

    // land_Animals
    $.ajax({
        headers: {
            "Accept":"application/sparql-results+json",
            "Content-type":"application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(mysparqlquery_landAnimals).replace(/#/g, '%23'),
        success: function (data) {
            dynamicData += JSON.stringify(data.results.bindings[0].a.value);
        }
    });

    // sea_Animals
    $.ajax({
        headers: {
            "Accept":"application/sparql-results+json",
            "Content-type":"application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(mysparqlquery_seaAnimals).replace(/#/g, '%23'),
        success: function (data) {
            dynamicData += JSON.stringify(data.results.bindings[0].a.value);
            console.log(dynamicData)
        }
    });

});

let myChart = document.getElementById("myChart-01");
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 14;
let barChart = new Chart(myChart, {
    type: 'pie',
    data: {
        labels: ["Koala", "Galápagos tortoise", "Penguin", "Bison", "Sloth", "Panda", "Manta ray", "Polar bear", "Lion", "Camel"],
        datasets: [{
            data: [82, 200, 300, 400, 500, 500, 400, 300, 200, 100],
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