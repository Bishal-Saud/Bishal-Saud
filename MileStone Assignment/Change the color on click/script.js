let btn = document.getElementById("btn");

function changeColor(){
    let val = "0123456789ABCDEF";
    let cons = "#"
    for(let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
console.log(cons)
    }
    return cons ;

    
}
    btn.addEventListener("click",randomColorchange);

    function randomColorchange(){
        document.body.style.backgroundColor = changeColor();
    }