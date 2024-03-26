// Responsive navbar
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

//Back to top button
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

function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("birth-date").value;
  const nationality = document.querySelector(".select-box select").value;
  const rating = document.querySelector(
    '.rating-bar input[name="Rating"]:checked'
  ).value;
  const opinion = document.getElementById("opinion").value;
  window.location.href =
    "mailto:escapeislandp3@gmail.com?subject=" +
    "New Comments Form" +
    "&body=" +
    "Full name: " +
    name +
    "   " +
    "Email address: " +
    email +
    "   " +
    "Phone number: " +
    phone +
    "   " +
    "Birth date: " +
    date +
    "   " +
    "Nationality: " +
    nationality +
    "   " +
    "Rating: " +
    rating +
    "   " +
    "Opinion: " +
    opinion;

  const form = document.getElementById("comment-form");
  const thankYouMsg = document.getElementById("thank-you");
  form.style.display = "none";
  thankYouMsg.style.display = "block";
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const birthDate = document.getElementById("birth-date").value;
  const nationality = document.querySelector(
    'select[name="Nationality"]'
  ).value;
  const rating = document.querySelector('input[name="Rating"]:checked');
  const opinion = document.getElementById("opinion").value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else {
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }
  }

  if (phone == "") {
    alert("Phone number must be filled out");
    return false;
  } else {
    var phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number format");
      return false;
    }
  }

  const today = new Date();
  const selectedDate = new Date(birthDate);
  if (isNaN(selectedDate.getTime()) || selectedDate > today) {
    alert("Please enter a valid birth date.");
    return false;
  }

  if (nationality === "Nationality") {
    alert("Please select your nationality.");
    return false;
  }

  if (!rating) {
    alert("Please select a rating.");
    return false;
  }

  if (opinion == "") {
    alert("Your opinion must be filled out");
    return false;

    alert("Thank you for your feedback!");
  }
  return true;
}
