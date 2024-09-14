import "leaflet/dist/leaflet.css";
import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Suspense } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [26, 40],
    iconAnchor: [13, 40],
    popupAnchor: [0, -40], tooltipAnchor: [0, -40]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
    return (
        <Suspense>

            <div className=' w-full max-w-3xl -z-0'>
                <MapContainer className='h-96  max-w-3xl ' center={[39.4338, -0.7138]} zoom={10} >
                    <Marker position={[39.40332, -0.77131]}>
                        <Popup>
                            Molino Galán <br /> 46369 Alborache, Valencia, Espagne
                        </Popup>
                    </Marker>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />

                </MapContainer>
            </div>
        </Suspense>

    );
}

export default LeafletMap
