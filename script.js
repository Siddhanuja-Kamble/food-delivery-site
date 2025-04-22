let cart = [];
let totalbill = 0;

function addToCart(button) {
  const itemName = button.getAttribute('data-name');
  const itemPrice = parseInt(button.getAttribute('data-price'));

  total += itemPrice;

  document.getElementById("total-amount").textContent = total;
  alert('added to cart!');
}

function payNow() {
  if (total === 0) {
    alert("Your cart is empty. Please add items first.");
  } else {
    alert("Thank you for your order! Your total bill is ₹" + total);
    total = 0;
    document.getElementById("total-amount").textContent = total;
  }
}

function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = ""; // Clear existing items

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${index + 1}. ${item}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  const cartSection = document.getElementById("cart");

  if (cart.length > 0 && !document.getElementById("checkout-btn")) {
    const btn = document.createElement("button");
    btn.id = "checkout-btn";
    btn.textContent = "Checkout";
    btn.onclick = checkout;
    btn.style.marginTop = "20px";
    btn.style.padding = "10px";
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    cartSection.appendChild(btn);
  } else if (cart.length === 0 && document.getElementById("checkout-btn")) {
    document.getElementById("checkout-btn").remove();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function checkout() {
  alert("Thank you for your order! Your cart has been cleared.");
  cart = [];
  updateCartUI();
}
let total = 0;

function addToCart(price) {
  total += price;
  document.getElementById("total-amount").textContent = total;
  alert("Item added to cart!");
}

function payNow() {
  if (total === 0) {
    alert("Your cart is empty. Please add items first.");
  } else {
    alert("Thank you for your order! Your total bill is ₹" + total);
    // Reset total
    total = 0;
    document.getElementById("total-amount").textContent = total;
  }
}