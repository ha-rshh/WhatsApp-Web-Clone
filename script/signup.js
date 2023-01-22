const mobileNum = document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const ConfirmPasswordEl = document.getElementById("cnfpassword");
const submitBtn = document.getElementById("submit");
const userNameEl = document.getElementById("username");
const loginBtn = document.querySelector("#login-btn");
const mobileNumAlert = document.querySelector("#mobile-alert");
const alertDiv = document.querySelector(".alert");
const image = document.querySelector("#image");


let users = JSON.parse(localStorage.getItem("users"));

if (!users) users = [];

function createUser(e) {
  e.preventDefault();
  let userFound = false;
  const user = {
    username: userNameEl.value,
    mobile: mobileNum.value,
    password: passwordEl.value,
  };
  if (userNameEl.value == "") {
    alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E ";
    mobileNumAlert.innerText = "Please enter the username";
    setTimeout(() => {
      alertDiv.style.cssText = "transition:1s; display: none";
    }, 2000);
  } else if (mobileNum.value == "") {
    alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E ";
    mobileNumAlert.innerText = "Please enter the mobile number";
    setTimeout(() => {
      alertDiv.style.cssText = "transition:1s; display: none";
    }, 2000);
  } else if (passwordEl.value == "") {
    alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E ";
    mobileNumAlert.innerText = "Please enter the password";
    setTimeout(() => {
      alertDiv.style.cssText = "transition:1s; display: none";
    }, 2000);
  } else if (ConfirmPasswordEl.value == "") {
    alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E ";
    mobileNumAlert.innerText = "Please confirm the password";
    setTimeout(() => {
      alertDiv.style.cssText = "transition:1s; display: none";
    }, 2000);
  } else if (passwordEl.value != ConfirmPasswordEl.value) {
    alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E ";
    mobileNumAlert.innerText = "Password does not match";
    setTimeout(() => {
      alertDiv.style.cssText = "transition:1s; display: none";
    }, 2000);
  } else {

    // for (let i = 0; i < users.length; i++) {
    //   if (
    //     user.username === users[i].username ||
    //     user.mobile === users[i].mobile
    //   ) {
    //     userFound = true;
    //     mobileNumAlert.style.cssText = "transition : 0.8s;";
    //     mobileNumAlert.innerText = "User already exist";
    //     setTimeout(() => {
    //       mobileNumAlert.style.cssText = "transition : 0.8s;";
    //       mobileNumAlert.innerText = "Please Log in";
    //     }, 1000);
    //     break;
    //   }
    // }
    // if (!userFound) {
    //   users.push(user);
    // } else {
    //   alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E";
    //   mobileNumAlert.innerText = "User already exist";
    //   setTimeout(() => {
    //     alertDiv.style.cssText = "transition:1s; display: none";
    //   }, 2000);
    // }
    // localStorage.setItem("users", JSON.stringify(users));
    // reset();

    let currentDate = new Date();
    const id = 'id' + performance.now();
    
  let options = {
    body:JSON.stringify({
      user:userNameEl.value,  
      mobile : mobileNum.value,
      pass : passwordEl.value,
      date:String(currentDate),
      id,
      avatar:image.value,
    }),
    headers : {
        "content-type" : "application/json"
    },
    method:'POST'
  };

  fetch("http://localhost:3000", options)
   .then((resolve) => {
    localStorage.setItem("loggedInUser", JSON.stringify(resolve.data));
    window.location.href = "index.html"
  })
  .catch((error)=>{
    alert(error);
    userFound = true;
    mobileNumAlert.style.cssText = "transition : 0.8s;";
    mobileNumAlert.innerText = "User already exist";
    setTimeout(() => {
      mobileNumAlert.style.cssText = "transition : 0.8s;";
      mobileNumAlert.innerText = "Please Log in";
    }, 1000); 
  })
  reset();

  }
}

function reset() {
  userNameEl.value = "";
  mobileNum.value = "";
  passwordEl.value = "";
  ConfirmPasswordEl.value = "";
}

submitBtn.addEventListener("click", createUser);
loginBtn.addEventListener("click", () => {
  window.location.href = "./loginpage.html";
});