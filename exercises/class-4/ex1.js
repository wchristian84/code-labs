let button = document.querySelector('.randomizer');
console.log(button);
function getRandomColors() {
    let randomBackgroundColor = Math.floor(Math.random()*16777215).toString(16);
    let randomTextColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#" + randomBackgroundColor;
    document.body.style.color = "#" + randomTextColor;
}

button.addEventListener('click', getRandomColors);