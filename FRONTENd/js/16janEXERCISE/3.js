const prices = [100, 250, 400, 50];
const discounted = prices.map(p => p * 0.9);
const sortedPrices = discounted.sort((a, b) => a - b);
sortedPrices.forEach(p => console.log(p));