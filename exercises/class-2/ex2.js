let foods = [{name: "pizza", price: "$3"}, {name: "cheeseburger", price: "$4"}, {name: "hot dog", price: "$1.50"}];

for (let i = 0; i < foods.length; i++) {
    let newItem = document.createElement("li");
    newItem.innerText = `${foods[i].name}`;
    console.log(newItem);
    document.getElementById("list").append(newItem);
}