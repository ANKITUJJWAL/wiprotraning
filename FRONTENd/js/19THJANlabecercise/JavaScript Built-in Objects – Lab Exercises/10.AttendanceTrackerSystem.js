function markAttendance(attendees, dateStr) {
  try {
    let date = new Date(dateStr);
    if (isNaN(date)) throw "Invalid date";

    let attendance = new Set();

    attendees.forEach(a => {
      if (attendance.has(a)) throw "Duplicate attendance: " + a;
      attendance.add(a);
    });

    console.log("Date:", date.toDateString());
    console.log("Attendance Count:", attendance.size);
  } catch (err) {
    console.error("Error:", err);
  }
}

markAttendance(["Ravi", "Anita", "Ravi"], "2025-04-01");
