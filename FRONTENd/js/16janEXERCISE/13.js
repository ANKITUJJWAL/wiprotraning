const sentences = ["  Hello!!  ", "  Welcome*** ", " JS@@ "];
const clean = sentences.map(s => s.trim().replace(/[^a-zA-Z ]/g, ""));
clean.forEach(s => console.log(s));