const cart = [];

function addToCart(productId) {
  const product = getProductById(productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

function renderCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = ''; // Clear previous cart content

  cart.forEach((product, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${product.name} - $${product.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  document.getElementById('total-price').textContent = `Total Price: $${getTotalPrice()}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function getTotalPrice() {
  return cart.reduce((total, product) => total + product.price, 0);
}