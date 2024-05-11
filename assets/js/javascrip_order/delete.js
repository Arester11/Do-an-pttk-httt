
function cancel(id) {
    let order = JSON.parse(localStorage.orderList);
    order.splice(id, 1);
    localStorage.orderList = JSON.stringify(order);
    render();
}

function confirm(id) {
    addshipping(id);
    render();
}

function removeshipping(id) {
    let money = localStorage.moneymoney ? JSON.parse(localStorage.moneymoney) : [];
    let order = JSON.parse(localStorage.orderList);
    money.push({
        address: order[id].address,
        count: order[id].count,
        createdAt: order[id].createdAt,
        desc: order[id].desc,
        id: order[id].id,
        imagePrimary: order[id].imagePrimary,
        imageSecondary: order[id].imageSecondary,
        name: order[id].name,
        note: order[id].note,
        phone: order[id].phone,
        prePrice: order[id].prePrice,
        receiver: order[id].receiver,
        salePercent: order[id].salePercent,
        statusDelivery: "moneymoney",
        type: order[id].type,
    });
    localStorage.moneymoney = JSON.stringify(money);
    order.splice(id, 1);
    localStorage.orderList = JSON.stringify(order);
    rendershipping();
}
