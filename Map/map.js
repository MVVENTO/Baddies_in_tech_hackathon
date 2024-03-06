
	mapboxgl.accessToken = 'pk.eyJ1IjoibXZlbnRvNTUiLCJhIjoiY2xneHNodW0yMDJrZzNmcGpld3dqeDJtcSJ9.UCdoxFzJmkmCMlKpurPQ-g';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-74.0060, 40.7128], // starting position [lng, lat]
        zoom: 15.1, // starting zoom
        pitch: 62, // starting pitch
        bearing: -20 // starting bearing
    });

    map.on('style.load', () => {
        map.addSource('line', {
            type: 'geojson',
            lineMetrics: true,
            data: {
                type: 'LineString',
                coordinates: [
                    [-73.87963014799993, 40.86905853200005],
                    [-74.10549615599997
, 40.573849649000074]
                ]
            }
        });

        map.addLayer({
            id: 'line',
            source: 'line',
            type: 'line',
            paint: {
                'line-width': 12,
                // The `*-emissive-strength` properties control the intensity of light emitted on the source features.
                // To enhance the visibility of a line in darker light presets, increase the value of `line-emissive-strength`.
                'line-emissive-strength': 2.8,
                'line-gradient': [
                    'interpolate',
                    ['linear'],
                    ['line-progress'],
                    0,
                    'red',
                    1,
                    'blue'
                ]
            }
        });
    });

    document
        .getElementById('lightPreset')
        .addEventListener('change', function () {
            map.setConfigProperty('basemap', 'lightPreset', this.value);
        });

    document
        .querySelectorAll('.map-overlay-inner input[type="checkbox"]')
        .forEach((checkbox) => {
            checkbox.addEventListener('change', function () {
                map.setConfigProperty('basemap', this.id, this.checked);
            });
        });
