let para = document.getElementById("para");
let  words = para.textContent.split(' ');

for(let i=0; i<words.length; i++){
let word = words[i];

if(word.length > 8){
  let span =  document.createElement('span');
    span.style.backgroundColor ="yellow";
    span.textContent =word;
    para.innerHTML = para.innerHTML.replace(word,span.outerHTML)
}

}