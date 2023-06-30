async function fetchingData(){
    const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
     let data = await api.json();
     console.log(data);
}
fetchingData()