const userNotification = [
  {
    friendImg: "./assets/avatar-mark-webber.webp",
    friendName: "mark webber",
    message: ["reacted to your recent post", "my first tournament today!", ""],
    userprofile: "",
    time: "1m ago",
    isREaded: false,
  },
  {
    friendImg: "./assets/avatar-angela-gray.webp",
    friendName: "angela gray",
    message: ["followed you", "", ""],
    userprofile: "",
    time: "5m ago",
    isREaded: false,
  },
  {
    friendImg: "./assets/avatar-jacob-thompson.webp",
    friendName: "jacob thompson",
    message: ["has joined your group", "", ""],
    userprofile: "",
    time: "1 day ago",
    isREaded: false,
  },
  {
    friendImg: "./assets/avatar-rizky-hasanuddin.webp",
    friendName: "rizky hasanuddin",
    message: [
      "sent you a private message",
      "",
      "hello, thanks for setting up the chess club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
    ],
    userprofile: "",
    time: "5 days ago",
    isREaded: false,
  },
  {
    friendImg: "./assets/avatar-kimberly-smith.webp",
    friendName: "kemberly smith",
    message: ["commented on your picture", "", ""],
    userprofile: "./assets/image-chess.webp",
    time: "1 week ago",
    isREaded: false,
  },
  {
    friendImg: "./assets/avatar-nathan-peterson.webp",
    friendName: "nathan peterson",
    message: [
      "reacted to your recent post",
      "5 end-game strategies to increase your win rate",
      "",
    ],
    userprofile: "",
    time: "2 weeks ago",
    isREaded: false,
  },
  {
    friendImg: "./assets/avatar-anna-kim.webp",
    friendName: "anna kim",
    message: ["left the group", "", ""],
    userprofile: "",
    time: "2 weeks ago",
    isREaded: false,
  },
];
const notificationContainer = document.querySelector('#notifications-container')
const notificationCounter = document.querySelector('#count-tag')
const allClearButton = document.querySelector('#markable-tag')
let count;


// Function to create an HTML element with given tag, id, and class
function createElement(tag, id, className) {
  const element = document.createElement(tag);
  if (id) {
      element.id = id;
  }
  if (className) {
      element.className = className;
  }
  return element;
}

// Function to build the notification structure
function createNotification(noti) {
  const notification = createElement('div', 'notification', `read read:bg-transparent ${!noti.isREaded?'notRead': ''} notRead:bg-[#ecf4fa] rounded-md px-4 py-3 text-xs font-semibold text-gray-800/60 md:text-lg`);
  
  const notiTop = createElement('div', 'noti-top', 'flex items-start justify-between');
  const leftSec = createElement('div', 'left-sec', 'flex');
  const img = createElement('div', 'img', 'mr-2 w-9 shrink-0 rounded-full md:w-12');
  const imgTag = createElement('img');
  imgTag.src = noti.friendImg;
  const text = createElement('div', 'text', '');
  const name = createElement('span', 'name', 'font-bold capitalize text-black');
  name.innerText = noti.friendName;
  const msg = createElement('span', 'msg', '');
  msg.innerText = noti.message[0];
  const userMsg = createElement('span', 'user-msg', 'font-bold capitalize text-blue-950/80');
  userMsg.innerText = noti.message[1];
  const dot = createElement('span', 'dot', `notRead:bg-red-500 ${!noti.isREaded?'notRead': ''} inline-block h-1.5 w-1.5 rounded-full`);
  const notiTime = createElement('p', 'noti-time', '');
  notiTime.innerText = noti.time
  
  const rightSec = createElement('div', 'right-sec', 'ml-1 w-8 shrink-0 md:w-12');
  const rightImg = createElement('img');
  rightImg.src = noti.userprofile;
  const notiBottom = createElement('div', 'noti-bottom', `${noti.message[2]?'hasMessage': ''} hasMessage:border-2 ml-auto max-w-[80%] rounded p-2`);

  notiBottom.innerText = noti.message[2];
  
  // Assemble the structure
  text.appendChild(name);
  text.appendChild(document.createTextNode(' ')); // For spacing
  text.appendChild(msg);
  text.appendChild(document.createTextNode(' ')); // For spacing
  text.appendChild(userMsg);
  text.appendChild(document.createTextNode(' ')); // For spacing
  text.appendChild(dot);
  text.appendChild(notiTime);

  img.appendChild(imgTag)

  leftSec.appendChild(img);
  leftSec.appendChild(text);
  
  rightSec.appendChild(rightImg);

  notiTop.appendChild(leftSec);
  notiTop.appendChild(rightSec);
  
  notification.appendChild(notiTop);
  notification.appendChild(notiBottom);

  return notification;
}

function randerNotification(params) {
  notificationContainer.innerHTML = ''
  count = 0;

  userNotification.forEach((value, index, array) => {
    if(!userNotification[index].isREaded){
      count++
    }
    const notificatonComponent = createNotification(value)
    notificatonComponent.addEventListener('click', markReaded)
    notificationContainer.appendChild(notificatonComponent)
  })
  notificationCounter.innerText = count;
}


function markReaded(event) {
  userNotification.forEach((value, index, array) => {
    if(value.friendName === event.currentTarget.querySelector('#name').innerText.toLowerCase()){
      value.isREaded = true;
      count--
    }
  })
  randerNotification()
  event.currentTarget.removeEventListener('click', markReaded)
}

function markAllRead(params) {
  params.preventDefault()
  userNotification.forEach((value, index, array) => {
    if(!value.isREaded){
      value.isREaded = true;
    }
  })
  randerNotification()
}

randerNotification()

allClearButton.addEventListener('click', markAllRead)