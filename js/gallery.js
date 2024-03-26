// Get the menu button and the navbar
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const readMoreBtn = document.querySelector(".read-more-btn");
const readMoreText = document.querySelector(".read-more-text");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

let cardContainer = document.querySelector(".description-box");
let cardBox = cardContainer.querySelectorAll(".card");

// Get all card elements
const cards = document.querySelectorAll(".card");

// Add click event listeners to the buttons in each card
cards.forEach((card) => {
  const buttons = card.querySelectorAll(".buttons .btn");
  const text = card.querySelector(".text");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the font size value from the clicked button
      const fontSize = button.getAttribute("data-font-size");
      // Set the font size of the text element
      text.style.fontSize = fontSize;
      // Remove the "active" class from all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("activated");
      });
      // Add the "active" class to the clicked button
      button.classList.add("activated");
    });
  });
});

document.querySelectorAll(".gallery .image").forEach((image) => {
  image.onclick = () => {
    cardContainer.style.display = "flex";
    let name = image.getAttribute("data-name");
    cardBox.forEach((card) => {
      let target = card.getAttribute("data-target");
      if (name == target) {
        card.classList.add("active");
      }
    });
  };
});

cardBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    cardContainer.style.display = "none";
  };
});

function changeColor(event) {
  var colour = event.value;
  document.getElementsByTagName("BODY")[0].style.backgroundColor = colour;
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = colour;
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
