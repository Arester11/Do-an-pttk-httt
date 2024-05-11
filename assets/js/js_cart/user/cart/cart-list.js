import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { toast } from "../../toast.js";
import { validation } from "../validation.js";
import { updateCartList } from "./handleCart.js";

const totalPrice = queryElement(".cart-list__total-price");
const table = queryElement(".cart-list");
const clearBtn = queryElement(".clear");
const buyBtn = queryElement(".buy");
const cartList = getLocalStorage("cartList");
const modal = queryElement(".modal");
const modalContent = queryElement(".modal__content");
const currentUser = getLocalStorage("currentUser");
let count = 0;
upload();
function upload() {
  if(currentUser!=null) {
    if(count == 0 && cartList != []) {
      count = 1;
      const cartinuser = currentUser.cartList;
      //console.log(cartinuser);
      cartList.forEach((item) => {
        const id = item.id;
        const iteminuserID = cartinuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        try {
          if(Number(id) === cartinuser[iteminuserID].id)
          cartinuser[iteminuserID].count += item.count;
          else {
            cartinuser.push(item);
          }
        } catch(error) {
          cartinuser.push(item);
        }
      })
      setLocalStorage("cartList", []);
      cartList.splice(0, cartList.length);
      const a = [
        ...cartinuser
      ]
      currentUser.cartList.splice(0, currentUser.cartList.length);
      //console.log(a);
      currentUser.cartList.push(...a);
    }
  }
}
function render() {
  const currentUser = getLocalStorage("currentUser");
  const cartuser = currentUser.cartList;
  if(cartuser.length <= 0) {
    table.innerHTML = "<h1 class='cart-empty'>Cart is empty!!!</h1>";
    totalPrice.innerText = "$0";
    updateCartList(cartuser);
    return;
  }
  const cartListHTML = cartuser
      .map(
        (cart) => `
          <tr class="cart-list__row">
            <td class="cart-list__image">
              <img src=${cart.imagePrimary} alt=""
                class="cart-list__img">
            </td>
            <td class="cart-list__product-name">${cart.name}</td>
            <td class="cart-list__unit-price">
              <span>$${cart.salePercent ? cart.prePrice*(100-cart.salePercent)/100 : cart.prePrice}</span>
            </td>
            <td>
              <div  
                  class="cart-list__quantity"
                  data-id="${cart.id}"
              >
                <span class="cart-list__btn-quantity minus">-</span>
                <input
                  type="number"
                  min="1"
                  value="${cart.count}"
                  class="cart-list__input-quantity"
                >
                <span class="cart-list__btn-quantity plus">+</span>
              </div>
            </td>
            <td class="cart-list__delete-icon">
              <span data-id="${cart.id}"">
                <i class="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
        `
      )
      .join("");
  
    const total = cartuser.reduce((pre, curr) => {
      const salePrice = curr.prePrice*(100 - curr.salePercent)/100;
      const price = curr.salePercent ? salePrice : curr.prePrice;
      return pre + price * curr.count;
    }, 0);
  
    table.innerHTML = `
      <table class="cart-list__table">
        <thead>
          <tr class="cart-list__heading">
            <th>image</th>
            <th>product name</th>
            <th>price</th>
            <th>Quantity</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          ${cartListHTML}
        </tbody>
      </table>
    `;
    totalPrice.innerText = `$${total.toFixed(2)}`;
    const minusBtn = queryAllElement(".minus");
    const plusBtn = queryAllElement(".plus");
    const deleteBtn = queryAllElement(".cart-list__delete-icon span");
    const inputQuantity = queryAllElement(".cart-list__input-quantity");
  
    minusBtn.forEach((minus) => {
      minus.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
  
        const cartIdx = cartuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        if (cartuser[cartIdx].count === 1) {
          cartuser.splice(cartIdx, 1);
        } else {
          cartuser[cartIdx].count--;
        }
        renderCartList();
      });
    });
  
    plusBtn.forEach((plus) => {
      plus.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        const cartIdx = cartuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        //console.log(cartuser[cartIdx].id);
        if(Number(id) === cartuser[cartIdx].id)
        cartuser[cartIdx].count++;
        renderCartList();
      });
    });
  
    deleteBtn.forEach((delBtn) => {
      delBtn.addEventListener("click", (e) => {
        const id = delBtn.dataset.id;
        const cartIdx = cartuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        cartuser.splice(cartIdx, 1);
        renderCartList();
      });
    });
  
    inputQuantity.forEach((input) => {
      input.addEventListener("change", (e) => {
        if(Number(e.target.value) > 0) {
          const id = e.target.parentElement.dataset.id;
          const cartIdx = cartuser.findIndex(
            (cart) => cart.id === Number(id)
          );
          cartuser[cartIdx].count = Number(e.target.value);
          renderCartList();
        } else {
          const id = e.target.parentElement.dataset.id;
          const cartIdx = cartuser.findIndex(
            (cart) => cart.id === Number(id)
          );
          cartuser.splice(cartIdx, 1);
          renderCartList();
        }
      });
    });
    //setLocalStorage("cartList", cartList);
    updateCartList(cartuser);

}

