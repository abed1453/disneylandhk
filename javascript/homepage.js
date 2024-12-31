var message = ["DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798", "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379", "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"];
var i = 0;
function changeMessage() {
  document.getElementById("messagee").innerHTML = message[i];
  i++;
  if (i == message.length) {
    i = 0;
  }
}
setInterval(changeMessage, 3000);

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

