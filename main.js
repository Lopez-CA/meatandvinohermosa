const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  this.classList.toggle ('is-active')

});

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