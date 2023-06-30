let arr = [1, 2, 3, 4];
function doubleaArr(arry, callback) {
  let arrN = [];
  for (let i = 0; i < arry.length; i++) {
    let arrnum = callback(arry[i]);
    arrN.push(arrnum);
  }
  return arrN;
}
function d(n) {
  return n * 2;
}
console.log(doubleaArr(arr, d));
