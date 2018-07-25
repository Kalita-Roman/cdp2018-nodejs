import getRandomCity from 'controllers/randomCity';

export default async function randomCity(req, res) {
    const city = await getRandomCity();
    res.status(200).json(city);
}