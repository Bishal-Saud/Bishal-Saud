let color1= document.getElementById("inp1");
let color2 = document.getElementById("inp2")
let submit = document.getElementById("btn");
let para = document.querySelector(".para");

submit.addEventListener("click",colorName);
function colorName() {

  let selectedColor1 = color1.value.toLowerCase();
  let selectedColor2 = color2.value.toLowerCase();


  switch (selectedColor1) {
    case "red":
      switch (selectedColor2) {
        case "blue":
          console.log("purple");
          para.innerText = "Purple";
          para.style.backgroundColor = "purple"
          break;
        case "yellow":
          console.log("Orange");
          para.innerText = "Orange"
          para.style.backgroundColor = "orange"
          break;
        default:
          alert("invalid color Combo");
       
      }
      break;
    case "blue":
      switch (selectedColor2) {
        case "red":
          console.log("Purple");
          para.innerText = "Purple"
          para.style.backgroundColor = "purple"

          break;
        case "yellow":
          console.log("Green");
          para.innerText = "Green"
          para.style.backgroundColor = "green"

          break;
        default:
        alert("Invalid color combination");
       
      }
      break;
    case "yellow":
      switch (selectedColor2) {
        case "red":
          console.log("Orange");
          para.innerText = "Orange"
          para.style.backgroundColor = "orange"
          break;
        case "blue":
          console.log("Green");
          para.innerText = "Green"
          para.style.backgroundColor = "green"

          break;
        default:
          alert("Invalid color combination");
       
      }
      break;
      default:
        alert("Invalid color combination");
     
  }
}


// colorName("red","yellow");
// colorName("blue","yellow");
// colorName("green","yellow");
