//spatial points
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    draw: {
        polygon: true,
        marker: true,
        polyline: true,
        rectangle: true,
        circle: true
    },
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);
