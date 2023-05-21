const thumbnails = document.querySelectorAll(".preview img");
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

  thumbnails.forEach((Thumbnail, index) => {
    Thumbnail.addEventListener("click", () => {
      const lastImg = document.querySelector(".preview img.selected");
      if (lastImg){
        lastImg[0].classList.remove(".selected");
      }
      Thumbnail.classList.add(".selected");
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
      console.log("Clicked thumbnail index:", index);
    });
  });

closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbnail.addEventListener("click", openLightBox);
