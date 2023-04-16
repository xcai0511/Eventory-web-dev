import React from 'react';
import GoogleMapReact from 'google-map-react';
import { loadGoogleMapsAPI } from 'google-maps-api-loader';

const Map = ({ center, zoom}) => {
    const Marker = () => <div style={{ color: 'red' }}>Marker</div>;
    return (
        <div style={{height: '400px', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'MAPS_API_KEY'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker lat={center.lat} lng={center.lng}/>
            </GoogleMapReact>
        </div>
    );
};

export default Map;