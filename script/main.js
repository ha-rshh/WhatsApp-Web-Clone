const inputBox = document.querySelector(".input-box");
const searchIcon = document.querySelector(".search-icon");
const grpMenu = document.querySelector(".grp-menu");
const menuList = document.getElementById("menu-list");
const filter = document.querySelector(".filter");
const filterMsg = document.querySelector(".filter-msg");
const msgDrop = document.getElementById("msg-drop");
const contactList = document.querySelector("#contact-list");
const profilePic = document.querySelector(".profile-pic");
const profileContainer = document.getElementById("profile-container");
const profIcon = document.querySelector(".prof-icon");
const statusIcon = document.querySelector(".status");
const selectPerson = document.querySelector("#contact-list");
const rightMost = document.querySelector(".right-most-container");
const chatPerson = document.querySelector(".right-chatbox");
const chatpersonImg = document.querySelector(".person-img-details img");
const chatPersonName = document.querySelector(".person-name");
const menuBar = document.querySelector("#menu-icon");
const chatBoxInput = document.querySelector(".chatbox-bottom");
const userProfile = document.querySelector(".profile-img");
const linkIcon = document.querySelector(".linkIcon");
const linkedHere = document.querySelector(".linkHere");
const moreOption = document.querySelector(".more-option");
const popUpBtn = document.querySelector(".pop-up-btn");
const searchForChat = document.querySelector(".chat-search")
const searchBtn = document.querySelector(".search-box1");
const bi = document.querySelector(".bii");


// x clearing userData after logout

if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "./loginpage.html";
}
const users = JSON.parse(localStorage.getItem("loggedInUser"))  || {};

//x      Event Listner For MenuBar

menuBar.addEventListener("click", () => {
  menuList.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (!menuBar.contains(event.target) && !filter.contains(event.target)) {
    menuList.style.display = "none";
    filterMsg.style.display = "none";
  }
});

//x Add Arrow to Search-box

inputBox.addEventListener("click", () => {
  searchIcon.innerHTML = `<i class="bi bi-arrow-left"></i>`;
  searchIcon.style.color = "#009688 ";
});

//x Click on Arrow to go back

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi")) {
    searchIcon.innerHTML = `<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
    class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">
    <path fill="gray"
      d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z">
    </path>
  </svg>`;

    for (let i = 0; i < li.length; i++) {
      li[i].style.display = "flex";
    }
    inputBox.value = "";
  }
});

//x Redirect page on login when click on logout

let logout = "";
menuList.addEventListener("click", (e) => {
  logout = e.target.innerText;

  if (logout == "Log out") {
    localStorage.removeItem("loggedInUser");
    window.location.href = "./loginpage.html";
  }
});

//x Filter Function

filter.addEventListener("click", () => {
  filterMsg.innerHTML = `<div>
                         <p id="filter-msg_para">FILTERED BY UNREAD</p>
                         </div>`;

  if (contactList.style.display === "none") {
    contactList.style.display = "block";
    filterMsg.innerHTML = "";
    filter.style.color = "";
    filter.style.background = "";
  } else {
    contactList.style.display = "none";
    filter.style.color = "white";
    filter.style.background = "#F0F2F5";
  }
});

//x User About Page section
profilePic.addEventListener("click", () => {
  profileContainer.style.visibility = "visible";
});
profIcon.addEventListener("click", () => {
  profileContainer.style.visibility = "hidden";
});

//x profile name edit js
const pencil = document.querySelector(".NameChange");
const profileUserName = document.querySelector(".profile-user_name");
const userNameInput = document.querySelector(".username-input");
const userName = document.getElementById("user-name");
const profileNameInput = document.querySelector(".profile-user-input");
const checkBtn = document.querySelector(".name-checkBtn");


pencil.addEventListener("click", () => {
  profileUserName.style.display = "none";
  userNameInput.value = userName.innerText;
  profileNameInput.style.display = "flex";
});
checkBtn.addEventListener("click", () => {
  profileUserName.style.display = "flex";
  userName.innerText = userNameInput.value;
  profileNameInput.style.display = "none";
});
//x  about edit js
const aboutPencil = document.querySelector(".about-pencil");
const aboutInfo = document.querySelector(".about-info");
const aboutInput = document.querySelector(".about-input");
const aboutInfoText = document.getElementById("about-info_text");
const aboutNameInput = document.querySelector(".a-input");
const aboutCheckBtn = document.querySelector(".about-checkBtn");

aboutPencil.addEventListener("click", () => {
  aboutInfo.style.display = "none";
  aboutInput.style.display = "flex";
  aboutNameInput.value = aboutInfoText.innerText;
});
aboutCheckBtn.addEventListener("click", () => {
  aboutInfo.style.display = "flex";
  aboutInput.style.display = "none";
  aboutInfoText.innerText = aboutNameInput.value;
});

//x Status Page Redirect //

statusIcon.addEventListener("click", () => {
  window.location.href = "statuspage.html";
});

//x  Contact-List Person Chat-Box //

let currentActiveUser = "";
selectPerson.addEventListener("click", (e) => {
  var path = e.path || (e.composedPath && e.composedPath());
  path.forEach((ele, i) => {
    if (ele.classList && ele.classList.contains("person")) {
      rightMost.style.display = "none";
      chatPerson.style.display = "block";
      chatBoxInput.style.display = "flex";
      // chatBoxInput.style.width = "100%";
      chatpersonImg.src = path[i].querySelector("img").src;
      chatPersonName.innerText =
        path[i].querySelector("#contact-name").innerText;
      console.log(path[i].querySelector(".person-name-details").id);
      currentActiveUser = path[i].querySelector(".person-name-details").id;
      console.log(currentActiveUser);
      handleSingleUser(currentActiveUser, "first");
      return;
    }
  });
});

