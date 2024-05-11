import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { cartList, renderCartList } from "./renderCart.js";

const modalSizeEle = queryElement(".modal");
const modalBtn = queryElement(".btn__modal");
const addCartIconEleList = queryAllElement(".products__item-cart");

addCartIconEleList.forEach((addCartIconEle) => {
  addCartIconEle.addEventListener("click", () => {
    modalSizeEle.dataset.id = addCartIconEle.dataset.id;
    modalSizeEle.classList.remove("hidden");
  });
});

modalBtn?.addEventListener("click", () => {
  let chooseProduct = productList.find(
    (product) => product.id === Number(modalSizeEle.dataset.id)
  );

  const isHasInCartList = cartList.findIndex(
    (cart) => cart.id === chooseProduct.id
  );

  if (isHasInCartList !== -1) {
    cartList[isHasInCartList].count++;
  } else {
    chooseProduct = {
      ...chooseProduct,
      count: 1,
    };
    cartList.push(chooseProduct);
  }

  renderCartList();
  modalSizeEle.classList.add("hidden");
});

function updateCartList(newCartList) {
  const currentUser = getLocalStorage("currentUser");
  if (!currentUser) return;
  currentUser.cartList = newCartList;

  let userList = getLocalStorage("listUser");
  userList = userList.map((user) => {
    if (user.phone === currentUser.phone) {
      return {
        ...user,
        cartList: newCartList,
      };
    }
    return user;
  });
  setLocalStorage("currentUser", currentUser);
  setLocalStorage("userList", userList);
}

export { updateCartList };
