import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoic291bGRlYXRoMDIiLCJhIjoiY2t5dnNtNnFqMDFwdDJvbzJwdGhxYXNpayJ9.dsMcAOKc8Anhj6e1ZQ6LyA'
    }
});

export default searchApi;