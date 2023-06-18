const person = {
    name: "Bishal Saud",
    age : 19,
    address:{
        street : "BDM-13,MNR,Kanchanpur,Nepal",
        city: "Mahendranagar",
        state : "Sudurpachim"
    },
};


let findingNameandStreet = (person) =>{
const {name, address: {street}} = person; // This is the  destructuring pattern of object 
return {name, street}; 
}

const result = findingNameandStreet(person)
console.log(result);   



//   ********************************************************



// just trying but it worked wow Nested object 🥺❤️
function printPersonInfo({ name,street:{city}}) {
 return{name,city}
 }

const person2 = {
    name: 'Bishal ',
    age: 19,
    street:{ city: 'MNR'},
  };
  
  let res = printPersonInfo(person2); 
  console.log(res);// It worked wow 😊❤️ Nested object 