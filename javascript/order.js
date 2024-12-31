var total = 0;
  
  function colors(color1, color2, color3) {
    tickets.style.backgroundColor = color1;
    dinings.style.backgroundColor = color2;
    hotels.style.backgroundColor = color3;
  }
  
  function initialDisplay() {
    showTickets();
  }
  
  initialDisplay();

function showTickets() {
  var tickets = document.getElementById("tickets");
  var dinings = document.getElementById("dinings");
  var hotels = document.getElementById("hotels");
  var menu_ticket = document.getElementById("menu_ticket");
  var menu_dinings = document.getElementById("menu_dinings");
  var menu_hotel = document.getElementById("menu_hotel");
  tickets.style.backgroundColor = "white";
  dinings.style.backgroundColor = "gray";
  hotels.style.backgroundColor = "gray";
  menu_ticket.style.display = "block";
  menu_dinings.style.display = "none";
  menu_hotel.style.display = "none";
}

function showDinings() {
  var tickets = document.getElementById("tickets");
  var dinings = document.getElementById("dinings");
  var hotels = document.getElementById("hotels");
  var menu_ticket = document.getElementById("menu_ticket");
  var menu_dinings = document.getElementById("menu_dinings");
  var menu_hotel = document.getElementById("menu_hotel");
  tickets.style.backgroundColor = "gray";
  dinings.style.backgroundColor = "white";
  hotels.style.backgroundColor = "gray";
  menu_ticket.style.display = "none";
  menu_dinings.style.display = "block";
  menu_hotel.style.display = "none";
}

function showHotels() {
  var tickets = document.getElementById("tickets");
  var dinings = document.getElementById("dinings");
  var hotels = document.getElementById("hotels");
  var menu_ticket = document.getElementById("menu_ticket");
  var menu_dinings = document.getElementById("menu_dinings");
  var menu_hotel = document.getElementById("menu_hotel");
  tickets.style.backgroundColor = "gray";
  dinings.style.backgroundColor = "gray";
  hotels.style.backgroundColor = "white";
  menu_ticket.style.display = "none";
  menu_dinings.style.display = "none";
  menu_hotel.style.display = "block";
}

function recal() {
  var tbody = document.querySelector("tbody");
  var rows = tbody.querySelectorAll("tr");
  var sum = 0;
  var total = 0;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.querySelectorAll("td");
    if (cells.length >= 2) {
      var qty = parseInt(cells[1].textContent);
      var subtotal = parseInt(cells[3].textContent);
      if (!isNaN(qty) && !isNaN(subtotal)) {
        sum += qty;
        total += subtotal;
      }
    }
  }
  var tfoot = document.querySelector("tfoot");
  var trow = document.createElement("tr");
  var tcell1 = document.createElement("td");
  tcell1.textContent = sum;
  trow.appendChild(tcell1);
  var tcell2 = document.createElement("td");
  tcell2.textContent = total;
  trow.appendChild(tcell2);
  tfoot.appendChild(trow);
}

function addRow(buttonId) {
  var qty = document.getElementById(buttonId + "-qty");
  var img = document.getElementById(buttonId + "-img");
  var desc = img.alt;
  var price = parseInt(qty.getAttribute("data-price"));
  var subtotal = qty.value * price;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  var td4 = document.createElement("td");
  var img2 = document.createElement("img");
  img2.setAttribute("src", img.src);
  img2.setAttribute("alt", img.alt);
  td1.appendChild(img2);
  td1.appendChild(document.createTextNode(desc));
  td2.appendChild(document.createTextNode(qty.value));
  td3.textContent = price;
  td4.textContent = subtotal;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  var tbody = document.querySelector("tbody");
  tbody.appendChild(tr);
  total += parseInt(qty.value);
  recal();
}

function undo() {
  var tbody = document.querySelector("tbody");
  var last = tbody.lastElementChild; 
  if (last) {
    var qty = last.children[1]; 
    total -= parseInt(qty.textContent); 
    tbody.removeChild(last);
    recal();
  }
}

function recal() {
  var totalqty = document.querySelector("#totalqty");
  totalqty.textContent = total; 
}

var undoLink = document.querySelector("a");
undoLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  undo(); 
});