const arr = [1,2,3,4,5,6]

// For getting first ,second and last using destructing method 
function extract(array){ 
const [first, second, ...rest] = array; // ...rest is operator   which is use to get remaining array number
const last = rest.pop(); // It is used to get last element of array
return [first,second,last];  // return array
}


const extractElement = extract(arr); // function store in a variable
console.log(extractElement); // output : 1,2,6