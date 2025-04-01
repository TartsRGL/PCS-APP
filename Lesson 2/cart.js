const cartForm = document.getElementById('cartForm');
const cartDialog = document.getElementById('cartDialog');
const closeCartButton = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPriceCZK');

let cart = [];

cartForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const pricePerItem = 10; // Cena jednoho smoothie v Kč
  const item = { name: 'Spinach Smoothie', quantity, price: pricePerItem };

  const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push(item);
  }

  updateCart();
  cartDialog.showModal();
});

closeCartButton.addEventListener('click', () => {
  cartDialog.close();
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${item.name} - 
      <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)" />
      x ${item.price} Kč
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(listItem);
    total += item.quantity * item.price;
  });

  totalPriceElement.textContent = `Total: ${total} Kč`;
}

function updateQuantity(index, newQuantity) {
  const quantity = parseInt(newQuantity, 10);
  if (quantity > 0) {
    cart[index].quantity = quantity;
    updateCart();
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
