import CityModel from 'models/mongo/City';

export const fetchCities = CityModel.find();

export const addCity = async (city) => {
    const newCity = new CityModel(city);
    return await newCity.save();
};

export const updateCityById = async (_id, city) => {
    const { n } = await CityModel.update({ _id }, city);
    return n;
};

export const removeCityById = async (_id) => {
    const { n } = await CityModel.deleteOne({ _id });
    return n;
};
