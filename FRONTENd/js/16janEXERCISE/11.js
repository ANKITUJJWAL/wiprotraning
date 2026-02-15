const cities = ["Delhi", "Agra", "Mumbai", "Indore", "Udaipur"];
const vowelCities = cities.filter(c => /^[aeiouAEIOU]/.test(c));
const upperCities = vowelCities.map(c => c.toUpperCase());
upperCities.forEach(c => console.log(c));