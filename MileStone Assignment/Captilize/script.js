let form = document.getElementById("form");
let submit = document.getElementById("btn");
let userName = document.getElementById("name");

submit.addEventListener("click", capitalizeName);

function capitalizeName() {
  const name = userName.value;
  const modifiedName = name[0].toUpperCase() + name.slice(1);
  const capitalizedName = name[0].toLowerCase() === name[0] ? modifiedName : name;
  console.log("Modified name:", capitalizedName);
}

