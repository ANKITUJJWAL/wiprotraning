"use strict";
// ==============================
// CONFIG
// ==============================
const API_URL = "http://localhost:3000/api/v1/books";
// ==============================
// STATE
// ==============================
let books = [];
// ==============================
// DOM REFERENCES
// ==============================
const bookList = document.getElementById("bookList");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
// ==============================
// READ – Load Books
// ==============================
async function loadBooks() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok)
            throw new Error("Failed to load books");
        books = await res.json();
        renderBooks();
    }
    catch (err) {
        console.error("Failed to load books", err);
    }
}
// ==============================
// CREATE – Add Book
// ==============================
async function addBook() {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();
    if (!title || !author || !year) {
        alert("All fields are required");
        return;
    }
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, author, year }),
        });
        if (!res.ok)
            throw new Error("Failed to create book");
        const newBook = await res.json();
        books.unshift(newBook);
        renderBooks();
        titleInput.value = "";
        authorInput.value = "";
        yearInput.value = "";
    }
    catch (err) {
        console.error("Failed to add book", err);
    }
}
// ==============================
// UPDATE – Edit Book
// ==============================
async function editBook(id) {
    console.log("ID RECEIVED:", id);
    const book = books.find((e) => Number(e.id) === Number(id));
    if (!book)
        return;
    id = Number(id);
    const newTitle = prompt("Enter title", book.title);
    const newAuthor = prompt("Enter author", book.author);
    const newYear = Number(prompt("Enter year", book.year));
    if (!newTitle || !newAuthor || isNaN(newYear))
        return;
    try {
        // const res = await fetch(`${API_URL}${id}`, {
        const res = await fetch(`${API_URL}/${String(id).replace("/", "")}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: newTitle,
                author: newAuthor,
                year: newYear,
            }),
        });
        if (!res.ok)
            throw new Error(await res.text());
        await res.json();
        loadBooks();
    }
    catch (err) {
        console.error("Update failed", err);
    }
}
// ==============================
// DELETE – Remove Book
// ==============================
async function deleteBook(id) {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete)
        return;
    id = Number(id);
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        if (!res.ok)
            throw new Error("Failed to delete book");
        books = books.filter((b) => Number(b.id) !== Number(id));
        renderBooks();
    }
    catch (err) {
        console.error("Delete failed", err);
    }
}
// ==============================
// RENDER – Display Books
// ==============================
function renderBooks() {
    bookList.innerHTML = "";
    books.forEach((book) => {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center";
        const info = document.createElement("div");
        info.innerHTML = `
      <strong>${book.title}</strong><br>
      <small>${book.author}</small><br>
      <small class="text-muted">${book.year}</small>
    `;
        const actions = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-sm btn-outline-primary me-2";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editBook(book.id);
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-outline-danger";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteBook(book.id);
        actions.append(editBtn, deleteBtn);
        li.append(info, actions);
        bookList.appendChild(li);
    });
}
// ==============================
// INITIAL LOAD
// ==============================
loadBooks();
