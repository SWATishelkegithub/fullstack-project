const express = require("express");
const router = express.Router();
const { createUser } = require("../models/userModel");

router.post("/signup", async (req, res) => {
  const { name, email, password, role, address } = req.body;
  try {
    const user = await createUser(name, email, password, role || "user", address);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
