const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const storeRoutes = require("./routes/store");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
