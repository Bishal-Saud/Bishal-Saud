
let val=document.getElementById("inp");

    function AT_add(v){
    val.value+=v;
    }
    
    
    function cls(){
    val.value="";
    }
    
    function exe(){
    val.value=eval(val.value);
    }
    
    
    function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
    }


// const btn = document.querySelectorAll(".btn");
// let box = document.getElementsByClassName("big-box");
// let arrayHtml = Array.from(btn);
// let numberInput = document.querySelectorAll(".blank-box");
// let btnZero = document.getElementById("zero");

// const num1Input = document.getElementById("num1");
// const num2Input = document.getElementById("num2");
// const addButton = document.getElementById("add");
// const subtractButton = document.getElementById("sub");
// const multiplyButton = document.getElementById("multiple");
// const divideButton = document.getElementById("divide");
// const resultElement = document.getElementById("result");


// let done= document.getElementById("equaltoo");
// done.addEventListener("click",add) 
// arrayHtml.addEventListener("click", operator);
/*
function operator() {
  arrayHtml.forEach((buttons) => {
    // console.log(buttons.textContent);

    buttons.addEventListener("click", () => {
      const buttonNum = buttons.textContent;
      console.log(buttonNum);
      numberInput.value = buttonNum;
    });
//     //function for operator
// document.addEventListener('click',()=>{
//   done.addEventListener('click',()=>{
  

    
    
//     console.log(num1)
//   })
// })
 
   
  });
}

operator();*/
/*
addButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultElement.textContent = `Result: ${result}`;
});

subtractButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 - num2;
  resultElement.textContent = `Result: ${result}`;
});

multiplyButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 * num2;
  resultElement.textContent = `Result: ${result}`;
});

divideButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 / num2;
  resultElement.textContent = `Result: ${result}`;
});*/