const plusBtn = document.querySelector("#product__plus");
const minusBtn = document.querySelector("#product__minus");
const Quantity = document.querySelector(".Quantity");
const amtBtns = document.querySelectorAll('.quantity__button .button')
const cartBtn = document.querySelector('.cart__btn')
const cart = document.querySelector(".cart__wrap");
// initialize quantity to be 0
let quantityValue = 0

function Increment() {
    quantityValue++;
    Quantity.innerText = quantityValue;
}
function decrement() {
    if (quantityValue > 0) {
        quantityValue--;
    }
    Quantity.innerText = quantityValue;
}
function toggleCart() {
    cart.classList.toggle("invisible");
}


  plusBtn.addEventListener("click", Increment);
  minusBtn.addEventListener("click", decrement);
  cartBtn.addEventListener("click", toggleCart);