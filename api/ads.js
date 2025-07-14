const ads = require('../ads.json');

export default function handler(req, res) {
  const { site } = req.query;

  if (!site || !ads[site]) {
    return res.status(404).json({ error: "Iklan tidak ditemukan untuk site ini." });
  }

  res.status(200).json(ads[site]);
}