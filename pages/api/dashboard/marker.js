/**
 * A complete Coordinate Pair consisting of a latitude and longitude
 * @typedef {Object} CoordinatePair
 * @property {number} longitude - longitude coordinate
 * @property {number} latitude - latitude coordinate
 */


const marker = centerCoordinates => {
    const newFeaturesList = [];
    const id = 1;
    const { longitude, latitude } = getCoordinate(centerCoordinates);
    newFeaturesList.push({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
        },
        properties: {
            id,
            name: 'Voiture 1',
            description: 'Votre voiture vous attend',
        },
    });

    return Promise.resolve({
        type: 'FeatureCollection',
        features: newFeaturesList,
    });
};

/**
 * Generates a random point within 0.025 radius of map center coordinates.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {CoordinatePair} randomly generated coordinate pair
 */
const getCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {

    const longitude = -0.471
    const latitude = 46.31

    return { longitude, latitude };
};

export default marker;