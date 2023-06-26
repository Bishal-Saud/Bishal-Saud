function numberChecker (numbers){
    return function (number){
        return numbers.includes(number)
    };
}

let arr = [2,4,2,3,5,1,4,2];
const checkNum = numberChecker(arr);
console.log(checkNum(2));
console.log(checkNum(20));