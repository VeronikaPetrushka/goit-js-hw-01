function getShippingMessage(country, price, deliveryFee) {
  totalPrice = price + deliveryFee;
  const message = `Shipping to ${country} will cost ${totalPrice} credits`;
  console.log(message);
  return message;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
