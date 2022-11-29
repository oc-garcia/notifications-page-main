let ntfCounter = parseInt(document.getElementById("notification__counter").innerHTML);
let markAll = document.getElementById("notification__markAsRead");

let unread = document.querySelectorAll("div.notification__card-unread");
let redDot = document.querySelectorAll("p.red-dot");

for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", () => changeStatus(unread[i], redDot[i]));
}

markAll.addEventListener("click", () => changeStatusAll(unread));

//ntfCounter.addEventListener("load", () => counter(ntfCounter))

function changeStatus(prmt1, prmt2) {
  if (prmt1.className == "notification__card-unread") {
    prmt1.className = "notification__card-read";
    prmt2.className = "red-dot-read";
    ntfCounter -= ntfCounter;
    ntfCounter.innerHTML = ntfCounter;
  } else {
    prmt1.className = "notification__card-unread";
    prmt2.className = "red-dot";
    ntfCounter += ntfCounter;
    ntfCounter.innerHTML = ntfCounter;
  }
}

function changeStatusAll(prmt) {
  for (let i = 0; i < prmt.length; i++) {
    prmt[i].className = "notification__card-read";
    removeRedDotAll(redDot);
  }
}

function removeRedDotAll(prmt) {
  for (let i = 0; i < prmt.length; i++) {
    prmt[i].className = "red-dot-read";
  }
}
