import express from "express";

const app = express();

// View engine
app.set("view engine", "ejs");

// Static files (CSS, images, JS)
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    message: "Hello from SSR Express"
  });
});

// Books page (sample data)
app.get("/books", (req, res) => {
  const books = [
    { title: "Node", author: "John" },
    { title: "Express", author: "Alice" }
  ];

  res.render("books", { books });
});

app.listen(3000, () => {
  console.log("SSR app running on http://localhost:3000");
});
