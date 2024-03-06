mapboxgl.accessToken = 'pk.eyJ1IjoibXZlbnRvNTUiLCJhIjoiY2xneHNodW0yMDJrZzNmcGpld3dqeDJtcSJ9.UCdoxFzJmkmCMlKpurPQ-g';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-74.0060, 40.7128],
        zoom: 13
    });

    // Add the control to the map.
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
