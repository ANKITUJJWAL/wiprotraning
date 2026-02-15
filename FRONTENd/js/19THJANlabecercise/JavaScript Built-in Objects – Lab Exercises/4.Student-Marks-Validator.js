function averageMarks(marks) {
  try {
    let total = 0;

    marks.forEach(m => {
      let num = Number(m);
      if (isNaN(num) || num < 0 || num > 100)
        throw "Invalid mark: " + m;
      total += num;
    });

    console.log("Average:", total / marks.length);
  } catch (err) {
    console.error("Error:", err);
  }
}

averageMarks([80, 90, 70]);
