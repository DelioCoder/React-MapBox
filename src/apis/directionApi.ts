import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoic291bGRlYXRoMDIiLCJhIjoiY2t5dnNtNnFqMDFwdDJvbzJwdGhxYXNpayJ9.dsMcAOKc8Anhj6e1ZQ6LyA'
    }
});

export default directionsApi;