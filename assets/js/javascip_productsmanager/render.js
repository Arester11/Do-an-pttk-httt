function renderlistproduct() {
    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    let tablecontent = `
    <tr class="tablecontain_product">
        <td class="image1">Image</td>
        <td class="Name">Name</td>
        <td class="Cost">Price</td>
        <td class="Edit">Edit</td>
    </tr>`;
    list.forEach((list, index) => {
        let studentID = index;
        var total_product=0;
        if(list.salePercent==null){
            total_product=Number(list.prePrice);
        }
        else{
            total_product=Number(list.prePrice)-(Number(list.prePrice)*Number(list.salePercent)/100);
        }
        index++;
        tablecontent += `
            <tr class="productcontain">
                <td class="image1"><img class="imagePrimary_product" src="${list.imagePrimary}"></td>
                <td class="Name">${list.name}</td>
                <td class="Cost">${total_product}$</td>
                <td class="Edit">
                    <button class="iconedit" onclick='editproduct(${studentID})'><i class='fa fa-edit'></i></button>
                    <button class="icontrash" onclick='tickz(${studentID})'><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>`;
    })
    document.getElementById('list-product').innerHTML = tablecontent;
    document.getElementById('import_table').style.display = "none";
    document.getElementById('showcontain').style.display = "block";
    document.getElementById('cancelcontain').style.display = "none";
    document.getElementById('list-product').style.display = "block";
    document.getElementById('list-product').style.border = "none";
}
function renderlisttype(arr) {
    let tablecontent = `
    <tr class="tablecontain_product">
        <td class="image1">Image</td>
        <td class="Name">Name</td>
        <td class="Cost">Price</td>
        <td class="Edit">Edit</td>
    </tr>`;
    arr.forEach((list, index) => {
        let studentID = index;
        var total_product=0;
        if(list.salePercent==null){
            total_product=Number(list.prePrice);
        }
        else{
            total_product=Number(list.prePrice)-(Number(list.prePrice)*Number(list.salePercent)/100);
        }
        index++;
        tablecontent += `
            <tr class="productcontain">
            <td class="image1"><img class="imagePrimary_product" src="${list.imagePrimary}"></td>
            <td class="Name">${list.name}</td>
            <td class="Cost">${total_product}$</td>
            <td class="Edit">
                <button class="iconedit" onclick='editproduct(${studentID})'><i class='fa fa-edit'></i></button>
                <button class="icontrash" onclick='tickz(${studentID})'><i class='fa fa-trash-o'></i></button>
            </td>
        </tr>`;
    });
    document.getElementById('list-product').innerHTML = tablecontent;
}