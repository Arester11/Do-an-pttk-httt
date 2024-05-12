function deleteproduct(id) {
    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    list.splice(id, 1);
    localStorage.setItem('list', JSON.stringify(list));
    renderlistproduct();
}
function editproduct(id) {
    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    let product = list[id];
    document.getElementById('imagePrimary').value = product.imagePrimary;
    document.getElementById('imageSecondary').value = product.imageSecondary;
    document.getElementById('name').value = product.name;
    document.getElementById('desc').value = product.desc;
    document.getElementById('classify').value = product.type;
    document.getElementById('prePrice').value = product.prePrice;
    document.getElementById('salePercent').value = product.salePercent;
    document.getElementById('index').value = id;
    document.getElementById('saveproduct').style.display = "none";
    document.getElementById('update').style.display = "inline-block";
    document.getElementById('import_table').style.display = "block";
    document.getElementById('showcontain').style.display = "none";
    document.getElementById('cancelcontain').style.display = "block";
    document.getElementById('list-product').style.display = "none";
    document.getElementById('sort').disabled = true;
    document.getElementById('sort').style.cursor = "pointer";
}
function changelist(id) {
    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    let index = document.getElementById('index').value;
    let imagePrimary = document.getElementById('imagePrimary').value;
    let imageSecondary = document.getElementById('imageSecondary').value;
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let type = document.getElementById('classify').value;
    let prePrice = document.getElementById('prePrice').value;
    let salePercent = document.getElementById('salePercent').value;
    if (imagePrimary.trim().length == 0) {
        imagePrimary = '';
        document.getElementById('eror-imagePrimary').innerHTML = '*Please add images';
    }
    else if (imagePrimary.trim().length < 2) {
        imagePrimary = '';
        document.getElementById('eror-imagePrimary').innerHTML = '*Please Enter Full Information';
    }
    else if (!isURL(imagePrimary)) {
        imagePrimary = '';
        document.getElementById('eror-imagePrimary').innerHTML = '*Incorrect Image Format';
    }
    else {
        document.getElementById('eror-imagePrimary').innerHTML = '';
    }
    /////
    if (imageSecondary.trim().length < 2) {
        imageSecondary = '';
        document.getElementById('eror-imageSecondary').innerHTML = '*Please Enter Full Information';
    }
    else if (!isURL(imageSecondary)) {
        imageSecondary = '';
        document.getElementById('eror-imageSecondary').innerHTML = '*Incorrect Image 2 Format';
    }
    else {
        document.getElementById('eror-imageSecondary').innerHTML = '';
    }
    ////
    if (name.trim().length == 0) {
        name = '';
        document.getElementById('eror-name').innerHTML = '*Please enter product name';
    }
    else if (name.trim().length <= 5) {
        name = '';
        document.getElementById('eror-name').innerHTML = '*Please enter the full product name';
    }
    else {
        document.getElementById('eror-name').innerHTML = '';
    }
    //////
    if (desc.trim().length == 0) {
        desc = '';
        document.getElementById('eror-desc').innerHTML = '*Please enter desc';
    }
    else if (desc.trim().length < 2) {
        desc = '';
        document.getElementById('eror-desc').innerHTML = '*Please enter complete desc';
    }
    else {
        document.getElementById('eror-desc').innerHTML = '';
    }
    ////
    if (type == "Choose") {
        type = '';
        document.getElementById('eror-type').innerHTML = '*Please enter type';
    }
    else {
        document.getElementById('eror-type').innerHTML = '';
    }
    ///
    if (prePrice == 0) {
        prePrice = '';
        document.getElementById('eror-prePrice').innerHTML = '*Please enter Price';
    }
    else if (prePrice < 1) {
        prePrice = '';
        document.getElementById('eror-prePrice').innerHTML = '*Please review Prices';
    }
    else {
        document.getElementById('eror-prePrice').innerHTML = '';
    }
    /////
    if (salePercent == 0) {
        salePercent = '';
        document.getElementById('eror-salePercent').innerHTML = '*Please enter sale percent';
    }
    else if (salePercent < 1) {
        salePercent = '';
        document.getElementById('eror-salePercent').innerHTML = '*Please review the sale percent';
    }
    else {
        document.getElementById('eror-salePercent').innerHTML = '';
    }

    if (imagePrimary && name && desc && type && prePrice && salePercent) {
        list[index] = {
            id: Number(index) + 1,
            imagePrimary: document.getElementById('imagePrimary').value,
            imageSecondary: document.getElementById('imageSecondary').value,
            name: document.getElementById('name').value,
            desc: document.getElementById('desc').value,
            type: document.getElementById('classify').value,
            prePrice: parseInt(document.getElementById('prePrice').value),
            salePercent: parseInt(document.getElementById('salePercent').value),
        }
        localStorage.setItem("list", JSON.stringify(list));
        renderlistproduct();
        resetform();
        document.getElementById('saveproduct').style.display = "inline-block";
        document.getElementById('update').style.display = "none";
        document.getElementById('sort').disabled = false;
        document.getElementById('sort').style.cursor = "pointer";
    }
}