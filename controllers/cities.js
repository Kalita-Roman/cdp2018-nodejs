import CityModel from 'models/mongo/City';

export const fetchCities = CityModel.find({});

