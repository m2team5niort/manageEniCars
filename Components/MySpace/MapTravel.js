import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import useSWR from 'swr'

mapboxgl.accessToken = 'pk.eyJ1IjoibTJ0ZWFtNW5pb3J0IiwiYSI6ImNrenY3cnU1cDI2bW0ycnBlc3BkYXA4bzQifQ.43jtYa8gaX4YoqdCdm7PJQ';
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function MapTravel() {

  const mapContainerRef = useRef(null);
  const { data, error } = useSWR('/api/myspace/markerEni', fetcher)

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-1.618474, 47.2255075],
      zoom: 5.8
    });

    // Marker coordinates
    map.on("load", async () => {
      // add markers to map
      for (const feature of data.markers.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
      }
    });

    return () => map.remove();
  }, [data]);

  return <div className="h-full rounded-lg" ref={mapContainerRef} />;
}