var button = document.querySelector('.randomizer');
console.log(button);
function getRandomColors() {
    var randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    var randomTextColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomBackgroundColor;
    document.body.style.color = "#" + randomTextColor;
}
button.addEventListener('click', getRandomColors);
