// Empty inventory array
const inventory = [];

// Find product index
function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerName) {
      return i;
    }
  }

  return -1;
}

// Add product
function addProduct(product) {
  const lowerName = product.name.toLowerCase();

  const index = findProductIndex(lowerName);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;

    console.log(`${lowerName} quantity updated`);
  } else {
    inventory.push({
      name: lowerName,
      quantity: product.quantity
    });

    console.log(`${lowerName} added to inventory`);
  }
}

// Remove product
function removeProduct(productName, quantity) {
  const lowerName = productName.toLowerCase();

  const index = findProductIndex(lowerName);

  // Product not found
  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  const product = inventory[index];

  // Not enough quantity
  if (product.quantity < quantity) {
    console.log(
      `Not enough ${lowerName} available, remaining pieces: ${product.quantity}`
    );
    return;
  }

  // Subtract quantity
  product.quantity -= quantity;

  console.log(
    `Remaining ${lowerName} pieces: ${product.quantity}`
  );

  // Remove product if quantity becomes 0
  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}