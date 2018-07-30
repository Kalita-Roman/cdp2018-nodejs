import {
    fetchCities,
    addCity,
    removeCityById,
    updateCityById
} from 'controllers/cities';

export const getCities = async (req, res) => {
    const cities = await fetchCities();
    res.status(200).json(cities);
};

export const postCities = async (req, res) => {
    const city = await addCity(req.body);
    res.status(200).json(city);
};

export const putCityById = async (req, res) => {
    const { body, params: { id }} = req;
    const city = await updateCityById(id, body);
    res.status(200).json(city);
};

export const deleteCityById = async (req, res) => {
    const { id } = req.params;
    const deletedItemsCount = await removeCityById(id);
    return res.status(200).json({ deletedItemsCount });
};
