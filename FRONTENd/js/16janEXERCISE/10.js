const cart = [100, 200, 300];
const withTax = cart.map(p => p * 1.05);
const total = withTax.reduce((sum, p) => sum + p, 0);
const sortedCart = withTax.sort((a, b) => a - b);
console.log("Sorted Cart:", sortedCart);
console.log("Total Payable:", total);