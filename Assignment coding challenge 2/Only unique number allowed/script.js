let arr =[1,2,3,4,1,2,4,5,6,7,3,5];

function removeDuplicate(...arr){
let unique = new Set(...arr);
console.log(unique)

}

removeDuplicate(arr);