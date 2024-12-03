# Simple Map Application

A beginner-friendly web application that uses Leaflet.js to display an interactive map with markers. This project demonstrates basic web mapping functionalities, including adding markers and displaying popups for specific locations.

## Features
- Interactive map with zooming and panning capabilities.
- Custom markers for points of interest.
- Popups with information about each location.
- Built using HTML5, CSS3, and JavaScript.

## Technologies Used
- Leaflet.js: A lightweight JavaScript library for interactive maps.
- OpenStreetMap Tiles: Free and customizable map tiles.
- HTML5, CSS3, JavaScript: Core web technologies.

#  Getting Started
## Installation

1. Clone this repository:
``` bash
git clone https://github.com/your-username/simple-map-app.git  
cd simple-map-app  
```
2. Open index.html in your preferred web browser.

## How It Works
The map is initialized using Leaflet.js and displays several points of interest on an interactive map. The following locations are included by default:

- Pretoria
- Johannesburg
- Durban
- Cape Town
- Knysna
  
You can click on any marker to view additional information in a popup.

# Code Highlights
## Initialize the Map
```javascript
const map = L.map('map').setView([-25.7479, 28.2293], 13);  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  
    attribution: '© OpenStreetMap contributors'  
}).addTo(map);  
Add Markers with Popups
```

## Add Markers with Popups

```javascript
locations.forEach(location => {  
    L.marker([location.lat, location.lng])  
        .addTo(map)  
        .bindPopup(`<b>${location.name}</b>`);  
});
```
