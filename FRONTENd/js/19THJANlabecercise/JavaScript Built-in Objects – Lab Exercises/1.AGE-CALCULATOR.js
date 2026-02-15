function calculateAge(dobString) {
  try {
    let dob = new Date(dobString);
    let today = new Date();

    if (dob.getTime() !== dob.getTime()) {
  throw new Error("Invalid date");
}

    if (dob > today) {
      throw new Error("Future date");
    }

    let age = today.getFullYear() - dob.getFullYear();

    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    console.log("Age:", age);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

calculateAge("2000-05-10");
calculateAge("kank-an-va");
calculateAge("2050-01-01");