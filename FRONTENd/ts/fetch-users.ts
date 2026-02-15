// Async function returning Promise<string[]>
async function fetchUsers(): Promise<string[]> {
  // Simulate async operation (e.g., API call)
  return ["A", "B"];
}

// Calling using .then()
fetchUsers()
  .then(users => {
    console.log("Users (then):", users);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Calling using async / await
async function displayUsers() {
  try {
    const users = await fetchUsers();
    console.log("Users (await):", users);
  } catch (err) {
    console.error("Error:", err);
  }
}

displayUsers();
