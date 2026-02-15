
// ==============================
// CONFIG
// ==============================
const API_URL = "https://697354d0b5f46f8b5826e8c6.mockapi.io/api/v1/employees";

// ==============================
// STATE
// ==============================
let employees: any[] = [];

// ==============================
// DOM REFERENCES
// ==============================
const employeeList = document.getElementById(
  "employeeList",
) as HTMLUListElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const roleInput = document.getElementById("role") as HTMLInputElement;

// ==============================
// READ – Load Employees
// ==============================
async function loadEmployees(): Promise<void> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to load employees");

    employees = await res.json();
    renderEmployees();
  } catch (err) {
    console.error("Failed to load employees", err);
  }
}

// ==============================
// CREATE – Add Employee
// ==============================
async function addEmployee(): Promise<void> {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !email || !role) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role }),
    });

    if (!res.ok) throw new Error("Failed to create employee");

    const newEmployee = await res.json();
    employees.unshift(newEmployee);
    renderEmployees();

    nameInput.value = "";
    emailInput.value = "";
    roleInput.value = "";
  } catch (err) {
    console.error("Failed to add employee", err);
  }
}

// ==============================
// UPDATE – Edit Employee
// ==============================
async function editEmployee(id: string): Promise<void> {
  const employee = employees.find((e) => e.id === id);
  if (!employee) return;

  const newName = prompt("Enter name", employee.name);
  const newEmail = prompt("Enter email", employee.email);
  const newRole = prompt("Enter role", employee.role);

  if (!newName || !newEmail || !newRole) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName,
        email: newEmail,
        role: newRole,
      }),
    });

    if (!res.ok) throw new Error("Failed to update employee");

    await res.json();
    loadEmployees();
  } catch (err) {
    console.error("Update failed", err);
  }
}

// ==============================
// DELETE – Remove Employee
// ==============================
async function deleteEmployee(id: string): Promise<void> {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete employee");

    employees = employees.filter((e) => e.id !== id);
    renderEmployees();
  } catch (err) {
    console.error("Delete failed", err);
  }
}

// ==============================
// RENDER – Display Employees
// ==============================
function renderEmployees(): void {
  employeeList.innerHTML = "";

  employees.forEach((emp) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const info = document.createElement("div");
    info.innerHTML = `
      <strong>${emp.name}</strong><br>
      <small>${emp.email}</small><br>
      <small class="text-muted">${emp.role}</small>
    `;

    const actions = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-sm btn-outline-primary me-2";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editEmployee(emp.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-outline-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteEmployee(emp.id);

    actions.append(editBtn, deleteBtn);
    li.append(info, actions);
    employeeList.appendChild(li);
  });
}

// ==============================
// INITIAL LOAD
// ==============================
loadEmployees();
