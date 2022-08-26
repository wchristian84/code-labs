let buttonElement = document.getElementById('timeButton')
let clockElement = document.querySelector(".time")
let button = document.querySelector('.btn')
let clockInterval = 0;


function getLocalTime(){
    // Get local date and time information (based on browser settings)
    let time = new Date();
    let localTime = time.toLocaleString('en-US', { hour12: true })
    console.log(localTime);

    buttonElement.style.display = 'none';
    clockElement.style.display = 'block';
    clockElement.innerHTML = `${localTime}`;
    
}

function updateTime () {
    clockInterval = setInterval('getLocalTime()', 1000)
}

button.addEventListener('click', updateTime);