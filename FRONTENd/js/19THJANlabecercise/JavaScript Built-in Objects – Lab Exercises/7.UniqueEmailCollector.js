function collectEmails(emails) {
  try {
    if (emails.length === 0) throw "No emails provided";

    let set = new Set();
    emails.forEach(e => {
      if (!e.includes("@")) throw "Invalid email: " + e;
      set.add(e);
    });

    console.log("Unique Emails:", set);
  } catch (err) {
    console.error("Error:", err);
  }
}

collectEmails(["a@gmail.com", "b@yahoo.com", "a@gmail.com"]);
