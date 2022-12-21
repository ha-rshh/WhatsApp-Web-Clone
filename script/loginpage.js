// take input
// submit event listener
// check if user data is equal to users local storage data 
// if user found redirect to main page
// otherwise redirect to signup page

const mobileNum = document.getElementById('mobile');
const passwordEl = document.getElementById('password');
const submitBtn = document.getElementById('submit');

let users = JSON.parse(localStorage.getItem('users'));
console.log(users)

function checkUser(e){
    e.preventDefault();
    if (mobileNum.value == '' || passwordEl.value == '') console.log('Fill all fields')
    
    for(let i = 0 ; i < users.length; i++){
        
        if(mobileNum.value === users[i].mobile && passwordEl.value === users[i].password){
            console.log('user Exist')
            const loggedInUser = users[i];
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
            window.location.href = "http://www.w3schools.com";
        } 
        else {
            console.log("user does not exist")
        }
    }
}

submitBtn.addEventListener('click', checkUser);

