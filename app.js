const map = L.map('map').setView([-25.7479, 28.2293], 13); // Example: Pretoria, South Africa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers
const locations = [
    { lat: -25.7479, lng: 28.2293, name: "Pretoria" },
    { lat: -26.2041, lng: 28.0473, name: "Johannesburg" },
    { lat: -29.8587, lng: 31.0218, name: "Durban" },
    { lat: -33.9249, lng: 18.4241, name: "Cape Town" },
    { lat: -34.0364, lng: 23.0473, name: "Knysna" }
];

locations.forEach(location => {
    L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
});
