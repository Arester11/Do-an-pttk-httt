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
        let usersearch = list.filter((list,index) => {
            return list.name.toUpperCase().includes(valueselect.toUpperCase());
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

