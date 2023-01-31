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