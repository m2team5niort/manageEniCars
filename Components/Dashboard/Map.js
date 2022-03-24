import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibTJ0ZWFtNW5pb3J0IiwiYSI6ImNrenY3cnU1cDI2bW0ycnBlc3BkYXA4bzQifQ.43jtYa8gaX4YoqdCdm7PJQ';

export default function Map() {

    const mapContainerRef = useRef(null);
    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-0.464777, 46.323716],
            zoom: 6
        });

        // add navigation control (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        map.on("load", async () => {
            // Popup
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h3 style='color: blue; font-size: 1rem; font-weight: 700'>Voiture 1</h3>
                <p>Votre voiture vous attend</p>
                <a href="/dashboard/voiture">Voir la voiture</a>
                `
            );

            // Marker
            const marker1 = new mapboxgl.Marker({ color: 'red' })
                .setLngLat([-1.6923924, 48.0389214])
                .setPopup(popup)
                .addTo(map);

            const marker2 = new mapboxgl.Marker({ color: 'blue' })
                .setLngLat([-0.4712765, 46.3161752])
                .setPopup(popup)
                .addTo(map);
        });

        return () => map.remove();
    }, []);

    return <div className="h-96 mt-6" ref={mapContainerRef} />;
}