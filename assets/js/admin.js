function enterimportproduct()
{
    document.getElementById('admin').style.display='block';
    document.getElementById('grid_index').style.display='none';
    document.getElementById('product_search').style.display='none';
    document.getElementById('down_arrow').style.display='none';
    document.getElementById('user_cart').style.display="none";
    document.getElementById('order_user_cart').style.display="none";
}
function home()
{
    reload();
    document.getElementById('admin').style.display='none';
    document.getElementById('user_cart').style.display="none";
    document.getElementById('grid_index').style.display='block';
    document.getElementById('product_search').style.display='block';
    document.getElementById('down_arrow').style.display='block';
    document.getElementById('order_user_cart').style.display="none";
}
function Product()
{
    renderlistproduct()
    document.getElementById('menu_product').style.backgroundColor="transparent";
    document.getElementById('menu_stat').style.backgroundColor="#1c1c39";
    document.getElementById('menu_order').style.backgroundColor="#1c1c39";
    document.getElementById('menu_user').style.backgroundColor="#1c1c39";

    document.getElementById('admin_product').style.display='block';
    document.getElementById('admin_stat').style.display='none';
    document.getElementById('admin_order').style.display='none';
    document.getElementById('admin_user').style.display='none';

    document.getElementById('menu_product').style.color="#1c1c39";
    document.getElementById('menu_stat').style.color="#d4b0b5";
    document.getElementById('menu_order').style.color="#d4b0b5";
    document.getElementById('menu_user').style.color="#d4b0b5";

    document.getElementById('menu_stat').style.color="#d4b0b5";
    document.getElementById('menu_order').style.color="#d4b0b5";
    document.getElementById('menu_user').style.color="#d4b0b5";

    document.getElementById('admin_mode').style.display='none';
    resetstat();
}
function Stat()
{
    document.getElementById('menu_product').style.backgroundColor="#1c1c39";
    document.getElementById('menu_stat').style.backgroundColor="transparent";
    document.getElementById('menu_order').style.backgroundColor="#1c1c39";
    document.getElementById('menu_user').style.backgroundColor="#1c1c39";

    document.getElementById('menu_product').style.color="#d4b0b5";
    document.getElementById('menu_stat').style.color="#1c1c39";
    document.getElementById('menu_order').style.color="#d4b0b5";
    document.getElementById('menu_user').style.color="#d4b0b5";

    document.getElementById('admin_stat').style.display='block';
    document.getElementById('admin_product').style.display='none';
    document.getElementById('admin_order').style.display='none';
    document.getElementById('admin_user').style.display='none';

    document.getElementById('menu_product').style.color="#d4b0b5";
    document.getElementById('menu_order').style.color="#d4b0b5";
    document.getElementById('menu_user').style.color="#d4b0b5";

    document.getElementById('admin_mode').style.display='none';
    cancelimport();
    resetstat();
}
function Order()
{
    render();
    document.getElementById('menu_product').style.backgroundColor="#1c1c39";
    document.getElementById('menu_stat').style.backgroundColor="#1c1c39";
    document.getElementById('menu_order').style.backgroundColor="transparent";
    document.getElementById('menu_user').style.backgroundColor="#1c1c39";

    document.getElementById('menu_product').style.color="#d4b0b5";
    document.getElementById('menu_stat').style.color="#d4b0b5";
    document.getElementById('menu_order').style.color="#1c1c39";
    document.getElementById('menu_user').style.color="#d4b0b5";

    document.getElementById('admin_order').style.display='block';
    document.getElementById('admin_stat').style.display='none';
    document.getElementById('admin_product').style.display='none';
    document.getElementById('admin_user').style.display='none';

    document.getElementById('menu_product').style.color="#d4b0b5";
    document.getElementById('menu_stat').style.color="#d4b0b5";
    document.getElementById('menu_user').style.color="#d4b0b5";

    document.getElementById('admin_mode').style.display='none';
    cancelimport();
    resetstat();
}
function User()
{
    document.getElementById('menu_product').style.backgroundColor="#1c1c39";
    document.getElementById('menu_stat').style.backgroundColor="#1c1c39";
    document.getElementById('menu_order').style.backgroundColor="#1c1c39";
    document.getElementById('menu_user').style.backgroundColor="transparent";

    document.getElementById('admin_product').style.display='none';
    document.getElementById('admin_stat').style.display='none';
    document.getElementById('admin_order').style.display='none';
    document.getElementById('admin_user').style.display='block';

    document.getElementById('menu_product').style.color="#d4b0b5";
    document.getElementById('menu_stat').style.color="#d4b0b5";
    document.getElementById('menu_order').style.color="#d4b0b5";
    document.getElementById('menu_user').style.color="#1c1c39";

    document.getElementById('menu_stat').style.color="#d4b0b5";
    document.getElementById('menu_order').style.color="#d4b0b5";
    document.getElementById('menu_product').style.color="#d4b0b5";

    document.getElementById('admin_mode').style.display='none';
    cancelimport();
    resetstat();
}
function resetstat(){
    document.getElementById('datefrom').value="";
    document.getElementById('dateto').value="";
}