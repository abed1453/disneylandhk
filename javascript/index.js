var message = ["DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798", "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379", "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"];
var i = Math.floor(Math.random() * message.length);
var firstTime = true;
function changeMessage() {
  document.getElementById("message").innerHTML = message[i];
  if (firstTime) {
    firstTime = false;
  }
  else {
    i = (i + 1) % message.length;
  }
}
setInterval(changeMessage, 3000);

var vid1 = document.getElementById("Video1");
var vid2 = document.getElementById("Video2");

function playVid1() {
  vid1.style.display = "block";
  vid1.play();
  vid2.style.display = "none";
  vid2.pause();
}

function playVid2() {
  vid2.style.display = "block";
  vid2.play();
  vid1.style.display = "none";
  vid1.pause();
}

// Adding event listeners to the videos to call the appropriate function when they end
vid1.addEventListener("ended", playVid2);
vid2.addEventListener("ended", playVid1);

playVid1();

let form = document.getElementById("myform");

let error = document.getElementById("error");

function validateForm() {
  let date = form.elements["Date"].value;
  let time = form.elements["Time"].value;
  let guests = form.elements["No.of Guests"].value;

  if (date == "" || time == "" || guests == "") {
    error.innerHTML = "Data not completed, please re-enter";
    error.style.color = "red";
    error.style.textAlign = "center";

    return false;
  } else {
    error.innerHTML = "";

    const result = reserve(date, time, guests);

    if (result) {
      alert('Reservation done. Thank you.');
      form.reset(); 
      return true;
    } else {
      alert('Disneyland has reached the maximum number of visitors for the day');
      form.reset(); 
      return true;
    }
  }
}

form.onsubmit = validateForm;

