let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const items = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");

  items.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    sum += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} – ${item.price} €`;
    items.appendChild(li);
  });

  total.textContent = sum;
  count.textContent = cart.length;
}

function openCart() {
  document.getElementById("cart").classList.add("open");
}

function closeCart() {
  document.getElementById("cart").classList.remove("open");
}
