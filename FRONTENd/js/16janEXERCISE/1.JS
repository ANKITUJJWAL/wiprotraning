
const marks = [35, 55, 28, 40, 67, 90];
console.log("Original Marks:", marks);

const graceMarks = marks.map(mark => mark + 5);
console.log("After Grace Marks:", graceMarks);

const passedStudents = graceMarks.filter(mark => mark >= 40);
console.log("Passed Students:", passedStudents);

console.log("Final Marks (forEach):");
passedStudents.forEach(mark => console.log(mark));
