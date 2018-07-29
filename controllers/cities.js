import CityModel from 'models/mongo/City';

export const fetchCities = CityModel.find({});

export const addCity = async (city) => {
    console.log('>>> addCity', city);
    return city;
};

export const updateCityById = async (id, city) => {
    console.log('>>> updateCityById', id, city);
    return city;
};

export const removeCityById = async (id) => {
    console.log('>>> updateCityById', id);
    return id;
};
