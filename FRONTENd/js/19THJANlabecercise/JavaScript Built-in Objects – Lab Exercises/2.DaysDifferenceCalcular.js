function dateDifference(d1, d2) {
  try {
    let start = new Date(d1);
    let end = new Date(d2);

    if (isNaN(start) || isNaN(end)) throw "Invalid date input";
    if (end < start) throw "End date cannot be earlier";

    let diffDays = (end - start) / (1000 * 60 * 60 * 24);
    console.log("Days Difference:", diffDays);
  } catch (err) {
    console.error("Error:", err);
  }
}

dateDifference("2025-01-01", "2025-01-10");
