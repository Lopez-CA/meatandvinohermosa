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




const images = document.querySelectorAll('.product-image');

images.forEach((image) => {
  const info = image.querySelector('.product-info');

  image.addEventListener('click', () => {
    images.forEach((i) => {
      if (i !== image) {
        i.querySelector('.product-info').classList.remove('show');
      }
    });

    info.classList.toggle('show');
  });
});
