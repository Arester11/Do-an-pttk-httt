function cart_user(){
    document.getElementById('user_cart').style.display="block";
    document.getElementById('grid_index').style.display="none";
    document.getElementById('admin').style.display="none";
    document.getElementById('order_user_cart').style.display="none";
}

function order_user(){
    document.getElementById('order_user_cart').style.display="block";
    document.getElementById('user_cart').style.display="none";
    document.getElementById('grid_index').style.display="none";
    document.getElementById('admin').style.display="none";
    let orderBtn = document.querySelector(".order-button__packaging");
    orderBtn.click();
}
 function addcart_user(){
    
}