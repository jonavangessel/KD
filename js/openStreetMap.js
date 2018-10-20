// Initial coordinates
let lat = 4.324501;
let lon = 9.739537;

map = L.map('map-canvas', {scrollWheelZoom:false}).setView([lat, lon], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Animals
Koala = L.marker([-26.38, 135.24]).bindPopup("<h1 class='popup-header'>Koala</h1><br/><img src='img/koala.jpeg' width='300px'/>").addTo(map);
GalapagosTortoise = L.marker([-0.63, -90.36]).bindPopup("<h1 class='popup-header'>Galápagos tortoise</h1><br/><img src='img/galapagos_tortoise.jpeg' width='300px'/>").addTo(map);
Penguin = L.marker([-73.25, 18.10]).bindPopup("<h1 class='popup-header'>Penguin</h1><br/><img src='img/penguin.jpeg' width='300px'/>").addTo(map);
Bison = L.marker([38.20, -101.35]).bindPopup("<h1 class='popup-header'>Bison</h1><br/><img src='img/bison.jpeg' width='300px'/>").addTo(map);
Slut = L.marker([-5.70, -59.19]).bindPopup("<h1 class='popup-header'>Sloth</h1></br><img src='img/sloth.jpeg' width='300px'/>").addTo(map);
Panda = L.marker([28.23, 110.86]).bindPopup("<h1 class='popup-header'>Panda</h1><br/><img src='img/panda.jpeg' width='300px'/>").addTo(map);
MantaRay = L.marker([-5.70, 119.29]).bindPopup("<h1 class='popup-header'>Manta ray</h1><br/><img src='img/manta_ray.jpeg' width='300px'/>").addTo(map);
PolarBear = L.marker([64.74, -69.03]).bindPopup("<h1 class='popup-header'>Polar bear</h1><br/><img src='img/polar_bear.jpeg' width='300px'/>").addTo(map);
Lion = L.marker([-20.72, 23.72]).bindPopup("<h1 class='popup-header'>Lion</h1><br/><img src='img/lion.jpeg' width='300px'/>").addTo(map);
Camel = L.marker([23.16, 7.56]).bindPopup("<h1 class='popup-header'>Camel</h1><br/><img src='img/camel.jpeg' width='300px'/>").addTo(map);

$(Koala).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Koala'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(GalapagosTortoise).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Eukaryote . ?animal rdfs:label 'Galápagos tortoise'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(Penguin).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Band . ?animal rdfs:label 'Penguin'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(Bison).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Bison'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(Slut).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Sloth'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});


$(Panda).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Giant panda'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(MantaRay).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Fish . ?animal rdfs:label 'Manta ray'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(PolarBear).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Polar bear'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(Lion).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Lion'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

$(Camel).click(function () {
    let mysparqlendpoint = "http://dbpedia.org/sparql?query=";
    let mysparqlquery = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX dbo: <http://dbpedia.org/ontology/> SELECT DISTINCT ?animal ?comment WHERE { ?animal rdf:type dbo:Mammal . ?animal rdfs:label 'Camel'@en . ?animal dbo:abstract ?comment FILTER (lang(?comment) = 'en') }";
    let queryURL = mysparqlendpoint+encodeURI(mysparqlquery).replace(/#/g, '%23');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data);
            document.getElementById("col-comment").innerHTML = content;
        }
        // let content = data.results.bindings.0.comment.value;
        // console.log(content);
        // let obj = JSON.parse(data);
        // let result = obj.comment;
        //
    })
});

