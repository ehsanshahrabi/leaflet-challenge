### Daily Earthquake Data

This project is a web-based visualization of daily earthquake data. It utilizes Leaflet.js and D3.js to create an interactive map that plots earthquakes based on their longitude and latitude. The markers on the map reflect the magnitude of the earthquake through their size and the depth of the earthquake through their color.

![Screenshot 2023-06-19 205134](https://github.com/ehsanshahrabi/leaflet-challenge/assets/124327258/71c254d8-2244-43f5-8035-fc9f87bfd970)


### Project Requirements
Map: The project utilizes Leaflet.js to create a map that displays the earthquake data. A tile layer from OpenStreetMap is added to the map.

Connects to GeoJSON API: The D3.js library is used to connect to the GeoJSON API provided by the United States Geological Survey (USGS).

Markers with size corresponding to earthquake magnitude: The size of each marker on the map is determined by the magnitude of the earthquake. The getMarkerSize() function calculates the marker size based on the magnitude.

A legend showing the depth and their corresponding color: A legend is created using Leaflet's control feature and positioned at the bottom right corner of the map. It provides information about different depth ranges and their corresponding colors.

Data points scale with magnitude level: Each data point on the map scales in size based on the magnitude of the earthquake. The getMarkerSize() function is responsible for determining the size of the marker.

Data points colors change with depth level: The color of each data point on the map changes based on the depth of the earthquake. The getMarkerColor() function assigns different colors to different depth ranges.

Each point has a tooltip with the Magnitude, the location, and depth: Each marker on the map has a tooltip that displays the magnitude, location, and depth of the corresponding earthquake. The tooltip content is set using the bindTooltip() method.

All data points load in the correct locations: The earthquake data is correctly plotted on the map based on their longitude and latitude coordinates.

### File Structure
The project files are organized as follows:

index.html: This file contains the HTML structure of the webpage. It includes the necessary CSS and JavaScript files.

style.css: The CSS file defines the styling rules for the webpage. It includes specific styles for the map and the legend.

logic.js: The JavaScript file handles the logic of the application. It creates the map, loads the earthquake data from the GeoJSON API, generates the legend, and creates the markers with tooltips.

### Usage
To use this project, follow these steps:

Clone the repository or download the project files to your local machine.

Open the index.html file in a web browser.

The webpage will display a map with markers representing earthquake data.

Interact with the map by zooming in or out. Click on the markers to view tooltips with earthquake information.

### Dependencies
This project relies on the following libraries:

Leaflet.js: A JavaScript library for interactive maps. It is used to display the map, load the tile layer, and create the markers and legend. The Leaflet library is included via a CDN in the index.html file.

D3.js: A JavaScript library for data visualization. It is used to fetch the earthquake data from the GeoJSON API. The D3 library is included via a CDN in the index.html file.

### Note: 
This project is for educational purposes and should not be used as a professional or production-ready solution.
