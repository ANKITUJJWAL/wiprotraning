const marks = [50, 70, 80, 40, 90];
const totalMarks = marks.reduce((sum, m) => sum + m, 0);
const avg = totalMarks / marks.length;
const aboveAvg = marks.filter(m => m > avg);
console.log("Average:", avg);
console.log("Above Avg:", aboveAvg);