let ntfCounter = document.getElementById("notification__counter");
let markAll = document.getElementById("notifiction__markAsRead");

let unread = document.querySelectorAll("div.notification__card-unread");

for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", () => changeStatus(unread[i]));
}

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
  prmt.className = "notification__card-read";
}

function countNtf() {}
