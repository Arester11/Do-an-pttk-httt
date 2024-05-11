function logout() {
    let userKey = localStorage.getItem("currentUser");
    let users = JSON.parse(userKey);
    let listuser = JSON.parse(localStorage.getItem("listUser"));
    for (let i = 0; i < listuser.length; i++) {
        if (listuser[i].phone === users.phone) {
            listuser[i].cartlist = users.cartList;
            listuser[i].order = users.order;
        }
    }
    localStorage.setItem("listUser", JSON.stringify(listuser));
    localStorage.removeItem("currentUser");
    localStorage.setItem("currentUser", null);
    localStorage.removeItem("cartList");
    window.location.href = "index.html";

}
/* block and none logging*/
const btnSignup = document.querySelector(".header__logging--links");
const blockSignUp = document.querySelector(".form");
const main = document.getElementById("main");
const blockSignIn = document.querySelector(".form_1");
function signup() {
    blockSignUp.style.display = "block";
    blockSignIn.style.display = "none";
    document.getElementById('username').value="";
    document.getElementById('phone').value="";
    document.getElementById('pass').value="";
}
function signin() {
    document.getElementById('checkphone').innerHTML = "*Please enter phone";
    document.getElementById('checkpass').innerHTML = "*Please enter password";
    document.getElementById('username').value="";
    document.getElementById('phone').value="";
    document.getElementById('pass').value="";
    blockSignIn.style.display = "block";
    blockSignUp.style.display = "none";
}
function exitlogging() {
    document.getElementById('checkphone').innerHTML = "";
    document.getElementById('checkpass').innerHTML = "";
    document.getElementById('phone_user').value = "";
    document.getElementById('pass_user').value = "";
    document.getElementById('username').value="";
    document.getElementById('phone').value="";
    document.getElementById('pass').value="";
    blockSignUp.style.display = "none";
    blockSignIn.style.display = "none";
}

/* hien nguoi dung or admin */
function blockUser_or_Admin() {
    let userKey = localStorage.getItem("currentUser");
    let users = JSON.parse(userKey)
    let username ;
    if(users===null){
        username=`
        <div class="header__logging--log-in">
            <div" class="header__logging--link" onclick="signin()">Log in</a>
        </div>
        <div class="header__logging--separation"></div>
        <div class="header__logging--sign-up">
            <div class="header__logging--link" onclick="signup()">Sign up</div>
        </div>`;
        document.getElementById("header__cart").style.display="flex";
    }
    else if (users.isAdmin === false) {
        username = `
        <div>
            <div class="menu---item">
                <a href="#">${users.name}</a>
                <div class="submenu---">
                    <div class="submenu---item"><a href="#" onclick="order_user()">Order</a></div>
                    <div class="submenu---item"><a href="#" onclick="logout()">Log out</a></div>
                </div>
            </div>
        </div>
        `;
        document.getElementById("header__cart").style.display="flex";
    } else if (users.isAdmin === true) {
            username = `
            <div class="header__cart">
                <i class="bi bi-gear-fill" onclick="enterimportproduct()"></i>
            </div>

            <div>
                <div class="menu---item">
                    <a href="#">${users.name}</a>
                    <div class="submenu---">
                        <div class="submenu---item"><a href="#" onclick="logout()">Log out</a></div>
                    </div>
                </div>
            </div>
            `;
            document.getElementById("header__cart").style.display="none";
    }
    document.querySelector(".header__logging").innerHTML = username;
}
blockUser_or_Admin()
