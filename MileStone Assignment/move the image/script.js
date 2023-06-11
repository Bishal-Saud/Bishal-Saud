let img = document.getElementById("image")

let positionX =0;
let positionY =0;
let speed = 10;

function updateImgPosition(){

    img.style.left = positionX + 'px';
    img.style.top = positionY + 'px';

}

function handleKeydown(event){
    let key = event.keyCode;
    switch(key){
        case 37: //left key
        positionX -=speed;
        break;
        case 38: // up
        positionY -= speed;
        break;
        case 39: //Right
        positionX += speed;
        break;
        case 40: //Down
        positionY += speed;
        break;
    }
    updateImgPosition();
}

document.addEventListener('keydown',handleKeydown);