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
let chatPersonName = document.querySelector(".person-name")
const menuBar = document.querySelector('#menu-icon');
let chatPersonImg = document.querySelector('.person-img-details img')

menuBar.addEventListener('click', () => {
  menuList.style.display = "block"
})

document.addEventListener("click", (event) => {
  if (!menuList.contains(event.target)) {
    menuList.classList = "hide"
    // filterMsg.classList = "hide"/
  }
})



inputBox.addEventListener("click", () => {
  searchIcon.innerHTML = `<i class="bi bi-arrow-left"></i>`
  searchIcon.style.color = "#009688"
});



let logout = "";
menuList.addEventListener("click", (e) => {
  logout = e.path[0].innerHTML;

  if (logout == "Log out") {
    // logout = e.path[2].firstChild.lastElementChild
    // if(logout.innerText == "Log out")
    window.location.href = "./loginpage.html";
  }
  // console.log(logout)
})



filter.addEventListener("click", () => {
  filterMsg.innerHTML = `<div>
                          <p id="filter-msg_para">FILTERED BY UNREAD</p>
                          </div>

 <div class="flex"> 
   <div class="filter1">
     <img class="filter-img" src="./images/person1.png" alt="">
   </div>
   <div class="grp-details" >
     <h3>Aircampus</h3>
     <p>Prashant : hi!</p>
   </div>
   <div class="person-lastTime ">
     <p>yesterday</p>
     
     <div class="flex">
       <p class="msg-count">1 </p>
       <p id="msg-drp"><i class="bi bi-chevron-down"></i></p>
     </div>
   </div>
 </div>
`
  filter.style.background = "#00a884"
  filter.style.color = "white"
  //  filter.style.borderRadius = "50%"
  filterMsg.classList.toggle("hide");
  contactList.style.display = "none"

  function chatboxHeader() {

  }

})

profilePic.addEventListener("click", () => {
  profileContainer.style.visibility = "visible"
})
profIcon.addEventListener("click", () => {
  profileContainer.style.visibility = "hidden"
})


document.addEventListener("click", (event) => {
  console.log(menuList)
  if (!menuBar.contains(event.target) && !filter.contains(event.target)) {
    menuList.style.display = "none"
    filterMsg.style.display = "none"

  }

})


statusIcon.addEventListener('click', () => {
  window.location.href = "statuspage.html";
});


selectPerson.addEventListener("click", (e) => {
  var path = e.path || (e.composedPath && e.composedPath());

  console.log(e)
  path.forEach((ele, i) => {
    if (ele.classList && ele.classList.contains('person')) {
      rightMost.style.display = "none";
      chatPerson.style.display = "block";
      chatPersonImg.src = path[i].querySelector('img').src;
      
      chatPersonName.innerText = path[i].querySelector('#contact-name').innerText;
      // console.log(e.path[i].querySelector('#contact-name'), 'name');
      return
    }
  })
})



const li = document.querySelectorAll('.person');

function myFunc(event) {

  const filters = inputBox.value.toUpperCase();
  if (event.key === "Enter") {
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByClassName('contact-name');
      let txtValue = a[0].textContent || a[0].innerText;
      console.log(a)
      console.log(txtValue)
      if ((txtValue.toUpperCase()).indexOf(filters) > -1) {
        li[i].style.display = "";
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

ans.then((res) => {
  return res.json()
}).then((result) => {
  console.log(result)
  document.getElementById('contact-list').innerHTML = result.map((ele) => {
    // console.log(ele)
    return `<li class="person" id="person">
        <div class="person-img-details">
          <img src="${ele.avatar_url}" alt="contact1"
            width="55px" height="55px" style="border-radius:50%;">
        </div>
        <div class="person-name">
          <div class="person-name-details">
            <div class="contact-name" id="contact-name">${ele.login} 😎</div>
            <div class="message-time" id="last-message-time">10:50 am</div>
          </div>
          <div class="person-msg">
            gonna buy pakistan tomorrow🤣😂
          </div>
        </div>
      </li>`

  }).join("")
})