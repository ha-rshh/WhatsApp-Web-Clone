// take input
// submit event listener
// check if user data is equal to users local storage data 
// if user found redirect to main page
// otherwise redirect to signup page

const mobileNum = document.getElementById('mobile');
const passwordEl = document.getElementById('password');
const submitBtn = document.getElementById('submit');
const mobileNumAlert = document.querySelector('#mobile-alert');
const alertDiv = document.querySelector(".alert")
const signupBtn = document.querySelector('#signup-btn');

let users = JSON.parse(localStorage.getItem('users'));

function checkUser(e){
    e.preventDefault();
  
//     if (mobileNum.value == '') {
//         alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E "
//         mobileNumAlert.innerText = "Please enter valid Mobile number"
//         setTimeout(() => {
//             alertDiv.style.cssText = "transition:1s; display: none";
//         }, 2000);
//     } else if (passwordEl.value == '') {
//         alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E "
//         mobileNumAlert.innerText = "Please enter valid Password"
//         setTimeout(() => {
//             alertDiv.style.cssText = "transition:1s; display: none";
//         }, 2000);
//     } else if(!users) {
//         alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E"
//                 mobileNumAlert.innerText = "No user found"
//                 setTimeout(() => {
//                     alertDiv.style.cssText = "transition:1s; display: none";
//                 }, 2000);
//     }
//     for(let i = 0 ; i < users.length; i++){
//         if(mobileNum.value === users[i].mobile && passwordEl.value === users[i].password){
//             window.location.href = "index.html";
//             // console.log('user Exist')
//             const loggedInUser = users[i];
//             localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
//         }
//         else {
//             alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E "
//             mobileNumAlert.innerText = "Your username and/ or password do not match"
//             setTimeout(() => {
//                 alertDiv.style.cssText = "transition:1s; display: none";
//             }, 2000);
//         }
//     }


let options = {
    body:JSON.stringify({
        mobile : mobileNum.value,
        pass : passwordEl.value
    }),
    headers : {
        "content-type" : "application/json"
    },
    method:'POST'
};

fetch("http://localhost:3000/login", options)
.then((resolve)=>{
    return resolve.json();
})
.then((data) => {
    console.log(data)
    localStorage.setItem("loggedInUser", JSON.stringify(data.data.user));
    window.location.href = "index.html"
})
.catch((error)=>{
    alert(error);
    alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E "
            mobileNumAlert.innerText = "Your username and/ or password do not match"
            setTimeout(() => {
                alertDiv.style.cssText = "transition:1s; display: none";
            }, 2000);
})

}

submitBtn.addEventListener('click', checkUser);
signupBtn.addEventListener('click', () => {
    window.location.href = "./signuppage.html";
} )
