import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "ssrbooksdb",
  waitForConnections: true,
  connectionLimit: 10
});
