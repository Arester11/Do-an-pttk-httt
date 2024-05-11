function render() {
    let order = JSON.parse(localStorage.orderList);
    let table = `
    <tr class="tableheader">
        <th class="image_order">Image</th>
        <th>Name</th>
        <th class="quantity">Quantity</th>
        <th class="total">Total</th>
        <th class="edit">Edit</th>
    </tr>
    `;
    order.forEach((order, index) => {
        let temp = index;
        var total_product = 0;
        if (order.salePercent == null) {
            total_product = Number(order.prePrice)*Number(order.count);
        }
        else {
            total_product = (Number(order.prePrice) - (Number(order.prePrice) * Number(order.salePercent) / 100))*Number(order.count);
        }
        if (order.statusDelivery == "packaging") {
            index++;
            table += `
            <tr>
                <td class="imagetd"><img src="${order.imagePrimary}" width="120" height="120"></td>
                <td>${order.name}</td>
                <td>${order.count}</td>
                <td>${total_product}</td>
                <td class="edittd">
                    <button class="buttontd" onclick="tick(${temp})"><i class="far fa-trash-alt"></i></button>
                    <button class="buttontd" onclick="confirm(${temp})"><i class="fas fa-check-circle"></i></button>
                </td>
            </tr>`;
        }
    });
    document.getElementById("order").innerHTML = table;
    document.getElementById("shipping").style.backgroundColor = "#1C1C39";
    document.getElementById("shipping").style.color = "#D4B0B5";
    document.getElementById("packaging").style.backgroundColor = "#2638CE";
    document.getElementById("packaging").style.color = "white";
    document.querySelector(".money").style.backgroundColor = "#1C1C39";
    document.querySelector(".money").style.color = "#D4B0B5";
}

function rendershipping() {
    let order = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];
    let table = `
    <tr class="tableheader">
        <th class="image_order">Image</th>
        <th>Name</th>
        <th class="quantity">Quantity</th>
        <th class="total">Total</th>
        <th class="edit">Edit</th>
    </tr>
    `;
    order.forEach((order, index) => {
        let temp = index;
        var total_product = 0;
        if (order.salePercent == null) {
            total_product = Number(order.prePrice)*Number(order.count);
        }
        else {
            total_product =  (Number(order.prePrice) - (Number(order.prePrice) * Number(order.salePercent) / 100))*Number(order.count);
        }
        index++;
        if (order.statusDelivery == "shipping") {
            table += `
            <tr>
                <td class="imagetd"><img src="${order.imagePrimary}" width="120" height="120"></td>
                <td>${order.name}</td>
                <td>${order.count}</td>
                <td>${total_product}</td>
                <td class="edittd">
                <button class="buttontd" onclick="removeshipping (${temp})"><i class="fas fa-dollar-sign"></i></button>
                </td>
            </tr>`;
        }
    });
    document.getElementById("order").innerHTML = table;
    document.getElementById("packaging").style.backgroundColor = "#1C1C39";
    document.getElementById("packaging").style.color = "#D4B0B5";
    document.getElementById("shipping").style.backgroundColor = "#2638CE";
    document.getElementById("shipping").style.color = "white";
    document.querySelector(".money").style.backgroundColor = "#1C1C39";
    document.querySelector(".money").style.color = "#D4B0B5";
}
function rendermoney(){
    let order = localStorage.moneymoney ? JSON.parse(localStorage.moneymoney) : [];
    let table = `
    <tr class="tableheader">
        <th class="image_order">Image</th>
        <th>Name</th>
        <th class="quantity">Quantity</th>
        <th class="total">Total</th>
        <th class="edit">Edit</th>
    </tr>
    `;
    order.forEach((order, index) => {
        let temp = index;
        var total_product = 0;
        if (order.salePercent == null) {
            total_product = Number(order.prePrice)*Number(order.count);
        }
        else {
            total_product =  (Number(order.prePrice) - (Number(order.prePrice) * Number(order.salePercent) / 100))*Number(order.count);
        }
        index++;
        if (order.statusDelivery == "moneymoney") {
            table += `
            <tr>
                <td class="imagetd"><img src="${order.imagePrimary}" width="120" height="120"></td>
                <td>${order.name}</td>
                <td>${order.count}</td>
                <td>${total_product}</td>
                <td class="edittd">
                <button class="buttontd_money" ><i class="fa fa-check"></i></button>
                </td>
            </tr>`;
        }
    });
    document.getElementById("order").innerHTML = table;
    document.getElementById("packaging").style.backgroundColor = "#1C1C39";
    document.getElementById("packaging").style.color = "#D4B0B5";
    document.getElementById("shipping").style.backgroundColor = "#1C1C39";
    document.getElementById("shipping").style.color = "#D4B0B5";
    document.querySelector(".money").style.backgroundColor = "#2638CE";
    document.querySelector(".money").style.color = "white";
}

/****************ARE YOU SURE *************/

function tick(id) {
    document.getElementById("notice").style.display = "block";
    document.getElementById("notice").innerHTML = `
    <button class="exitnotice" onclick="no()"></button>
    <div class="areyousure">
        <div>Are You Sure?</div>
        <input class="yes" type="button" value="Yes" onclick="yes(${id})">
        <input class="no" type="button" value="No" onclick="no()">
    </div>
    `;
}

function no() {
    document.getElementById("notice").style.display = "none";
}

function yes(id) {
    cancel(id);
    document.getElementById("notice").style.display = "none";
}
