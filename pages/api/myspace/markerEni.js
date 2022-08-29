import { API } from 'aws-amplify';
import { listLocations } from '/graphql/queries';

const markerEni = async (req, res) => {

    const promise = new Promise((resolve, reject) => {

        async function fetchLocations(){

            let eniInformations = []
            let geojson = {
                type: 'FeatureCollection',
                features: []
            }

            await API.graphql({ query: listLocations }).then((res => {
                eniInformations = res.data.listLocations.items
                geojson.features = eniInformations.map(element => {
                    return (
                        {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [element.longitude, element.latitude]
                            },
                            properties: {
                                title: element.name,
                                description: element.name
                            }
                        }
                    )
                });
                resolve({eni : eniInformations, markers : geojson}) 
            }));
        };
        fetchLocations()
    });

    promise.then((resolve) => {
        return res.status(200).json({
            status: 200,
            markers: resolve.markers,
            eni: resolve.eni
        })
    }).catch(() => {
        return res.status(500).json({
            status: 500,
        })
    })
}

export default markerEni