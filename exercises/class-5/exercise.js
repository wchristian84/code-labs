// Global Variables \\
let formSubmit = document.querySelector("#form-submit");
let textInput = document.querySelector("#to-save");
let savedInputs = JSON.parse(localStorage.getItem('input')) || [];
let displayInputs = document.querySelector('#saved-text');
let form = document.querySelector(".input-form");

// Function declarations \\
function getFormInput(e) {
    e.preventDefault;
    savedInputs.push(textInput.value);

    const newItem = document.createElement('li');
    newItem.innerText = `${textInput.value}`;
    displayInputs.appendChild(newItem);

    saveInput(savedInputs);
    form.reset();

}

function populateSavedInput(inputs = []) {
    displayInputs.innerHTML = inputs.map((input) => `<li>${input}</li>`)
    .join('');

}

function saveInput(input = []) {
    localStorage.setItem('input', JSON.stringify(input));
}

// Event listeners \\
formSubmit.addEventListener('click', getFormInput);

// On load run: \\
populateSavedInput(savedInputs);