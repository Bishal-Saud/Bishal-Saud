const listItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];

// Counter
let counter = 0;

// Function to add
function addListItem(){
    const list = document.getElementById("list");

    if(counter < listItems.length){
        const listItems = document.createElement("li");
        listItems.textContent = listItems[counter];
        list.appendChild(listItems);
        counter++;
    } else {
        alert("All items have been added");
    }
    
}