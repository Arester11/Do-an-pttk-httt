
function showimport() {
    document.getElementById('import_table').style.display = "block";
    document.getElementById('showcontain').style.display = "none";
    document.getElementById('cancelcontain').style.display = "block";
    document.getElementById('list-product').style.display = "none";
    document.getElementById('sort').disabled=true;
    document.getElementById('sort').style.cursor = "not-allowed";
}
function cancelimport() {
    resetform();
    document.getElementById('import_table').style.display = "none";
    document.getElementById('showcontain').style.display = "block";
    document.getElementById('cancelcontain').style.display = "none";
    document.getElementById('list-product').style.display = "block";
    document.getElementById('list-product').style.border = "none";
    document.getElementById('saveproduct').style.display = "inline-block";
    document.getElementById('update').style.display = "none";
    document.getElementById('sort').disabled=false;
    document.getElementById('sort').style.cursor = "pointer";
}
function resetform() {
    document.getElementById('imagePrimary').value = "";
    document.getElementById('imageSecondary').value = "";
    document.getElementById('name').value = "";
    document.getElementById('desc').value = "";
    document.getElementById('classify').value = "Choose";
    document.getElementById('prePrice').value = "";
    document.getElementById('salePercent').value = "";
    document.getElementById('eror-imagePrimary').innerHTML="";
    document.getElementById('eror-imageSecondary').innerHTML="";
    document.getElementById('eror-name').innerHTML ="";
    document.getElementById('eror-desc').innerHTML ="";
    document.getElementById('eror-type').innerHTML ="";
    document.getElementById('eror-prePrice').innerHTML ="";
    document.getElementById('eror-salePercent').innerHTML ="";
}

function sortlist() {
    let valueselect = document.getElementById('sort').value;
    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    if (valueselect !== "All") {
        let usersearch = list.filter((list, index) => {
            return list.type.toUpperCase().includes(valueselect.toUpperCase());
        });
        renderlisttype(usersearch);
        if(usersearch.length===0)
        {
            document.getElementById('found').innerHTML="Not found";
        }
        else
        {
            document.getElementById('found').innerHTML="";
        }
    }
    else {
        document.getElementById('found').innerHTML="";
        renderlistproduct();
    }
}
function searchname() {
    let valueselect = document.getElementById('header-search-input').value;
    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    if (valueselect !== "") {
        let usersearch = list.filter((item,index) => {
            return removeDiacritics(item.name).toUpperCase().includes(removeDiacritics(valueselect).toUpperCase());
        });
        if(usersearch.length===0)
        {
            document.getElementById('found').innerHTML="Not found";
        }
        else
        {
            document.getElementById('found').innerHTML="";
        }
        renderlisttype(usersearch);
    }
    else {
        document.getElementById('found').innerHTML="";
        renderlistproduct();
    }
}
function tickz(id)
{
    document.getElementById('exitnotice_product').style.display="block";
    document.getElementById('notice_product').style.display="block";
    document.getElementById('notice_product').innerHTML=
    ` Are you sure!
    <div class="buttonnotice_product">
        <div class="Yes">
            <button onclick="noticeyes(${id})">YES</button>
        </div>
        <div class="No">
            <button onclick="noticeno()">NO</button>
        </div>
    </div>`
}

function noticeyes(id)
{
    deleteproduct(id);
    renderlistproduct();
    document.getElementById('notice_product').style.display="none";
    document.getElementById('exitnotice_product').style.display="none";
}

function noticeno()
{
    document.getElementById('notice_product').style.display="none";
    document.getElementById('exitnotice_product').style.display="none";
    document.querySelector('.ays__').style.display='none';
}

function removeDiacritics(str) {
    const diacriticsMap = {
        'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
        'ă': 'a', 'ắ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
        'â': 'a', 'ấ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
        'đ': 'd',
        'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
        'ê': 'e', 'ế': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
        'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
        'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
        'ô': 'o', 'ố': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
        'ơ': 'o', 'ớ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
        'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
        'ư': 'u', 'ứ': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
        'ý': 'y', 'ỳ': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
        'Á': 'A', 'À': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
        'Ă': 'A', 'Ắ': 'A', 'Ằ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
        'Â': 'A', 'Ấ': 'A', 'Ầ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
        'Đ': 'D',
        'É': 'E', 'È': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
        'Ê': 'E', 'Ế': 'E', 'Ề': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
        'Í': 'I', 'Ì': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
        'Ó': 'O', 'Ò': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
        'Ô': 'O', 'Ố': 'O', 'Ồ': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
        'Ơ': 'O', 'Ớ': 'O', 'Ờ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
        'Ú': 'U', 'Ù': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
        'Ư': 'U', 'Ứ': 'U', 'Ừ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
        'Ý': 'Y', 'Ỳ': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y'
    };
    return str.replace(/[^A-Za-z0-9]/g, function(x) {
        return diacriticsMap[x] || x;
    });
}