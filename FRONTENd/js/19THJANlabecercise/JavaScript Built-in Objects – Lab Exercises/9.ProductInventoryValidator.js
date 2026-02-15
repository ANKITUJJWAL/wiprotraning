let inventory = new Map();

function updateStock(id, qty) {
  try {
    let quantity = Number(qty);
    if (isNaN(quantity) || quantity < 0)
      throw "Invalid quantity";

    inventory.set(id, quantity);
    console.log("Stock updated:", id);
  } catch (err) {
    console.error("Error:", err);
  }
}

updateStock("P101", 50);
