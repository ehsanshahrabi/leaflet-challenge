// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create the map
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 3,
    });

    // Add the tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "Map data &copy; <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors",
    }).addTo(myMap);

    // Load the data from the API using D3
    d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson").then(function (data) {
        // Function to determine the size of the marker based on magnitude
        function getMarkerSize(magnitude) {
            return magnitude * 5;
        }

        // Function to determine the color of the marker based on depth
        function getMarkerColor(depth) {
            if (depth < 10) {
                return "#00b300"; // Green
            } else if (depth < 30) {
                return "#ffff66"; // Yellow
            } else if (depth < 50) {
                return "#ffcc00"; // Dark Yellow
            } else if (depth < 70) {
                return "#ff8c1a"; // Orange
            } else if (depth < 90) {
                return "#ff3333"; // Light Red
            } else {
                return "#990000"; // Red
            }
        }

        // Create a legend control
        var legend = L.control({ position: "bottomright" });

        // Function to generate the legend content
        legend.onAdd = function () {
            var div = L.DomUtil.create("div", "info legend");
            var depths = [-10, 10, 30, 50, 70, 90];
            var labels = [
                "Depth: < 10 km",
                "Depth: 10 - 30 km",
                "Depth: 30 - 50 km",
                "Depth: 50 - 70 km",
                "Depth: 70 - 90 km",
                "Depth: > 90 km",
            ];

            for (var i = 0; i < depths.length; i++) {
                div.innerHTML +=
                    '<i class="legend-marker" style="background:' +
                    getMarkerColor(depths[i] + 1) +
                    '"></i> ' +
                    labels[i] +
                    "<br>";
            }

            return div;
        };

        // Add the legend to the map
        legend.addTo(myMap);

        // Loop through the earthquake data and create markers
        data.features.forEach(function (feature) {
            var coordinates = feature.geometry.coordinates;
            var magnitude = feature.properties.mag;
            var depth = coordinates[2];
            var place = feature.properties.place;
            var time = new Date(feature.properties.time);

            // Create a marker with size and color based on magnitude and depth
            var marker = L.circleMarker([coordinates[1], coordinates[0]], {
                radius: getMarkerSize(magnitude),
                fillColor: getMarkerColor(depth),
                fillOpacity: 0.7,
                color: "#000",
                weight: 0.5,
            }).addTo(myMap);

            // Create a tooltip for the marker
            marker.bindTooltip(
                "Magnitude: " +
                magnitude +
                "<br>Location: " +
                place +
                "<br>Depth: " +
                depth +
                " km" +
                "<br>Date & Time: " +
                time
            );
        });
    });
});
