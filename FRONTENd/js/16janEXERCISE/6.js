const names = ["raVi", "AnKiT", "soNu", "PriYa"];
const formatted = names.map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase());
const sortedNames = formatted.sort();
sortedNames.forEach(n => console.log(n));