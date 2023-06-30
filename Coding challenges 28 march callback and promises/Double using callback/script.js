function doublearrInt(arr, callback) {
 const doubled = arr.map((num) => {
  return callback(num)
 });
 return doubled;
}
function double(n) {
  return n * 2;
}
let myarr = [1, 2, 3, 4, 5, 8, 10];
let doubleArray = doublearrInt(myarr, double);
console.log(doubleArray);
