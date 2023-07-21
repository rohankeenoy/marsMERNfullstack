const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// API endpoint URL
const API_URL = 'https://api.nasa.gov/insight_weather/?api_key=ryanIfbPQG5xLfwWbGrMnEqAROCFJCVGYqNvanZt&feedtype=json&ver=1.0';

console.log("hello server")
// Route to fetch data from NASA API and send it to the frontend
app.get('/api/mars-weather', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data from NASA API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
