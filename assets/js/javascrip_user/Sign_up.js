
if (localStorage.getItem("listUser") === null) {
  const listuser = [
    {
      name: "Admin",
      phone: "3122",
      pass: "123",
      isAdmin: true,
      order: [],
      cartlist: [],
    },
];
localStorage.setItem("listUser", JSON.stringify(listuser));
} else {
  document.querySelector(".myform-2").addEventListener("submit", (e) => {
    e.preventDefault();
    let list = JSON.parse(localStorage.getItem("listUser"));
    let name = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;

    if (name && phone && pass) {
      if (phone.length !== 10) {
        document.getElementById("checkphone_").style.display = "block";
      }
      else {
        if (testId(phone, list)) {
          document.getElementById("checkphone_").style.display = "block";
          document.getElementById("checkphone_").innerText = "phone number already exited";
        } else {
          const user = {
            name: name,
            phone: phone,
            pass: pass,
            isAdmin: false,
            order: [],
            cartlist: [],
          };
          list.push(user);
          localStorage.setItem("listUser", JSON.stringify(list));
          alert("Sign up success");
          document.querySelector(".form").style.display="none";
          document.querySelector(".form_1").style.display="block";
        }
      }
    } else {
      namecheck(name);
      phonecheck(phone);
      passcheck(pass);
    }
  });

}
// Kiểm tra tài khoản đã tồn tại chưa
function testId(phone, listUsers) {
  return listUsers.some((user) => user.phone === phone);
}

function namecheck(name) {
  if (!name) {
    document.getElementById("checkname").style.display = "block";
  }
}

function phonecheck(phone) {
  if (!phone) {
    document.getElementById("checkphone_").style.display = "block";
  }
}

function passcheck(pass) {
  if (!pass) {
    document.getElementById("checkpass_").style.display = "block";
  }
}
