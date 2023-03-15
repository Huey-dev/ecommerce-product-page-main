const images = document.querySelectorAll(".preview img");
const preview = document.querySelector(".mobile__thumb");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const thumbMob = document.querySelector(".thumb__mobile");
let currentImg = 1;
// if our current product is product 4 then the cureent image shhould be set to 1 else inrement it
function nextImage() {
    if (currentImg == 4) {
      currentImg = 1;
    } else {
      currentImg++;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  }
  // if our current product is product 1 then the cureent image shhould be set to 4 else decrement it
  function prevImage() {
    if (currentImg == 1) {
      currentImg = 4;
    } else {
      currentImg--;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  }
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

