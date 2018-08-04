import City from 'models/City';

export const fetchCities = () => {
    return City.find();
};

export const addCity = async (city) => {
    try {
        const newCity = new City(city);
        return await newCity.save();
    } catch(error) {
        return error;
    }
};

export const updateCityById = async (_id, city) => {
    const { n } = await City.update({ _id }, city);
    return n;
};

export const removeCityById = async (_id) => {
    const { n } = await City.deleteOne({ _id });
    return n;
};
