// Initial coordinates
let lat = 4.324501;
let lon = 9.739537;

map = L.map('map-canvas', {scrollWheelZoom:false}).setView([lat, lon], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Animals (10)
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
    console.log(queryURL);
    $.ajax({
        method: "GET",
        dataType: "json",
        url: queryURL,
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
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
            let content = JSON.stringify(data.results.bindings[0].comment.value);
            document.getElementById("getComment").innerHTML = content;
        }
    })
});

$(Koala).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Koala dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(GalapagosTortoise).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Galapagos_tortoise dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(Penguin).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Penguin dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(Bison).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Bison dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(Slut).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Sloth dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(Panda).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Panda dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(MantaRay).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Mantaray dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(PolarBear).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Polarbear dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(Lion).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Lion dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});

$(Camel).click(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{dc:Camel dc:isEndangered ?a}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            if(content==='"http://purl.org/dc/elements/1.1/True"'){
                document.getElementById("endangered").innerHTML = "This animal is endangered"
            } else{
                document.getElementById("endangered").innerHTML = "This animal isn't endangered"
            }
        }
    })
});


$(document).ready(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{?a rdf:type dc:land_Animals}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            let bij0 = content.replace("http://purl.org/dc/elements/1.1/",'');
            let content1 = JSON.stringify(data.results.bindings[1].a.value);
            let bij1 = content1.replace("http://purl.org/dc/elements/1.1/",'');
            let content2 = JSON.stringify(data.results.bindings[2].a.value);
            let bij2 = content2.replace("http://purl.org/dc/elements/1.1/",'');
            let content3 = JSON.stringify(data.results.bindings[3].a.value);
            let bij3 = content3.replace("http://purl.org/dc/elements/1.1/",'');
            let content4 = JSON.stringify(data.results.bindings[4].a.value);
            let bij4 = content4.replace("http://purl.org/dc/elements/1.1/",'');
            let content5 = JSON.stringify(data.results.bindings[5].a.value);
            let bij5 = content5.replace("http://purl.org/dc/elements/1.1/",'');
            let content6 = JSON.stringify(data.results.bindings[6].a.value);
            let bij6 = content6.replace("http://purl.org/dc/elements/1.1/",'');
            let content7 = JSON.stringify(data.results.bindings[7].a.value);
            let bij7 = content7.replace("http://purl.org/dc/elements/1.1/",'');
            document.getElementById("land").innerHTML += bij0 ;
            document.getElementById("land").innerHTML += bij1 ;
            document.getElementById("land").innerHTML += bij2 ;
            document.getElementById("land").innerHTML += bij3 ;
            document.getElementById("land").innerHTML += bij4 ;
            document.getElementById("land").innerHTML += bij5 ;
            document.getElementById("land").innerHTML += bij6 ;
            document.getElementById("land").innerHTML += bij7 ;

        }
    })
});

$(document).ready(function() {
    let mysparqlendpoint = "http://localhost:5820/AnimalKingdom/query?query=";
    let endangeredAnimals = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT DISTINCT ?a WHERE{?a rdf:type dc:sea_Animals}";
    $.ajax({
        headers: {
            "Accept": "application/sparql-results+json",
            "Content-type": "application/sparql-results+json"
        },
        method: "GET",
        url: mysparqlendpoint + encodeURI(endangeredAnimals).replace(/#/g, '%23'),
        success: function (data) {
            let content = JSON.stringify(data.results.bindings[0].a.value);
            let bij0 = content.replace("http://purl.org/dc/elements/1.1/",'');
            let content1 = JSON.stringify(data.results.bindings[1].a.value);
            let bij1 = content1.replace("http://purl.org/dc/elements/1.1/",'');
            document.getElementById("sea").innerHTML += bij0 ;
            document.getElementById("sea").innerHTML += bij1 ;
        }
    })
});

