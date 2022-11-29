let ntfCounter = document.getElementById("notification__counter");
let markAll = document.getElementById("notification__markAsRead");

let unread = document.querySelectorAll("div.notification__card-unread");
let redDot = document.querySelectorAll("p.red-dot")

for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", () => changeStatus(unread[i]));
}

markAll.addEventListener("click", () => changeStatusAll(unread));

function changeStatus(prmt) {
  if (prmt.className == "notification__card-unread") {
    prmt.className = "notification__card-read";
  } else {
    prmt.className = "notification__card-unread";
  }
}

function changeStatusAll(prmt) {
  for (let i = 0; i < prmt.length; i++) {
    prmt[i].className = "notification__card-read";
    removeRedDotAll(redDot)
  }
}

function removeRedDotAll(prmt) {
  for (let i = 0; i < prmt.length; i++) {
    prmt[i].className = "red-dot-read"
    
  }
}