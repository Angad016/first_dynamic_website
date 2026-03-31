//first i want to say sorry for to use ai genrated js code , but the below whole code is written by me, thank you sir for understanding 
  
/* there is a button book service today so for that
   i have to make a auto scroll effect and i am printing
   book button click in console to check the button is working or not */
const bookBtn = document.querySelector(".btn-booking");

bookBtn.addEventListener("click", function () {
  console.log("Book button clicked");

  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
});


// i have to store cart items so i will use array
let cart = [];

// selecting elements from html by mentioning their classes and ids
const buttons = document.querySelectorAll(".add-btn"); 
const cartItems = document.getElementById("cart-items"); 
const totalPrice = document.getElementById("total");

// below to make cart working i have to first search it by the push and it 
//should get upadte in Ui also 
// when user clicks add button
buttons.forEach(function(btn){
  btn.addEventListener("click", function(){

    console.log("Add button clicked");

    const item = btn.parentElement;

    // service name getting
    const name = item.querySelector(".service-text").innerText;

    // price getting
    const priceText = item.querySelector(".price").innerText;

    // converting ₹ to number
    const price = parseInt(priceText.replace("₹", ""));

    console.log("Item:", name, price);

    // pushing into cart
    cart.push({
      name: name,
      price: price
    });

    console.log("Cart:", cart);

    displayCart(); // updating UI
  });
});


// function to display cart items
function displayCart() {

  // clear previous items
  cartItems.innerHTML = "";

  let total = 0;

  // loop through cart
  for (let i = 0; i < cart.length; i++) {

    const item = cart[i];

    total = total + item.price;

    // creating table row
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td><button onclick="removeItem(${i})">Remove</button></td>
    `;

    cartItems.appendChild(row);
  }

  // update total
  totalPrice.innerText = total;

  console.log("Total:", total);

  // if no items
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <tr>
        <td colspan="4">No Items Added</td>
      </tr>
    `;
  }
}


// remove item function
function removeItem(index) {
  console.log("Removing item index:", index);

  cart.splice(index, 1);

  displayCart();
}


// BOOK NOW BUTTON
const bookNowBtn = document.querySelector(".btn-book");

bookNowBtn.addEventListener("click", function () {

  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email-id").value;
  const phone = document.getElementById("phone-number").value;

  console.log("User Data:", name, email, phone);

  // validation
  if (name === "" || email === "" || phone === "") {
    alert("Please fill all details");
    return;
  }

  // email format check
  if (!email.includes("@")) {
    alert("Enter valid email");
    return;
  }

  // phone number check (10 digits)
  if (phone.length !== 10) {
    alert("Enter valid phone number");
    return;
  }

  // cart check
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  // success message (thank you message)
  alert("Thank you! Your booking is successful ✅");

  // reset cart
  cart = [];
  displayCart();

  // clear form
  document.getElementById("full-name").value = "";
  document.getElementById("email-id").value = "";
  document.getElementById("phone-number").value = "";
});

//sir what i doen i call elments priting messages  in consoleto check is any problem
//and make things working or not and also i have added validation for email and phone number 
// and also i have added alert for success message and also if any error occurs in form filling then also
// i have added alert for that also and also i have added remove button in cart to remove items from cart
// and also i have added total price calculation and also i have added auto scroll effect for book service
