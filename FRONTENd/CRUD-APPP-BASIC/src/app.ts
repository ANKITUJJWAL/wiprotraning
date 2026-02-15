// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Local state
let users: any[] = [];

// DOM references
const userList = document.getElementById("userList") as HTMLUListElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

// ------------------------------
// READ – Fetch users
// ------------------------------
async function fetchUsers(): Promise<void> {
  try {
    const res = await fetch(API_URL);
    users = await res.json();

    // Limit to first 5 users
    users = users.slice(0, 5);

    renderUsers();
  } catch (err) {
    console.error("Failed to fetch users", err);
  }
}

// ------------------------------
// CREATE – Add user
// ------------------------------
function addUser(): void {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please enter name and email");
    return;
  }

  const newUser = {
    id: Date.now(), // local ID
    name,
    email,
  };

  users.unshift(newUser);
  renderUsers();

  nameInput.value = "";
  emailInput.value = "";
}

// ------------------------------
// UPDATE – Edit user
// ------------------------------
function updateUser(id: number): void {
  const user = users.find((u) => u.id === id);
  if (!user) return;

  const newName = prompt("Enter new name", user.name);
  if (!newName) return;

  user.name = newName;
  renderUsers();
}

// ------------------------------
// DELETE – Remove user
// ------------------------------
function deleteUser(id: number): void {
  const confirmed = confirm("Are you sure you want to delete?");
  if (!confirmed) return;

  users = users.filter((u) => u.id !== id);
  renderUsers();
}

// ------------------------------
// Render users
// ------------------------------
function renderUsers(): void {
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${user.name} (${user.email})</span>
      <div>
        <button onclick="updateUser(${user.id})">Edit</button>
        <button onclick="deleteUser(${user.id})">Delete</button>
      </div>
    `;

    userList.appendChild(li);
  });
}

// ------------------------------
// Initial load
// ------------------------------
fetchUsers();