function renderCartList() {
  if(currentUser != null) {
    const cartuser = currentUser.cartList;
    if (cartuser.length <= 0) {
      //console.log("!!!");
      table.innerHTML = "<h1 class='cart-empty'>Cart is empty!!!</h1>";
      totalPrice.innerText = "$0";
      //setLocalStorage("cartList", cartList);
      updateCartList(cartuser);
      return;
    }
  
    const cartListHTML = cartuser
      .map(
        (cart) => `
          <tr class="cart-list__row">
            <td class="cart-list__image">
              <img src=${cart.imagePrimary} alt=""
                class="cart-list__img">
            </td>
            <td class="cart-list__product-name">${cart.name}</td>
            <td class="cart-list__unit-price">
              <span>$${cart.salePercent ? cart.prePrice*(100-cart.salePercent)/100 : cart.prePrice}</span>
            </td>
            <td>
              <div  
                  class="cart-list__quantity"
                  data-id="${cart.id}"
              >
                <span class="cart-list__btn-quantity minus">-</span>
                <input
                  type="number"
                  min="1"
                  value="${cart.count}"
                  class="cart-list__input-quantity"
                >
                <span class="cart-list__btn-quantity plus">+</span>
              </div>
            </td>
            <td class="cart-list__delete-icon">
              <span data-id="${cart.id}"">
                <i class="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
        `
      )
      .join("");
  
    const total = cartuser.reduce((pre, curr) => {
      const salePrice = curr.prePrice*(100 - curr.salePercent)/100;
      const price = curr.salePercent ? salePrice : curr.prePrice;
      return pre + price * curr.count;
    }, 0);
  
    table.innerHTML = `
      <table class="cart-list__table">
        <thead>
          <tr class="cart-list__heading">
            <th>image</th>
            <th>product name</th>
            <th>price</th>
            <th>Quantity</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          ${cartListHTML}
        </tbody>
      </table>
    `;
  
    totalPrice.innerText = `$${total.toFixed(2)}`;
    const minusBtn = queryAllElement(".minus");
    const plusBtn = queryAllElement(".plus");
    const deleteBtn = queryAllElement(".cart-list__delete-icon span");
    const inputQuantity = queryAllElement(".cart-list__input-quantity");
  
    minusBtn.forEach((minus) => {
      minus.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
  
        const cartIdx = cartuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        if (cartuser[cartIdx].count === 1) {
          cartuser.splice(cartIdx, 1);
        } else {
          cartuser[cartIdx].count--;
        }
        renderCartList();
      });
    });
  
    plusBtn.forEach((plus) => {
      plus.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        const cartIdx = cartuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        //console.log(cartuser[cartIdx].id);
        if(Number(id) === cartuser[cartIdx].id)
        cartuser[cartIdx].count++;
        renderCartList();
      });
    });
  
    deleteBtn.forEach((delBtn) => {
      delBtn.addEventListener("click", (e) => {
        const id = delBtn.dataset.id;
        const cartIdx = cartuser.findIndex(
          (cart) => cart.id === Number(id)
        );
        cartuser.splice(cartIdx, 1);
        renderCartList();
      });
    });
  
    inputQuantity.forEach((input) => {
      input.addEventListener("change", (e) => {
        if(Number(e.target.value) > 0) {
          const id = e.target.parentElement.dataset.id;
          const cartIdx = cartuser.findIndex(
            (cart) => cart.id === Number(id)
          );
          cartuser[cartIdx].count = Number(e.target.value);
          renderCartList();
        } else {
          const id = e.target.parentElement.dataset.id;
          const cartIdx = cartuser.findIndex(
            (cart) => cart.id === Number(id)
          );
          cartuser.splice(cartIdx, 1);
          renderCartList();
        }
      });
    });
    //setLocalStorage("cartList", cartList);
    updateCartList(cartuser);
    
  } else {
    if (cartList.length <= 0) {
      table.innerHTML = "<h1 class='cart-empty'>Cart is empty!!!</h1>";
      totalPrice.innerText = "$0";
      setLocalStorage("cartList", cartList);
      updateCartList(cartList);
      return;
    }
  
    const cartListHTML = cartList
      .map(
        (cart) => `
          <tr class="cart-list__row">
            <td class="cart-list__image">
              <img src=${cart.imagePrimary} alt=""
                class="cart-list__img">
            </td>
            <td class="cart-list__product-name">${cart.name}</td>
            <td class="cart-list__unit-price">
              <span>$${cart.salePercent ? cart.prePrice*(100-cart.salePercent)/100 : cart.prePrice}</span>
            </td>
            <td>
              <div  
                  class="cart-list__quantity"
                  data-id="${cart.id}"
              >
                <span class="cart-list__btn-quantity minus">-</span>
                <input
                  type="number"
                  min="1"
                  value="${cart.count}"
                  class="cart-list__input-quantity"
                >
                <span class="cart-list__btn-quantity plus">+</span>
              </div>
            </td>
            <td class="cart-list__delete-icon">
              <span data-id="${cart.id}"">
                <i class="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
        `
      )
      .join("");
  
    const total = cartList.reduce((pre, curr) => {
      const salePrice = curr.prePrice*(100 - curr.salePercent)/100;
      const price = curr.salePercent ? salePrice : curr.prePrice;
      return pre + price * curr.count;
    }, 0);
  
    table.innerHTML = `
      <table class="cart-list__table">
        <thead>
          <tr class="cart-list__heading">
            <th>image</th>
            <th>product name</th>
            <th>price</th>
            <th>Quantity</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          ${cartListHTML}
        </tbody>
      </table>
    `;
  
    totalPrice.innerText = `$${total.toFixed(2)}`;
    const minusBtn = queryAllElement(".minus");
    const plusBtn = queryAllElement(".plus");
    const deleteBtn = queryAllElement(".cart-list__delete-icon span");
    const inputQuantity = queryAllElement(".cart-list__input-quantity");
  
    minusBtn.forEach((minus) => {
      minus.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
  
        const cartIdx = cartList.findIndex(
          (cart) => cart.id === Number(id)
        );
        if (cartList[cartIdx].count === 1) {
          cartList.splice(cartIdx, 1);
        } else {
          cartList[cartIdx].count--;
        }
        renderCartList();
      });
    });
  
    plusBtn.forEach((plus) => {
      plus.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        const cartIdx = cartList.findIndex(
          (cart) => cart.id === Number(id)
        );
        console.log(cartList[cartIdx].id);
        if(Number(id) === cartList[cartIdx].id)
        cartList[cartIdx].count++;
        renderCartList();
      });
    });
  
    deleteBtn.forEach((delBtn) => {
      delBtn.addEventListener("click", (e) => {
        const id = delBtn.dataset.id;
        const cartIdx = cartList.findIndex(
          (cart) => cart.id === Number(id)
        );
        cartList.splice(cartIdx, 1);
        renderCartList();
      });
    });
  
    inputQuantity.forEach((input) => {
      input.addEventListener("change", (e) => {
        if(Number(e.target.value) > 0) {
          const id = e.target.parentElement.dataset.id;
          const cartIdx = cartList.findIndex(
            (cart) => cart.id === Number(id)
          );
          cartList[cartIdx].count = Number(e.target.value);
          renderCartList();
        } else {
          const id = e.target.parentElement.dataset.id;
          const cartIdx = cartList.findIndex(
            (cart) => cart.id === Number(id)
          );
          cartList.splice(cartIdx, 1);
          renderCartList();
        }
      });
    });
    setLocalStorage("cartList", cartList);
    updateCartList(cartList);
  }
  
}

