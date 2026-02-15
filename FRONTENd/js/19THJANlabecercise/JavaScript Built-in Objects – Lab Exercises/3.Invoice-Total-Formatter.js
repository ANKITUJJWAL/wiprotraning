function calculateTotal(prices) {
  try {
    if (prices.length === 0) throw "Empty price list";

    let total = 0;
    prices.forEach(p => {
      let num = Number(p);
      if (isNaN(num)) throw "Invalid number: " + p;
      total += num;
    });

    console.log("Total:", total.toFixed(2));
  } catch (err) {
    console.error("Error:", err);
  }
}

calculateTotal(["100.5", "200", "50"]);
