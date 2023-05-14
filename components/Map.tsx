
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const apiKey = process.env.apiKey

const Map = () => {


    return (
        <MapContainer
            center={[48.148343, -103.62088]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            attributionControl={false}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxla3NhbWFyamFub3YiLCJhIjoiY2wxNzg4OWdnNGNsdTNjcnB0eTUyaTFpZyJ9.Gb0b3LdcSTevZuB-w1ipCA`}
            />
            <Marker
                position={[48.148343, -103.62088]}
                // @ts-ignore
                dragabble={true} >
                <Popup>501 Main Street</Popup>

            </Marker>
        </MapContainer>
    )
}

export default Map
