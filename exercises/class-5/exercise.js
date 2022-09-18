// Global Variables \\
var formSubmit = document.querySelector("#form-submit");
var textInput = document.querySelector("#to-save");
var savedInputs = JSON.parse(localStorage.getItem('input')) || [];
var displayInputs = document.querySelector('#saved-text');
var form = document.querySelector(".input-form");
// Function declarations \\
function getFormInput(e) {
    e.preventDefault;
    savedInputs.push(textInput.value);
    var newItem = document.createElement('li');
    newItem.innerText = "".concat(textInput.value);
    displayInputs.appendChild(newItem);
    saveInput(savedInputs);
    form.reset();
}
function populateSavedInput(inputs) {
    if (inputs === void 0) { inputs = []; }
    displayInputs.innerHTML = inputs.map(function (input) { return "<li>".concat(input, "</li>"); })
        .join('');
}
function saveInput(input) {
    if (input === void 0) { input = []; }
    localStorage.setItem('input', JSON.stringify(input));
}
// Event listeners \\
formSubmit.addEventListener('click', getFormInput);
// On load run: \\
populateSavedInput(savedInputs);
