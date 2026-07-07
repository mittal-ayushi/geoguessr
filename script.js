const locations = [
    "25.272234,51.421210",
    "40.668083,-73.978557",
    "49.166786,-122.801385",
    "55.761226,37.594540",
    "0.552119,35.306452",
    "-16.696927,-49.265616",
    "-12.015509,-77.084556",
    "-0.173452,-78.476651",
    "9.935848,-84.097897",
    "14.851587,-91.523256",
    "19.451904,-99.185354",
    "43.725187,20.682714",
    "47.066622,15.431666",
    "45.775045,3.100527",
    "40.231208,-3.763879",
    "34.790922,10.757626",
    "6.668074,-1.635519",
    "14.879058,-15.874708",
    "0.316390,32.567749",
    "-1.951056,30.070275",
    "18.772023,98.998754",
    "15.105354,105.861119",
    "11.547146,104.903693",
    "25.031626,121.530959",
    "34.130724,134.517785",
    "35.198413,129.085509",
    "3.212393,101.646219",
    "1.293809,103.837003",
    "-5.462038,122.601999",
    "-37.808428,144.948607",
    "-46.398375,168.375881",
    "53.197116,50.156933",
    "50.451966,30.521440",
    "46.624390,14.312158",
    "38.001498,23.722331",
    "48.811937,9.201428",
    "53.336864,-6.272377",
    "52.470919,-1.896327",
    "38.653047,-121.539730"
];

// Used AI to generate locations and then tested them

let actualLocation = [];

function randomLocation() {

    const random =
        locations[Math.floor(Math.random() * locations.length)];

    // Save the selected coordinates
    actualLocation = random.split(",").map(Number);

    // Google Maps Street View
    const url =
        "https://www.google.com/maps/embed/v1/streetview" +
        "?key=AIzaSyC5671eu0WOtBBmFtrIjuTzgkhBsdF7Z3U" +
        "&location=" + encodeURIComponent(random);

    $("#streetview").attr("src", url);

    console.log(actualLocation); // For testing
}

// Load first location
randomLocation();

// Next button
$("#next").click(function () {
    randomLocation();
});

// MAP PART

/*
document.getElementById("map").addEventListener("click", () => {
    const frame = document.getElementById("mapframe");
    frame.style.display = "block";
    frame.src =
        "https://www.google.com/maps/embed/v1/search?key=&q=" +
        actualLocation.join(",");
});
*/

// GMaps Embed does not support pointers so switched to OSM
// ============= MAP PART ===============
// Implemented in map.js