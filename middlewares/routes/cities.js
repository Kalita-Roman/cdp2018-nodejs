import {
    fetchCities,
} from 'controllers/cities';

export const getCities = async (req, res) => {
    const cities = await fetchCities;
    res.status(200).json(cities);
};

