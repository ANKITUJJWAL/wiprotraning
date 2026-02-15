let sessions = new Map();

function login(userId) {
  try {
    if (!userId) throw "Invalid user ID";
    if (sessions.has(userId)) throw "User already logged in";

    sessions.set(userId, new Date());
    console.log("Login recorded:", userId);
  } catch (err) {
    console.error("Error:", err);
  }
}

login(101);
