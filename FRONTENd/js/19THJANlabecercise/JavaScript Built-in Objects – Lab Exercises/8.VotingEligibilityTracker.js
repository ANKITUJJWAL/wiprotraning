let voters = new Set();

function addVoter(id, dobStr) {
  try {
    if (voters.has(id)) throw "Duplicate voter ID";

    let dob = new Date(dobStr);
    if (isNaN(dob)) throw "Invalid DOB";

    let age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18) throw "Underage voter";

    voters.add(id);
    console.log("Voter added:", id);
  } catch (err) {
    console.error("Error:", err);
  }
}

addVoter(201, "2000-01-01");
