let userKey = localStorage.getItem('listUser');
let users = JSON.parse(userKey) || [];
function management_users(){
let tablecontent=`
<tr>
<th class="sizeN"> Name</th>
<th class="sizePN"> Phone Number</th>
<th class="sizePw"> Password</th>
<th class="sizeP"> Position</th>
<th class="sizeE"> Edit</th>
</tr>
`;
for (let i = 0; i < users.length; i++) {
    if (i === 0) {
        tablecontent +=
            `<tr>
            <td>${users[i].name}</td>
            <td>${users[i].phone}</td>
            <td type="password">${users[i].pass}</td>
            <td>admin</td>
            <td>
                
            </td>
            </tr>
`;
       
    } else {
        tablecontent += `
<tr>
            <td>${users[i].name}</td>
            <td>${users[i].phone}</td>
            <td type="password">${users[i].pass}</td>
            <td>user${i}</td>
            <td ><i onclick="exituser_notice(${i})"  class="trash bi bi-trash"></i></td>
            </tr>
        `; 
    }
}
document.getElementById('management_users').innerHTML = tablecontent;
}
management_users();

function reload() {
    location.reload();
}
function search() {
    let name = document.getElementById("name").value;
    let userKey = localStorage.getItem('listUser');
    let users = JSON.parse(userKey) || [];
    let tablecontents = `
    <tr>
        <th class="sizeN"> Name</th>
        <th class="sizePN"> Phone Number</th>
        <th class="sizePw"> Password</th>
        <th class="sizeP"> Position</th>
        <th> Edit</th>
    </tr>`;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.toUpperCase().includes(name.toUpperCase())) {
            tablecontents += `
            <tr>
                        <td>${users[i].name}</td>
                        <td>${users[i].phone}</td>
                        <td type="password">${users[i].pass}</td>
                        <td>user${i}</td>
                        <td ><i onclick="delete_user(${i})" class="trash bi bi-trash"></i></td>
            </tr>`;

        }
    }
    document.getElementById('management_users').innerHTML = tablecontents;
}
function delete_user(i) {
    users.splice(i, 1);
    document.getElementById('exitnotice_product').style.display="none";
    document.querySelector('.ays__').style.display='none';
    localStorage.setItem('listUser', JSON.stringify(users));
    management_users();
}

function block_none(){
    document.querySelector('.AYS').style.display='none';
}
function exituser_notice(id){
    document.getElementById('exitnotice_product').style.display="block";
    document.querySelector('.ays__').style.display='block';
    let ays=`
        ARE YOU SURE ?
        <div class="YES_NO">
            <button class="user_editting" onclick="delete_user(${id})">Yes</button>
            <button class="user_editting" onclick="no_exitall()">No</button>
        </div>`
        document.querySelector('.ays__').innerHTML = ays;
}
function no_exitall(){
    document.querySelector('.ays__').style.display='none';
    document.getElementById('exitnotice_product').style.display="none";
}
// const yns = document.querySelectorAll('.trash')
// const AYS = document.querySelector('.AYS__')

// yns.forEach(yn => {
//     yn.addEventListener('click',()=> {
//         AYS.classList.remove('unactive')
//         AYS.classList.add('active')
//     })
// })
// document.querySelector('.no').addEventListener('click',()=>{
//     AYS.classList.add('unactive')
//     AYS.classList.remove('active')
// })
// document.querySelector('.yes').addEventListener('click',()=>{
//    const listUsers = JSON.parse(localStorage.getItem('listUser'))
//    for(let i = 0; i< listUsers.length;i++){
//     listUsers.splice(i,1)
//    }
//    localStorage.setItem('listUser',JSON.stringify(listUsers))
//    AYS.classList.add('unactive')
//     AYS.classList.remove('active')
// })
