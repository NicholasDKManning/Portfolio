// Get the button for "Back to Top"
const backToTopButton = document.getElementById("back-to-top");

// When the user clicks the "Back to Top" button, scroll to the top of the document
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Hamburger menu toggle functionality
const toggleButton = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".navlinks");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
