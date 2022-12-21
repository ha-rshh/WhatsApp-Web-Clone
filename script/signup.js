const mobileNum = document.getElementById('mobile');
const passwordEl = document.getElementById('password');
const submitBtn = document.getElementById('submit');
const userNameEl = document.getElementById('username');
const loginBtn = document.querySelector('#login-btn');
let users = JSON.parse(localStorage.getItem('users'))

if(!users){
    users = [];
}

function createUser(e){
    e.preventDefault();
    const user = {
        username: userNameEl.value,
        mobile : mobileNum.value,
        password: passwordEl.value,
    }
    let userFound = false;
    for(let i = 0; i<users.length; i++){
        if(user.username === users[i].username || user.mobile === users[i].mobile ){
            userFound = true;
            break;
        }
    }
    if(!userFound) users.push(user) 
    else console.log("user already exist")

    localStorage.setItem("users",JSON.stringify(users))
}
submitBtn.addEventListener('click', createUser)

loginBtn.addEventListener('click', () => {
    window.location.href = "loginpage.html";
} )
