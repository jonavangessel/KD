$(document).on('click', '.leaflet-popup-content', function () {
    // window.alert("success")

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
