const express = require("express");
const router = express.Router();

const stores = [
  { id: 1, name: "Shop A", address: "123 Street", rating: 4.5 },
  { id: 2, name: "Shop B", address: "456 Road", rating: 3.8 }
];

// GET all stores
router.get("/", (req, res) => {
  res.json(stores);
});

module.exports = router;
