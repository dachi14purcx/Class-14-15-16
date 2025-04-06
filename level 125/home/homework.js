function registerUser(username, password) {
  const user = { username, password };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'store.html';
}

// store.js
const products = [
  { id: 1, name: 'Item A', price: 10 },
  { id: 2, name: 'Item B', price: 20 },
  { id: 3, name: 'Item C', price: 30 }
];

function displayProducts() {
  const container = document.getElementById('products');
  products.forEach(product => {
    const div = document.createElement('div');
    div.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add</button>`;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').textContent = `Total: $${total}`;
}
