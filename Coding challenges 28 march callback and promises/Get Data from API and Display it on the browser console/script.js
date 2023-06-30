function fatchingAPI(){

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((err) => console.error(err))
}
fatchingAPI();