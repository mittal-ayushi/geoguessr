
//const actualLocation = [55.761226, 37.594540];

// Create map
const map = L.map("map").setView([20, 0], 2);

// OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
}).addTo(map);

let guessMarker = null;
let actualMarker = null;
let line = null;

map.on("click", function(e){

    // Remove previous guess
    if(guessMarker) map.removeLayer(guessMarker);
    if(actualMarker) map.removeLayer(actualMarker);
    if(line) map.removeLayer(line);

    // User guess marker
    guessMarker = L.marker(e.latlng)
        .addTo(map)
        .bindPopup("Your Guess")
        .openPopup();

    // Actual location marker
    actualMarker = L.marker(actualLocation)
        .addTo(map)
        .bindPopup("Actual Location");

    // Draw line
    line = L.polyline(
        [e.latlng, actualLocation],
        {
            color: "red",
            weight: 3
        }
    ).addTo(map);

    // Zoom out so both markers are visible. or else user cannot see the location
    const bounds = L.latLngBounds([
        e.latlng,
        L.latLng(actualLocation)
    ]);
    map.fitBounds(bounds,{
        padding: [50,50],
        maxZoom: 10,
        animate: true
    })


    const distance = map.distance(
        e.latlng,
        L.latLng(actualLocation)
    );

    document.getElementById("distance").innerHTML =
        `<b>Distance:</b> ${(distance/1000).toFixed(2)} km`;
});

// BUTTON TOGGLE

const mapDiv = document.getElementById("map");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    if (mapDiv.style.display === "none" || mapDiv.style.display === "") {
        mapDiv.style.display = "block";
        toggle.textContent = "Close Map";

        // Fix Leaflet rendering after becoming visible
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    } else {
        mapDiv.style.display = "none";
        toggle.textContent = "Open Map";
    }
});
