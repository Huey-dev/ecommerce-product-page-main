const plusBtn = document.querySelector("#product__plus");
const minusBtn = document.querySelector("#product__minus");
const Quantity = document.querySelector(".Quantity");
const amtBtns = document.querySelectorAll('.quantity__button .button')
const cartBtn = document.querySelector('.cart__btn')
const cart = document.querySelector(".cart__wrap");
const wrp = document.querySelector(".cart__content")
const addBtn = document.querySelector(".add__cart")
const indicator = document.querySelector(".Qty__cart")
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
function addItem() {
    if (quantityValue > 0) {
        const total = 125.00 * quantityValue;
    wrp.classList.remove("empty");
    wrp.innerHTML = `<div class="product">
                    <div>
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product--info">
                        <p class="product--title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${quantityValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete--btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout--btn">Checkout</button>
                  </div>`;
    indicator.style.display = "block";
    indicator.innerText = quantityValue;
  }
}
function deleteItem() {
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}


  plusBtn.addEventListener("click", Increment);
  minusBtn.addEventListener("click", decrement);
  cartBtn.addEventListener("click", toggleCart);
  addBtn.addEventListener("click", addItem);