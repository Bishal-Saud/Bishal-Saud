let person = {Fnames: "Bishal",Lnames: "saud",age:19}
function ageinDays(obj,callback){ 

    let fullName =`${obj.Fnames}.${obj.Lnames[0].toUpperCase()}`;
    let indays = obj.age * 365;
   callback(fullName,indays)


}
function logresult(fullName,indays){;
    console.log( `The person fullname is: ${fullName},and their age in days is ${indays}`);

}


ageinDays(person,logresult);