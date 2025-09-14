const pool = require("./db");

const createUser = async (name, email, password, role, address) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password, role, address) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [name, email, password, role, address]
  );
  return result.rows[0];
};

module.exports = { createUser };
