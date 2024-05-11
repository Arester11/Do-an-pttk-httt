function addshipping(id) {
    let order = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];
    order[id] = {
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
        statusDelivery: "shipping",
        type: order[id].type,
    }
    localStorage.orderList = JSON.stringify(order);
}
const createdAt = new Date();
console.log(createdAt.toLocaleString())
