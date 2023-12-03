// MapComponent.tsx
import React, { useState } from 'react';
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';

interface MapComponentProps {
    srcLat: number | null;
    srcLng: number | null;
    destLat: number | null;
    destLng: number | null;
}

const containerStyle = {
    width: '100%',
    height: '25rem'
};

const center = {
    lat: 40.735657,
    lng: -74.172363
};

const MapComponent: React.FC<MapComponentProps> = ({ srcLat, srcLng, destLat, destLng }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });

    const [map, setMap] = useState(null);

    const onLoad = React.useCallback((map: any) => setMap(map), [])

    const onUnmount = React.useCallback(() => setMap(null), []);

    const markers = [
        { lat: srcLat, lng: srcLng, label: 'Origin' },
        { lat: destLat, lng: destLng, label: 'Destination' }
    ];

    const path = [
        { lat: srcLat, lng: srcLng },
        { lat: destLat, lng: destLng }
      ].filter(point => point.lat !== null && point.lng !== null)
      .map(point => ({ lat: point.lat!, lng: point.lng! }));

    if (!isLoaded) return <><div>Loading...</div></>;

    return (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                    disableDefaultUI: true,
                }}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {markers.map((marker) => (
                    marker.lat && marker.lng &&
                    <Marker
                        key={marker.label}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        label={marker.label}
                    />
                ))}

                {path.length === 2 && <Polyline path={path} options={{ strokeColor: '#FF0000' }} />}
            </GoogleMap>
        </>
    );
};

export default MapComponent;
