let cart = [];
let total = 0;

// Select elements
const buttons = document.querySelectorAll(".add-btn");
const cartTable = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

// Add item to cart
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {

    const item = btn.closest("li");
    const name = item.querySelector(".service-text").childNodes[0].textContent.trim();
    const priceText = item.querySelector(".price").textContent.replace("₹", "");
    const price = parseFloat(priceText);

    // Add to cart
    cart.push({ name, price });

    updateCart();
  });
});

// Update cart UI
function updateCart() {
  cartTable.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
    `;

    cartTable.appendChild(row);
  });

  // Empty cart message
  if (cart.length === 0) {
    cartTable.innerHTML = `
      <tr class="empty-row">
        <td colspan="3" class="empty">
          <div class="empty-box">
            <p class="empty-icon">ⓘ</p>
            <p class="empty-text">No Items Added</p>
            <p class="empty-sub">Add items to the cart from the services bar</p>
          </div>
        </td>
      </tr>
    `;
  }

  totalDisplay.textContent = total;
}


// ================= BOOKING =================

const bookBtn = document.querySelector(".btn-book");

bookBtn.addEventListener("click", () => {
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email-id").value.trim();
  const phone = document.getElementById("phone-number").value.trim();

  if (cart.length === 0) {
    alert("⚠️ Please add at least one service");
    return;
  }

  if (!name || !email || !phone) {
    alert("⚠️ Please fill all details");
    return;
  }

  alert(`✅ Booking Confirmed!
Name: ${name}
Total: ₹${total}`);

  // Reset everything
  cart = [];
  updateCart();

  document.getElementById("full-name").value = "";
  document.getElementById("email-id").value = "";
  document.getElementById("phone-number").value = "";
});