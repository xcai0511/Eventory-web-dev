import React, { useState, useEffect } from 'react';
import { loadGoogleMapsAPI } from 'google-maps-react';

function Map({ address }) {
    console.log(process.env.MAP_API_KEY);
    const [googleMaps, setGoogleMaps] = useState(null);
    const [mapComponent, setMapComponent] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    // Load the Google Maps API and initialize the map component and geocoder
    useEffect(() => {
        loadGoogleMapsAPI({ apiKey: process.env.MAP_API_KEY }).then((googleMaps) => {
            setGoogleMaps(googleMaps);
            const map = new googleMaps.Map(document.getElementById('map'), {
                center: { lat: 37.7749, lng: -122.4194 },
                zoom: 12,
            });
            setMapComponent(map);
            setGeocoder(new googleMaps.Geocoder());
        });
    }, []);

    // Update the coordinates when the address prop changes
    useEffect(() => {
        if (geocoder) {
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK') {
                    const location = results[0].geometry.location;
                    setCoordinates({ lat: location.lat(), lng: location.lng() });
                }
            });
        }
    }, [geocoder, address]);

    // Update the map center when the coordinates change
    useEffect(() => {
        if (mapComponent && coordinates) {
            mapComponent.setCenter(coordinates);
            new googleMaps.Marker({ position: coordinates, map: mapComponent });
        }
    }, [mapComponent, coordinates]);

    // Render the component
    return (
        <div>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
    );
}

export default Map;