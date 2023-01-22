const inputBox = document.querySelector(".input-box");
const searchIcon = document.querySelector(".search-icon");
const grpMenu = document.querySelector(".grp-menu")
const menuList = document.getElementById("menu-list");
const filter = document.querySelector(".filter");
const filterMsg = document.querySelector(".filter-msg");
const msgDrop = document.getElementById("msg-drop");
const contactList = document.querySelector("#contact-list");
const profilePic = document.querySelector(".profile-img");
const profileContainer = document.getElementById("profile-container");
const profIcon = document.querySelector(".prof-icon");
const statusIcon = document.querySelector('.status');
const selectPerson = document.querySelector('#contact-list')
const rightMost = document.querySelector(".right-most-container");
const chatPerson = document.querySelector(".right-chatbox") 
const chatpersonImg = document.querySelector(".person-img-details img")
const chatPersonName = document.querySelector(".person-name")
const menuBar = document.querySelector('#menu-icon');


// Event Listner For MenuBar //
menuBar.addEventListener('click', ()=>{
  menuList.style.display = "block"
})

document.addEventListener("click", (event) => {
  if (!menuBar.contains(event.target) && !filter.contains(event.target)) {
    menuList.style.display = "none"
    filterMsg.style.display = "none"
  }
});

// Add Arrow to Search-box //

inputBox.addEventListener("click", () => {
  searchIcon.innerHTML = `<i class="bi bi-arrow-left"></i>`
  searchIcon.style.color = "#009688"

});


// Click on Arrow //

document.addEventListener('click',(e)=>{
  if(e.target.classList.contains("bi")){
    searchIcon.innerHTML = `<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
    class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">
    <path fill="gray"
      d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z">
    </path>
  </svg>`
  
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = "flex";
  }
  inputBox.value = ""
  }
})

// Redirect page on login when click on logout //

let logout ="";
menuList.addEventListener("click", (e)=>{
logout = e.target.innerText;

if(logout == "Log out"){
  window.location.href = "./loginpage.html";
}
})

// Filter Function //


filter.addEventListener("click", () => {
  filterMsg.innerHTML = `<div>
                         <p id="filter-msg_para">FILTERED BY UNREAD</p>
                         </div>`
  
  if(contactList.style.display === "none"){
    contactList.style.display = "block";
    filterMsg.innerHTML = ""
    filter.style.color = ""
    filter.style.background = ""
  }else{
    contactList.style.display = "none";
  filter.style.color = "white"
  filter.style.background = "#00a884"
  }
})

// User Status Page //

profilePic.addEventListener("click", () => {
  profileContainer.style.display = "block"
})
profIcon.addEventListener("click", () => {
  profileContainer.style.display = "none"
})

// Status Page Redirect //

statusIcon.addEventListener('click', () => {
  window.location.href = "statuspage.html";
});

// Contact-List Person Chat-Box //

selectPerson.addEventListener("click", (e) => {
  var path = e.path || (e.composedPath && e.composedPath());

  path.forEach((ele, i) => {
    if (ele.classList && ele.classList.contains('person')) {
      rightMost.style.display = "none";
      chatPerson.style.display = "block";
      chatpersonImg.src = path[i].querySelector('img').src;
      chatPersonName.innerText = path[i].querySelector('#contact-name').innerText;
      return
    }
  })
})


// Search By Name //

const li = document.getElementsByClassName('person');

function myFunc(event) {

  const filters = inputBox.value.toUpperCase();
  if (event.key === "Enter") {
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByClassName('contact-name');
      let txtValue = a[0].textContent || a[0].innerText;
      if ((txtValue.toUpperCase()).indexOf(filters) > -1) {
        li[i].style.display = "flex";
      }
      else {
        li[i].style.display = 'none';
      }
    }
  }
}
inputBox.addEventListener("keypress", myFunc);

/* API Integration */

let ans = fetch('https://api.github.com/users')

ans.then((res)=>{
    return res.json()
}).then((result)=>{
    document.getElementById('contact-list').innerHTML = result.map((ele)=>{
        return `<li class="person" id="person">
        <div class="person-img-details">
          <img src="${ele.avatar_url}" alt="contact1"
            width="55px" height="55px" style="border-radius:50%;">
        </div>
        <div class="person-name">
          <div class="person-name-details">
            <div class="contact-name" id="contact-name">${ele.login}</div>
            <div class="message-time" id="last-message-time">10:50 am</div>
          </div>
          <div class="person-msg">
            Hello ! what's up everyone
          </div>
        </div>
      </li>`
        
    }).join("")
});