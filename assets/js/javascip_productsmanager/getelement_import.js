function isURL(imagePrimary) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(imagePrimary);
}
function save() {
    let imagePrimary = document.getElementById('imagePrimary').value;
    let imageSecondary = document.getElementById('imageSecondary').value;
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let type = document.getElementById('classify').value;
    let prePrice = document.getElementById('prePrice').value;
    let salePercent = document.getElementById('salePercent').value;
    if (imagePrimary.trim().length == 0) {
        imagePrimary = '';
        document.getElementById('eror-imagePrimary').innerHTML = '*Please add images 1';
    }
    else if (imagePrimary.trim().length < 2) {
        imagePrimary = '';
        document.getElementById('eror-imagePrimary').innerHTML = '*Please Enter Full Information';
    }
    else if (!isURL(imagePrimary)) {
        imagePrimary = '';
        document.getElementById('eror-imagePrimary').innerHTML = '*Incorrect Image 1 Format';
    }
    else {
        document.getElementById('eror-imagePrimary').innerHTML = '';
    }
    /////
    if (imageSecondary.trim().length == 0) {
        imageSecondary = '';
        document.getElementById('eror-imageSecondary').innerHTML = '*Please add images 2';
    }
    else if (imageSecondary.trim().length < 2) {
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
        document.getElementById('eror-desc').innerHTML = '*Please enter information';
    }
    else if (desc.trim().length < 2) {
        desc = '';
        document.getElementById('eror-desc').innerHTML = '*Please enter complete information';
    }
    else {
        document.getElementById('eror-desc').innerHTML = '';
    }
    ////
    if (type == "Choose") {
        console.log(type)
        type = '';
        document.getElementById('eror-type').innerHTML = '*Please enter type';
    }
    else {
        document.getElementById('eror-type').innerHTML = '';
    }
    ///
    if (prePrice == 0) {
        prePrice = '';
        document.getElementById('eror-prePrice').innerHTML = '*Please enter prePrice';
    }
    else if (prePrice < 1) {
        prePrice = '';
        document.getElementById('eror-prePrice').innerHTML = '*Please review prices';
    }
    else {
        document.getElementById('eror-prePrice').innerHTML = '';
    }
    /////
    if (salePercent == 0) {
        salePercent = '';
        document.getElementById('eror-salePercent').innerHTML = '*Please enter item number';
    }
    else if (salePercent < 1) {
        salePercent = '';
        document.getElementById('eror-salePercent').innerHTML = '*Please review the number of goods you just entered';
    }
    else {
        document.getElementById('eror-salePercent').innerHTML = '';
    }

    if (imagePrimary && name && desc && type && prePrice && salePercent) {
        let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
        const index = 32;
        list.push({
            id: Number(index),
            imagePrimary: imagePrimary,
            imageSecondary: imageSecondary,
            name: name,
            desc: desc,
            type: type,
            prePrice: parseInt(prePrice),
            salePercent: parseInt(salePercent),
        });
        localStorage.setItem('list', JSON.stringify(list));
        this.renderlistproduct();
        resetform();
        document.getElementById('sort').disabled = false;
        document.getElementById('sort').style.cursor = "pointer";
    }
}