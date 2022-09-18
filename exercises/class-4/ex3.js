var buttonElement = document.getElementById('timeButton');
var clockElement = document.querySelector(".time");
var startButton = document.querySelector('.btn');
var clockInterval = 0;
function getLocalTime() {
    // Get local date and time information (based on browser settings)
    var time = new Date();
    var localTime = time.toLocaleString('en-US', { hour12: true });
    console.log(localTime);
    buttonElement.style.display = 'none';
    clockElement.style.display = 'block';
    clockElement.innerHTML = "".concat(localTime);
}
function updateTime() {
    clockInterval = setInterval('getLocalTime()', 1000);
}
startButton.addEventListener('click', updateTime);
