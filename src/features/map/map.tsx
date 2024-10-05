import {APIProvider, Map} from "@vis.gl/react-google-maps";
import {useEffect, useState} from "react";


export const MapContainer = () => {
    const [location, setLocation] = useState<google.maps.LatLngLiteral | undefined>(undefined);


    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                }
            );
        }
    }, []);

    return (
        <APIProvider apiKey={'AIzaSyDJYJKPGwzXYThwMwSAj_IavKAebYCU-bI'}>
            <Map
                style={{width: '100%', height: '100%'}}
                defaultCenter={location}
                defaultZoom={15}
                gestureHandling={'greedy'}
            />
        </APIProvider>
    );
};


