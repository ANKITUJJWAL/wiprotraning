import express from "express";
import { pool } from "./db/pool.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // form data
app.use(express.static("public"));

app.set("view engine", "ejs");

// ---------------- READ (List)
app.get("/", async (req, res) => {
  const [books] = await pool.query("SELECT * FROM books ORDER BY id DESC");
  res.render("index", { books });
});

// ---------------- CREATE (Form)
app.get("/add", (req, res) => {
  res.render("add");
});

// ---------------- CREATE (Submit)
app.post("/add", async (req, res) => {
  const { title, author, year } = req.body;

  await pool.query(
    "INSERT INTO books(title, author, year) VALUES (?, ?, ?)",
    [title, author, year || null]
  );

  res.redirect("/");
});

// ---------------- UPDATE (Form)
app.get("/edit/:id", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM books WHERE id=?", [
    req.params.id
  ]);

  res.render("edit", { book: rows[0] });
});

// ---------------- UPDATE (Submit)
app.post("/edit/:id", async (req, res) => {
  const { title, author, year } = req.body;

  await pool.query(
    "UPDATE books SET title=?, author=?, year=? WHERE id=?",
    [title, author, year || null, req.params.id]
  );

  res.redirect("/");
});

// ---------------- DELETE
app.get("/delete/:id", async (req, res) => {
  await pool.query("DELETE FROM books WHERE id=?", [req.params.id]);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("SSR CRUD running at http://localhost:3000");
});