//x  Search By Name

const li = document.getElementsByClassName("person");
function myFunc(event) {
  const filters = inputBox.value.toUpperCase();
  if (event.key === "Enter") {
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByClassName("contact-name");
      let txtValue = a[0].textContent || a[0].innerText;
      if (txtValue.toUpperCase().indexOf(filters) > -1) {
        li[i].style.display = "flex";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}
inputBox.addEventListener("keypress", myFunc);

/* API Integration */
let ans = fetch("https://whatsapp-api-login.onrender.com/users");
ans.then((res) => {
    return res.json();
  })
  .then((result) => {
    let contacts = result.usersList.filter(
      (elem) => elem.email != users.user.email
    );
    const time = new Date(users.user.date);
    document.getElementById('user-name').innerText = users.user.email;
    document.getElementById(
      "contact-list"
    ).innerHTML = `<li class="person" id="person">
                  <div class="person-img-details">
                    <img src="${users.user.avatar}" class="avatar' alt="contact" width="55px" height="55px" style="border-radius:50%; object-fit: cover">
                  </div>
                  <div class="person-name">
                    <div class="person-name-details" id="${users.user.mobile}">
                      <div class="contact-name" id="contact-name">${users.user.email} (You)</div>
                      <div class="message-time" id="last-message-time">${time.getHours()}:${time.getMinutes()<10 ? "0" + time.getMinutes():time.getMinutes()}</div>
                    </div>
                  </div>
                </li>`;

    document.getElementById("contact-list").innerHTML += contacts
      .map((ele) => {
        const dates = new Date(ele.date);
        return `<li class="person" id="person">
              <div class="person-img-details">
               <img src="${ele.avatar}" alt="contact1" width="55px" height="55px" style="border-radius:50%; object-fit: cover"">
              </div>
            <div class="person-name">
            <div class="person-name-details" id="${ele.mobile}">
            <div class="contact-name" id="contact-name" object-fit: cover">${ele.email === users.user.email ? `${ele.email} (You)` : ele.email}</div>
            <div class="message-time" id="last-message-time">${dates.getHours()}:${dates.getMinutes()}</div>
          </div>
          <div class="person-msg"></div>
        </div>
      </li>`;
      })
      .join("");
      document.querySelector(".current-user").innerHTML = `<img class="profile-picture_img" src="${users.user.avatar}" alt="profile picture">`
      document.querySelector(".profile-pic").innerHTML = `<img class="profile-picture_img" src="${users.user.avatar}" alt="profile picture">`
  });

  
const chatContainer = document.querySelector(".append-chat");
function handleSingleUser(user, typee) {
  // Api call.
  // Chat recieve hogi.
  if (typee === "first") {
    chatContainer.innerHTML = "";
  }
  //! console.log(users);
  //! console.log(user);
  let options = {
    body: JSON.stringify({
      to: user,
      from: users.user.mobile,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };

  fetch("https://whatsapp-api-login.onrender.com/messages", options)
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      // console.log(data.message);
      chatContainer.innerHTML = "";
      let chat = JSON.parse(data[0].message);
      //! console.log(users);
       console.log(chat);
      chat.map((ele, index) => {
        console.log(ele);
        let date = new Date(ele.date);
          chatContainer.innerHTML += `<div class="${users.user.mobile === ele.from ? "send-chat" : "recieve-chat"}">${ele.message}
          <div class="chat-time"> ${date.getHours()}:${date.getMinutes()}</div>` 
      });
      // chat.scrollBy(0, 1000);

    })
    .catch((error) => {
      console.log(error);
    });
}




//x   Message send and recieve
const sendBtn = document.getElementById("send-btn");
const inputChat = document.getElementById("chatbox-input");

  setInterval(() => {
    handleSingleUser(currentActiveUser);
  
  }, 5000);


//x Submit chat on keypress Enter

function submitChat(){
    if (inputChat.value != "" && inputChat.value != " ") {
      let currentDate = new Date();
      let options = {
        body: JSON.stringify({
          to: currentActiveUser,
          from: users.user.mobile,
          message: {
            message: inputChat.value,
            date: currentDate,
            from: users.user.mobile,
          },
        }),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      };
      fetch("https://whatsapp-api-login.onrender.com/send", options)
        .then((resolve) => {
          return resolve.json();
        })
        .then((data) => {
          //! console.log(data);
          //! chats map karwayenge
          handleSingleUser(currentActiveUser);
          inputChat.value = "";
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
// });

//chat search

searchForChat.addEventListener("click" , function(){
  searchBtn.style.display = "block";
});

//searchBtn in right section

bi.addEventListener("click",()=>{
  searchBtn.style.display = "none";
  searchForChat.style.display ="visible";
})

//attach document here

linkIcon.addEventListener('click' , function(){
  linkedHere.style.display = "block";
})

linkIcon.addEventListener('dblclick' , function(){
  linkedHere.style.display = "none";

})

//pop up show in right corner in chat section
moreOption.addEventListener("click" , function(){
  popUpBtn.style.display = "block";

})

moreOption.addEventListener("dblclick" , function(){
  popUpBtn.style.display = "none";

})


  function scrollToBottom() {
    let chatWindow = document.querySelector(".chat");
    console.log("helloadflajsjfd")
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

  chatBoxInput.addEventListener('keypress',(e)=>{
    if(e.key === "Enter"){
      submitChat()
      scrollToBottom();
    }
  })
  sendBtn.addEventListener("click", submitChat);


  // document.getElementById("chatbox-input").style.width="100%";