let oneNum = prompt("Enter First Number")
let twoNum = prompt("Enter second Number ");

function swap(oneNum,twoNum){
   [oneNum, twoNum] = [twoNum,oneNum]
   return [oneNum,twoNum];
}

console.log(swap(oneNum,twoNum)); 