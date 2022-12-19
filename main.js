const inputBox = document.getElementById("input-box");
const searchIcon = document.querySelector(".search-icon");
const grpMenu = document.querySelector(".grp-menu")
const menuList = document.getElementById("menu-list");
const filter = document.getElementById("filter");
const filterMsg = document.getElementById("filter-msg");

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

filter.addEventListener("click", ()=>{
   filterMsg.innerHTML = `<p id="filter-msg_para">FILTERED BY UNREAD</p>`
   filter.style.background = "#00a884"
   filter.style.borderRadius = "50%"
   filterMsg.classList.toggle("hide");
})
 
// document.onclick = function (e){
//   if(e.target.id !== "menu-list" && e.target.id !== "filter-msg"){
//     menuList.classList.remove("menu-list")
//     console.log(e)
//   }
// }


