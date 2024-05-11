import {
    getLocalStorage,
    queryAllElement,
    queryElement,
    setLocalStorage,
  } from "../../constant.js";

  const totalPrice = queryElement(".cart-list__total-price-order");
  const table = queryElement(".cart-list-order");
  const orderList = getLocalStorage("orderList");
  const packagingBtn = queryElement(".order-button__packaging");
  const shippingBtn = queryElement(".order-button__shipping");

packagingBtn.addEventListener("click", () => {
    if (orderList.length > 0) {
        const orderListPackage = [];
        orderList.forEach((order) => {
            if(order.statusDelivery === "packaging") {
                orderListPackage.push(order);
            }
        });
        renderCartList(orderListPackage);
    } else {
        table.innerHTML = "<h1 class='cart-empty'>Packaging list is empty!!!</h1>"
        totalPrice.innerHTML = "$0";
        setLocalStorage("orderList", orderList);
    }

    packagingBtn.classList.add("active-button");
    shippingBtn.classList.remove("active-button");
})

shippingBtn.addEventListener("click", () => {
    if (orderList.length > 0) {
        const orderListShipping = [];
        orderList.forEach((order) => {
            if(order.statusDelivery === "shipping") {
                orderListShipping.push(order);
            }
        });
        renderCartList(orderListShipping);
    } else {
        table.innerHTML = "<h1 class='cart-empty'>Shipping list is empty!!!</h1>"
        totalPrice.innerHTML = "$0";
        setLocalStorage("orderList", orderList);
    }

    packagingBtn.classList.remove("active-button");
    shippingBtn.classList.add("active-button");
})

function renderCartList(listOrder) {
    if(listOrder.length <= 0) {
        table.innerHTML = "<h1 class='cart-empty'>Order list is empty!!!</h1>"
        totalPrice.innerHTML = "$0";
        //setLocalStorage("orderList", orderList);
        return;
    }
    const orderListHTML = listOrder.map(
        (cart) => 
        `
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
                    data-id="${cart.id}"
                >
                ${cart.count}
                </div>
                </td>
                <td class="">
                <span data-id="${cart.id}"">
                    ${cart.createdAt}
                </span>
                </td>
            </tr>
                `
    ).join("");
    const total = listOrder.reduce((pre, curr) => {
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
            <th>Time</th>
        </tr>
        </thead>
        <tbody>
        ${orderListHTML}
        </tbody>
    </table>
    `;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
}