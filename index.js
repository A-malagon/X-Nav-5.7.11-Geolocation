$(document).ready(function() {
    
    
    $(".location").click(get_Location);
    
    //La API de geolocalización se publica a través del objeto navigator.geolocation,si éxito vamos showPosition, si fallo
    //escribimos en el innerHTML del identificador.
    function get_Location() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(show_map);
        } else { 
            document.getElementById('texto').innerHTML = 'Tu navegador no soporta la API de geolocalizacion.';
        }
    }

    function show_map(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        var map = L.map('map').setView([lat, long], 14);
        map = map.setZoomAround([lat, long], 14);
        
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

        attribution: '&copy; <a href="http://osm.org/copyright">MiUbicación</a>',}).addTo(map);

        var marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup("Tu Posición").openPopup();

        document.getElementById('texto').innerHTML = "LATITUD: " + lat + " /    LONGITUD: " + long;
    }

});
