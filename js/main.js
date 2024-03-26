// Get the menu button and the navbar
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const readMoreBtn = document.querySelector(".read-more-btn");
const readMoreText = document.querySelector(".read-more-text");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

readMoreBtn.addEventListener("click", function () {
  // Toggle the "show" class on the read more text element
  readMoreText.classList.toggle("show");
  // Change the text of the read more button
  readMoreBtn.textContent =
    // readMoreBtn.textContent === "Read More.." ? "Read Less" : "Read More..";
    readMoreBtn.textContent === "Read Less" ? "Read More..." : "Read Less";
});

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
