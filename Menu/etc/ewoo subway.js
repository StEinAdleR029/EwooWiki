/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function space_Function() {
  document.getElementById("space_Dropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("space_Dropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function work_Function() {
  document.getElementById("work_Dropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("work_Dropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
      
function showDetail(){
	document.querySelector('#desc').style.display = "block";
}
function hideDetail(){
	document.querySelector('#desc').style.display = "none";
}

function showDetail1(){
	document.querySelector('#desca').style.display = "block";
}
function hideDetail1(){
	document.querySelector('#desca').style.display = "none";
}

