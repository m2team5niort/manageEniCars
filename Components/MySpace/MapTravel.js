import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibTJ0ZWFtNW5pb3J0IiwiYSI6ImNrenY3cnU1cDI2bW0ycnBlc3BkYXA4bzQifQ.43jtYa8gaX4YoqdCdm7PJQ';

export default function MapTravel() {

    const mapContainerRef = useRef(null);
    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-0.464777, 46.323716],
            zoom: 6
        });

        // Marker coordinates
        const geojson = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-1.618474, 47.2255075]
                },
                properties: {
                  title: 'Mapbox',
                  description: 'Washington, D.C.'
                }
              },
            ]
          };
        

        map.on("load", async () => {
            // add markers to map
            for (const feature of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';
            
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
            }
        });

        return () => map.remove();
    }, []);

    return <div className="h-full rounded-lg" ref={mapContainerRef} />;
}