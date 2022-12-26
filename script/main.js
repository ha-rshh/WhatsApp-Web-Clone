const inputBox = document.querySelector(".input-box");
const searchIcon = document.querySelector(".search-icon");
const grpMenu = document.querySelector(".grp-menu")
const menuList = document.getElementById("menu-list");
const filter = document.querySelector(".filter");
const filterMsg = document.querySelector(".filter-msg");
const msgDrop = document.getElementById("msg-drop");
const contactList = document.querySelector(".contact-list");
const profilePic = document.querySelector(".profile-img");
const profileContainer = document.getElementById("profile-container");
const profIcon = document.querySelector(".prof-icon");
const statusIcon = document.querySelector('.status');
const selectPerson = document.querySelector('.contact-list')
const rightMost = document.querySelector(".right-most-container");
const chatPerson = document.querySelector(".right-chatbox") 
const chatpersonImg = document.querySelector("person-img-details")
const chatPersonName = document.querySelector("person-name")



inputBox.addEventListener("click", ()=>{
    searchIcon.innerHTML =`<i class="bi bi-arrow-left"></i>`
    searchIcon.style.color = "#009688"
    
    
});

grpMenu.addEventListener("click",()=>{
    menuList.innerHTML =`<ul>
    <li>New group</li>
    <li>New community</li>
    <li>Starred messages</li>
    <li>Settings</li>
    <li>Log out</li>
  </ul>`
  menuList.classList.toggle('hide')
})

let logout ="";
menuList.addEventListener("click", (e)=>{
logout = e.path[0].innerHTML;

if(logout == "Log out"){
// logout = e.path[2].firstChild.lastElementChild
// if(logout.innerText == "Log out")
  window.location.href = "./loginpage.html";
}
// console.log(logout)
})



filter.addEventListener("click", ()=>{
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
  
   function chatboxHeader () {
    
   }
   
})

profilePic.addEventListener("click", ()=>{
  profileContainer.style.display = "block"
})
profIcon.addEventListener("click", ()=>{
  profileContainer.style.display = "none"
})

document.addEventListener("click", (event)=>{
  
  if(!grpMenu.contains(event.target) && !filter.contains(event.target)){
    menuList.classList = "hide"
    filterMsg.classList = "hide"
    
  } 
  
})
  
statusIcon.addEventListener('click',()=>{
  window.location.href = "statuspage.html";
});


selectPerson.addEventListener("click",(e)=> {
  rightMost.style.display = "none";
  chatPerson.style.display = "block";
  /*chatPerson.children[0].children[0].children[0].innerHTML = e.path[3].children[0].children[0].innerHTML;*/
  chatPerson.children[0].children[0].childNodes[3].innerText = e.path[1].children[0].innerText;
  
})

