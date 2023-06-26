function convertToNumber (e){
try{
const num = Number(e)
if(isNaN(num)){
    throw new Error("Invalid number")
}
return num
} catch (error){
return "Invalid numbers"
}
}

 console.log(convertToNumber("123"))
 console.log(convertToNumber("abc"))
