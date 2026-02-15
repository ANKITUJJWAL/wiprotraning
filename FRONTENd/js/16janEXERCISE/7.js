const orders = [200, 800, 1200, 450, 600];
const eligible = orders.filter(o => o > 500);
const finalBill = eligible.reduce((sum, o) => sum + o, 0);
eligible.forEach(o => console.log(o));
console.log("Final Bill:", finalBill);