clearBtn.addEventListener("click", () => {
  if(currentUser != null) {
    const cartuser = currentUser.cartList;
    if (cartuser.length <= 0) {
      toast({
        title: "Please add to cart!!!",
        message: "Cart is empty...",
        type: "info",
        duration: 1000,
      });
      setTimeout(() => {
        //window.location.href = "/";
      }, 1200);
      return;
    }
  
    modalContent.innerHTML = `
        <h1 class="modal__size-heading">Are you sure???</h1>
        <div class="modal__confirm">
          <button class="btn btn--filter btn__modal" data-value="yes">Yes</button>
          <button class="btn btn--filter btn__modal" data-value="no">No</button>
        </div>
    `;
  
    modal.classList.remove("hidden");
  
    const yesBtn = queryElement("button[data-value='yes']");
    const noBtn = queryElement("button[data-value='no']");
  
    yesBtn.addEventListener("click", () => {
      toast({
        title: "Successfully!!!",
        message: "Done",
        type: "success",
        duration: 2000,
      });
      cartuser.splice(0, cartuser.length);
      setLocalStorage("cartList", cartList);
      updateCartList(cartuser);
      renderCartList();
      modal.classList.add("hidden");
    });
  
    noBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  } else {
    if (cartList.length <= 0) {
      toast({
        title: "Please add to cart!!!",
        message: "Cart is empty...",
        type: "info",
        duration: 1000,
      });
      setTimeout(() => {
        //window.location.href = "/";
      }, 1200);
      return;
    }
  
    modalContent.innerHTML = `
        <h1 class="modal__size-heading">Are you sure???</h1>
        <div class="modal__confirm">
          <button class="btn btn--filter btn__modal" data-value="yes">Yes</button>
          <button class="btn btn--filter btn__modal" data-value="no">No</button>
        </div>
    `;
  
    modal.classList.remove("hidden");
  
    const yesBtn = queryElement("button[data-value='yes']");
    const noBtn = queryElement("button[data-value='no']");
  
    yesBtn.addEventListener("click", () => {
      toast({
        title: "Successfully!!!",
        message: "Done",
        type: "success",
        duration: 2000,
      });
      cartList.splice(0, cartList.length);
      setLocalStorage("cartList", cartList);
      updateCartList(cartList);
      renderCartList();
      modal.classList.add("hidden");
    });
  
    noBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
});

buyBtn.addEventListener("click", () => {
  //const currentUser = getLocalStorage("currentUser");
  if (currentUser) {
    if (currentUser.cartList.length > 0) {
      modalContent.innerHTML = `
          <h1 class="modal__size-heading">Order Information</h1>
          <div class="input">
            <label for="name" class="label">Fullname</label>
            <input type="text" id="name1" placeholder="Enter your name..." rules="require">
            <span class="error"></span>
          </div>
          <div class="input">
            <label for="phone" class="label">Phone Number</label>
            <input type="text" id="phone1" placeholder="Enter your phone..." >
            <span class="error"></span>
          </div>
          <div class="input">
            <label for="address" class="label">Address</label>
            <input type="text" id="address" placeholder="Enter your address..." rules="require">
            <span class="error"></span>
          </div>
          <div class="input">
            <label for="note" class="label">Note</label>
            <textarea placeholder="Enter note..." id="note" rules="max-100"></textarea>
            <span class="error"></span>
          </div>
          <button class="btn btn--filter btn__buy">Submit</button>
      `;

      modal.classList.remove("hidden");

      const note = queryElement("#note");
      const name = queryElement("#name1");
      const address = queryElement("#address");
      const phone = queryElement("#phone1");
      const submit = queryElement(".btn__buy");
      
      setInterval(() => {
        note.style.height = "48px";
        note.style.height = note.scrollHeight + "px";
      }, 500);

      name.addEventListener("change", () => validation(name));
      name.addEventListener("blur", () => validation(name));

      address.addEventListener("change", () => validation(address));
      address.addEventListener("blur", () => validation(address));

      phone.addEventListener("change", () => validation(phone));
      phone.addEventListener("blur", () => validation(phone));

      note.addEventListener("change", () => validation(note));
      note.addEventListener("blur", () => validation(note));

      submit.addEventListener("click", () => {
        const formValidation = [];
        formValidation.push(name, note, phone, address);
        let isError = false;
        formValidation.forEach((validate) => {
          if (validation(validate)) isError = true;
        });
        console.log(phone.value);

        if (isError) return;
  

        const currentUser = getLocalStorage("currentUser");
        const userList = getLocalStorage("userList");
        const orderList = getLocalStorage("orderList");
        const createdAt = Date.now();
        const cartUserList = currentUser.cartList.map((cart) => {
          return {
            ...cart,
            createdAt: new Date(createdAt).toLocaleString(),
            receiver: name.value,
            //userId: currentUser.id,
            statusDelivery: "packaging",
            address: address.value,
            phone: phone.value,
            note: note.value,
          };
        });

        toast({
          title: "Successfully!",
          message: "Thank you for your purchase.",
          type: "success",
          duration: 3000,
        });
        currentUser.order.push(...cartUserList);
        orderList.push(...cartUserList);
        const userIdx = userList.findIndex(
          (user) => user.id === currentUser.id
        );

        userList[userIdx] = currentUser;
        const cartuser = currentUser.cartList;
        cartList.splice(0, cartList.length);
        cartuser.splice(0, cartuser.length);
        
        setLocalStorage("cartList", cartList);
        setLocalStorage("orderList", orderList);
        setLocalStorage("currentUser", currentUser);
        setLocalStorage("userList", userList);

        updateCartList(cartuser);
        setLocalStorage("currentUser", currentUser);
        modal.classList.add("hidden");
        render();
        name.value = "";
        phone.value = "";
        note.value = "";
        address.value = "";

        reload();
      });
    } else {
      toast({
        title: "Please add to cart!!!",
        message: "Cart is empty...",
        type: "info",
        duration: 1000,
      });
      setTimeout(() => {
        //window.location.href = "/";
      }, 1200);
    }
  } else {
    toast({
      title: "Oops!!!",
      message: "Please login to purchase...",
      type: "info",
      duration: 1000,
    });
    setTimeout(() => {
      //window.location.href = "/";
    }, 1500);
  }
});

renderCartList();
