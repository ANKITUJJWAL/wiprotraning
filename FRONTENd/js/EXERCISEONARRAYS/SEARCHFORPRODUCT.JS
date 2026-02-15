
// 5. Search for a Product
let products = ["Laptop", "Phone", "Tablet"];
let search = "phone";
if (products.map(p => p.toLowerCase()).includes(search.toLowerCase())) {
  console.log("Product found!");
} else {
  console.log("Product not found!");
}


