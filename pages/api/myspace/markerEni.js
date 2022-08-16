const markerEni = async (req, res) => {

    const eniInformations = [
        {
            id: 0,
            coordinates: [-1.618474, 47.2255075],
            title: 'Eni Nantes',
            description: 'Eni de Nantes',
            address: '3 Rue Michael Faraday,',
            zip: '44800 Saint-Herblain',

        },
        {
            id: 1,
            coordinates: [-1.692148, 48.0389],
            title: 'Eni Rennes',
            description: 'Eni de Rennes',
            address: 'ZAC de, La Conterie, 8 Rue Léo Lagrange,',
            zip: '35131 Chartres-de-Bretagne',

        },
        {
            id: 2,
            coordinates: [-0.471298, 46.31596],
            title: 'Eni Niort',
            description: 'Eni de Niort',
            address: '19 Av. Léo Lagrange Bâtiment B et C,',
            zip: '79000 Niort',

        },
        {
            id: 3,
            coordinates: [-4.08379, 47.97731],
            title: 'Eni Quimper',
            description: 'Eni de Quimper',
            address: '2 Rue Georges Perros,',
            zip: '29000 Quimper',

        },
    ]

    let geojson = {
        type: 'FeatureCollection',
        features: []
    };

    geojson.features = eniInformations.map(element => {
        return (
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: element.coordinates
                },
                properties: {
                    title: element.title,
                    description: element.description
                }
            }
        )
    });

    return res.status(200).json({
        status: 200,
        markers: geojson,
        eni: eniInformations
    })
}

export default markerEni