function handlingError(){
 fetch('https://jsonplaceholder.typicode.com/posts/123456789').then((response) => {   
if(!response.ok){
    throw new Error("Error occur May be network response was not ok ")
}
return response.json() ;
})

}