let ntfCounter = document.getElementById("notification__counter");
let markAll = document.getElementById("notification__markAsRead");

let unread = document.querySelectorAll("div.notification__card-unread");
let redDot = document.querySelectorAll("div.red-dot");

let x = parseInt(unread.length);

for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", () => changeStatus(unread[i], redDot[i]));
}

markAll.addEventListener("click", () => changeStatusAll(unread));

//ntfCounter.addEventListener("click", counter);

function changeStatus(prmt1, prmt2) {
  if (prmt1.className == "notification__card-unread") {
    prmt1.className = "notification__card-read";
    prmt2.className = "red-dot-read";
    x -= 1;
    ntfCounter.innerHTML = `<p>${x}</p>`;
  } else {
    prmt1.className = "notification__card-unread";
    prmt2.className = "red-dot";
    x += 1;
    ntfCounter.innerHTML = `<p>${x}</p>`;
  }
}

function changeStatusAll(prmt) {
  for (let i = 0; i < prmt.length; i++) {
    prmt[i].className = "notification__card-read";
    removeRedDotAll(redDot);
    x = 0;
    ntfCounter.innerHTML = `<p>${x}</p>`;
  }
}

function removeRedDotAll(prmt) {
  for (let i = 0; i < prmt.length; i++) {
    prmt[i].className = "red-dot-read";
  }
}
