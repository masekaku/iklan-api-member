const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

const ads = JSON.parse(fs.readFileSync('./ads.json', 'utf-8'));

// Route untuk API iklan
app.get('/api/ads', (req, res) => {
  const site = req.query.site;

  if (!site || !ads[site]) {
    return res.status(404).json({ error: "Iklan tidak ditemukan untuk site ini." });
  }

  res.json(ads[site]);
});

// Route halaman utama
app.get('/', (req, res) => {
  res.send('API Iklan Aktif');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ad Server jalan di port ${port}`);
});