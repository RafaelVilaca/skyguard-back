const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');
const https = require('https');

dotenv.config();
const cors = require('cors');
const app = express();

app.use(express.json());


app.use(cors());

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080', '*']
}));

const apiKey = '9b712bd3768e44a5b7990ef4335ab615';

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  });

app.post('/getCityNow', async (req, res) => {
    // querendo saber no momento
    const { city } = req.body;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apiKey}`;
    // console.log(apiUrl)
    axiosInstance.get(apiUrl)
        .then(response => {
            const data = response.data;
            res.json(data)
            // const temperature = data.main.temp;
            // const cityName = data.name;
            // res.json(`Temperatura em ${cityName}: ${temperature}°C`);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
});

app.post('/getCityForecast', async (req, res) => {
    // querendo saber por horário
    const { city } = req.body;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&appid=${apiKey}`;
    // console.log(apiUrl)
    axiosInstance.get(apiUrl)
        .then(response => {
            const data = response.data;
            res.json(data)
            // const temperature = data.main.temp;
            // const cityName = data.name;
            // res.json(`Temperatura em ${cityName}: ${temperature}°C`);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
});

app.post('/getPositionNow', async (req, res) => {
    // querendo saber no momento
    const { lat, lon } = req.body;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${apiKey}`;
    // console.log(apiUrl)
    axiosInstance.get(apiUrl)
        .then(response => {
            const data = response.data;
            res.json(data)
            // const temperature = data.main.temp;
            // const cityName = data.name;
            // res.json(`Temperatura em ${cityName}: ${temperature}°C`);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
});

app.post('/getPositionForecast', async (req, res) => {
    // querendo saber por horário
    const { lat, lon } = req.body;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pt_br&appid=${apiKey}`;
    // console.log(apiUrl)
    axiosInstance.get(apiUrl)
        .then(response => {
            const data = response.data;
            res.json(data)
            // const temperature = data.main.temp;
            // const cityName = data.name;
            // res.json(`Temperatura em ${cityName}: ${temperature}°C`);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
});
