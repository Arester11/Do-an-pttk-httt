import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { updateCartList } from "./handleCart.js";

const viewCartEle = queryElement(".header__view-cart");
const countCart = queryElement(".header__count-products");
const cartList = getLocalStorage("cartList");

function renderCartList() {
  if (!viewCartEle || !countCart) {
    return;
  }

  if (cartList.length <= 0) {
    viewCartEle.innerHTML =
      "<h1 class='header__cart-empty'>Cart is empty!!!</h1>";
    countCart.classList.add("hidden");
    setLocalStorage("cartList", []);
    return;
  }

  const cartListHTML = cartList
    .map(
      (cart) => `
        <li
          class="header__cart-item"
          data-id="${cart.id}"
        >
          <div class="header__cart-image">
            <img
              src=${cart.imagePrimary}
              alt="" class="header__cart-img">
          </div>
          <div class="header__cart-info">
            <h1 class="header__cart-title">${cart.name}</h1>
            
            <div class="header__cart-price">
              $${cart.salePercent ? cart.prePrice*(100-cart.salePercent)/100 : cart.prePrice}
            </div>
            <div
              class="header__cart-quantity"
              data-id="${cart.id}"
              
            >
              <div class="header__cart-btn minus">-</div>
              <div class="header__cart-number">${cart.count}</div>
              <div class="header__cart-btn plus">+</div>
            </div>
          </div>
          <span class="header__cart-btn-delete" data-id="${cart.id}">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </li>
      `
    )
    .join("");

  const total = cartList.reduce((pre, curr) => {
    const salePrice = curr.prePrice*(100 - curr.salePercent)/100;
    const price = curr.salePercent ? salePrice : curr.prePrice;
    return pre + price * curr.count;
  }, 0);

  viewCartEle.innerHTML = `
      <ul class="header__cart-list">
        ${cartListHTML}
      </ul>
      <div class="header__total-cart">
      <span>Cart Subtotal : </span>
      <span>$${total.toFixed(2)}</span>
      </div>
      <a href="./cart-list.html" class="btn btn--cart">View more and buy</a>
    `;

  const countProduct = cartList.reduce((pre, curr) => {
    return pre + curr.count;
  }, 0);
  countCart.classList.remove("hidden");
  countCart.innerText = countProduct > 99 ? "99+" : countProduct;

  const minusBtn = queryAllElement(".header__cart .minus");
  const plusBtn = queryAllElement(".header__cart .plus");
  const deleteBtn = queryAllElement(".header__cart-btn-delete");

  minusBtn.forEach((minus) => {
    minus.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id)
      );

      if (cartList[cartIdx].count === 1) {
        cartList.splice(cartIdx, 1);
      } else cartList[cartIdx].count--;

      renderCartList();
    });
  });

  plusBtn.forEach((plus) => {
    plus.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id)
      );

      cartList[cartIdx].count++;
      renderCartList();
    });
  });

  deleteBtn.forEach((delBtn) => {
    delBtn.addEventListener("click", () => {
      const id = delBtn.parentElement.dataset.id;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id)
      );

      cartList.splice(cartIdx, 1);
      renderCartList();
    });
  });
  setLocalStorage("cartList", cartList);
  updateCartList(cartList);
}

renderCartList();

export { cartList, renderCartList };
