// get the add to cart buttons
const addToCartBtns = document.querySelectorAll(".addtocart");

// get the cart table body, subtotal, and item quantity elements
const cartTable = document.getElementById("carttable");
const subtotalElem = document.getElementById("total");
const itemQuantityElem = document.getElementById("itemsquantity");

// initialize subtotal and item quantity
let subtotal = 0;
let itemQuantity = 0;

// add event listener to each add to cart button
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // get the product name and price
    const productName =
      e.target.parentNode.querySelector(".productname").textContent;
    const price = parseFloat(
      e.target.parentNode.querySelector(".price").textContent.slice(1)
    );

    // create a new row in the cart table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${productName + "  :"}</td>
      <td></td>    
      <td>$${price.toFixed(2)}</td>
    `;
    cartTable.appendChild(newRow);

    // update subtotal and item quantity
    subtotal += price;
    itemQuantity++;
    subtotalElem.textContent = subtotal.toFixed(2);
    itemQuantityElem.textContent = itemQuantity + "         ";
    alert("Item added successfully!");
  });
});

// add event listener to empty cart button
const emptyCartBtn = document.getElementById("emptycart");
emptyCartBtn.addEventListener("click", (e) => {
  // remove all rows from the cart table
  cartTable.innerHTML = "";

  // reset subtotal and item quantity
  subtotal = 0;
  itemQuantity = 0;
  subtotalElem.textContent = subtotal.toFixed(2);
  itemQuantityElem.textContent = itemQuantity;
});
function myFunction(x) {
  // alert("Are you sure you want to continue?");
  if (subtotal == "") {
    window.alert(
      "There are no items in the cart. Please select an item to proceed!"
    );
    return false;
  }
}

// Get the button element
var backToTopButton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
