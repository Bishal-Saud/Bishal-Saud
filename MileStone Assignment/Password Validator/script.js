let password = document.getElementById("ps");
let btn = document.getElementById("btn");

function passwordChange(password,conformP){
   let okDone =  prompt("enter Password");
    if(password.value === okDone.value) {
       console.log("Password is correct"); 
    }
    else{
        console.log("You entered wrong password")
    }
}

btn.addEventListener("click",passwordChange);