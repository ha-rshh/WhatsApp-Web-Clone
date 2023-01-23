const mobileNum = document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const mobileNumAlert = document.querySelector("#mobile-alert");
const alertDiv = document.querySelector(".alert");
const signupBtn = document.querySelector("#signup-btn");

let users = JSON.parse(localStorage.getItem("users"));

function checkUser(e) {
  e.preventDefault();

  let options = {
    body: JSON.stringify({
      mobile: mobileNum.value,
      pass: passwordEl.value,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };

  fetch("https://whatsapp-api-login.onrender.com/login", options)
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error);
      alertDiv.style.cssText = "transition: 1s; background-color: #FF1E1E ";
      mobileNumAlert.innerText = "Your username and/ or password do not match";
      setTimeout(() => {
        alertDiv.style.cssText = "transition:1s; display: none";
      }, 2000);
    });
}

submitBtn.addEventListener("click", checkUser);
signupBtn.addEventListener("click", () => {
  window.location.href = "./signuppage.html";
});
