// Initialize your map with Leaflet.js and set it to University of Washington, Seattle
var map = L.map('map').setView([47.655548, -122.303200], 13);

// Add a tile layer to the map (Mapbox Streets layer)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; OpenStreetMap contributors, CC-BY-SA, Imagery © Mapbox',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2xpcDM2IiwiYSI6ImNrbGQwbHkyODQzeXAyd3Vpbm0zcmtjZjMifQ.CP1WgT3qS4809VGPhGElJA' // replace with your Mapbox access token
}).addTo(map);

// Add a contextmenu event listener (right-click)
map.on('contextmenu', function(e) {
    // Get the geographic coordinates from the event
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    // Construct the prefilled form URL
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfVshvKF-CHQbuy5o5L9Nauy-FqD2KJpu0sn2pl6h9fKU5deA/viewform?usp=pp_url';
    formUrl += '&entry.1616384067=' + lat;
    formUrl += '&entry.163963794=' + lng;

    // Create a popup at the clicked location with a link to the form
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('<a href="' + formUrl + '" target="_blank">Submit a Contribution</a>')
        .openOn(map);
});