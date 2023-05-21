const Images = document.querySelectorAll(".preview img");
const lightbox = document.querySelector(".lightbox");
const closeLightboxBtn = document.querySelector(".close__lightbox");
const mainThumbnail = document.querySelector(".bg__product");
const mainThumbnailLightBox = document.querySelector(
  ".lightbox__container .bg__product")


function closeLightBox() {
    lightbox.classList.add("invisible");
  }
  function openLightBox() {
    lightbox.classList.remove("invisible");
  }

  Images.forEach((image) => {
    image.addEventListener("click", () => {
      const lastImg = document.querySelectorAll(".selected");
      if (lastImg){
        lastImg[0].classList.remove(".selected");
      }
      image.classList.add(".selected");
      const selectedImg = document.querySelector(".selected");
      switch(selectedImg.getAttribute("src")){
        case "./images/image-product-1-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-1.jpg";
        mainThumbnailLightBox.src = "./images/image-product-1.jpg";
        break;
      case "./images/image-product-2-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-2.jpg";
        mainThumbnailLightBox.src = "./images/image-product-2.jpg";
        break;
      case "./images/image-product-3-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-3.jpg";
        mainThumbnailLightBox.src = "./images/image-product-3.jpg";
        break;
      case "./images/image-product-4-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-4.jpg";
        mainThumbnailLightBox.src = "./images/image-product-4.jpg";
        break;
      }
    });
  });

closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbnail.addEventListener("click", openLightBox);