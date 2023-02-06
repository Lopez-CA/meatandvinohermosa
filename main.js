const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle ('is-active');
    navMenu.classList.toggle ('is-active');

});

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navMenu.classList.remove("is-active");

  }))









// Add click event listeners to image blocks
const categories = document.querySelectorAll('.category a');
categories.forEach(category => {
  category.addEventListener('click', function(e) {
    e.preventDefault();
    // Add your custom logic here
  });
});

const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {
  icon.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.2)";
  });
  
  icon.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
  });
});


$(document).ready(function() {
  $("#newsletter-form").submit(function(event) {
    event.preventDefault();
    var email = $("#email-input").val();
    // Send a request to your server to store the email address
    // ...
  });
});