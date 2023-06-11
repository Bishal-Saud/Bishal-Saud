document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email");
let pass = document.getElementById("pass");
let inp = document.querySelectorAll(".inp");
let paraElement = document.getElementById("para");

if (email.textContent != "@" || pass.length < 8) {
 paraElement.innerHTML = "Invalid email or password!";
 paraElement.className = "error-message";
  } else {
 paraElement.innerHTML = "Valid email and password!";
 paraElement.className = "success-message";
  }

});