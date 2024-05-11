// kiểm tra đăng ký chưa
function testSign_up(Phone, pass, listUsers) {
    let users = JSON.parse(listUsers) || [];
    let dem = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].phone === Phone && users[i].pass === pass && users[i].isAdmin === false) {
            return dem++;
        } else {
            if (users[i].phone === Phone && users[i].pass === pass && users[i].isAdmin === true) {
                return dem = dem + 2;
            }
        }
    }
    return dem = dem + 3;
}

document.querySelector(".myform-1").addEventListener("submit", (e) => {
    e.preventDefault();
    const phone = document.getElementById("phone_user").value;
    const pass = document.getElementById("pass_user").value;
    let names;
    if (phone === "" || pass === "") {
        checkphone(phone);
        checkpass(pass);
    } else {
        let users = JSON.parse(localStorage.getItem("listUser"));
        let dem = 0;
        let currentUser;
        for (let i = 0; i < users.length; i++) {
            if (users[i].phone === phone && users[i].pass === pass && users[i].isAdmin === false) {
                 dem++;
                    currentUser={
                    phone: users[i].phone,
                    name: users[i].name,
                    cartList:users[i].cartlist,
                    order:users[i].order,
                    isAdmin:false,
                 };
                 localStorage.setItem("currentUser",JSON.stringify(currentUser));
            } else {
                if (users[i].phone === phone && users[i].pass === pass && users[i].isAdmin === true) {
                     dem = dem + 2;
                        currentUser={
                        phone: users[i].phone,
                        name: users[i].name,
                        cartList:users[i].cartlist,
                        order:users[i].order,
                        isAdmin:true,
                     };
                     localStorage.setItem("currentUser",JSON.stringify(currentUser));
                }
            }
        }
        if(dem===1){
            alert("logged in");
            window.location.href="index.html";
        }else{
        if(dem===2){
            alert("logged in as admin");
            window.location.href="index.html";
        }else
        {
            checklog();
        }
    }
}
});

function checkphone(phone) {
    if (!phone)
        document.getElementById("checkphone").style.display = "block";
}

function checkpass(pass) {
    if (!pass)
        document.getElementById("checkpass").style.display = "block";
}

function checklog() {
    document.getElementById("checklog").style.display = "block";
}