// Initial coordinates
var lat = 4.324501;
var lon = 9.739537;

map = L.map('map-canvas').setView([lat, lon], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

var firefoxIcon = L.icon({
    iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
    iconSize: [38, 95], // size of the icon
    popupAnchor: [0,-15]
});

// Animals
Koala = L.marker([-26.38, 135.24], {icon: firefoxIcon}).addTo(map);
GalapagosTortoise = L.marker([-0.63, -90.36]).addTo(map);
Penguin = L.marker([-73.25, 18.10]).addTo(map);
Bizon = L.marker([38.20, -101.35]).addTo(map);
Slut = L.marker([-5.70, -59.19]).addTo(map);
Panda = L.marker([28.23, 110.86]).addTo(map);
MantaRay = L.marker([-5.70, 119.29]).addTo(map);
PolarBear = L.marker([64.74, -69.03]).addTo(map);
Lion = L.marker([-20.72, 23.72]).addTo(map);
Camel = L.marker([23.16, 7.56]).addTo(map);

Koala.bindPopup("Koala");
GalapagosTortoise .bindPopup("Galaápagos tortoise ");
Penguin.bindPopup("Penguin");
Bizon.bindPopup("Bizon");
Slut.bindPopup("Sloth");
Panda.bindPopup("Panda");
MantaRay.bindPopup("Manta ray");
PolarBear.bindPopup("Polar bear");
Lion.bindPopup("Lion");
Camel.bindPopup("Camel");

