const time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus");

// AM or PM option
const showAmPm = true;

//set Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const ampm = hour >= 12 ? "PM" : "AM";

  // hour Format - 12 hour
  hour = hour % 12 || 12;

  // output Time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? ampm : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zero to the time
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Background and Greeting
function setBackground() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('morning.jpg')";
    greeting.textContent = "Good Morning,";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('afternoon.jpg')";
    greeting.textContent = "Good Afternoon,";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('night.jpg')";
    greeting.textContent = "Good Evening,";
    document.body.style.color = "white";
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Get Name

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Enter name";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "Enter focus";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // when the enter key is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // when the enter key is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

showTime();
setBackground();
getName();
getFocus();
