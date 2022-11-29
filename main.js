let ntfCounter = document.getElementById("notification__counter");
let markAll = document.getElementById("notification__markAsRead");

let unread = document.querySelectorAll("div.notification__card-unread");
let readRedDot = document.querySelectorAll()

for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", () => changeStatus(unread[i]));
}

markAll.addEventListener("click", () => changeStatusAll(unread));

function changeStatus(prmt) {
  if (prmt.className == "notification__card-unread") {
    prmt.className = "notification__card-read";
    //  countNtf();
  } else {
    prmt.className = "notification__card-unread";
    //   countNtf();
  }
}

function changeStatusAll(prmt) {
  for (let i = 0; i < unread.length; i++) {
    prmt[i].className = "notification__card-read";
  }
}
