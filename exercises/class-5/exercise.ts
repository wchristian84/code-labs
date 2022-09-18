// Global Variables \\
let formSubmit = document.querySelector("#form-submit");
let textInput = document.querySelector("#to-save") as HTMLInputElement;
let savedInputs: string[] = JSON.parse(localStorage.getItem('input')) || [];
let displayInputs = document.querySelector('#saved-text') as HTMLElement;
let form = document.querySelector(".input-form") as HTMLFormElement;

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

function populateSavedInput(inputs: string[]) {
    displayInputs.innerHTML = inputs.map((input) => `<li>${input}</li>`)
    .join('');

}

function saveInput(input: string[]) {
    localStorage.setItem('input', JSON.stringify(input));
}

// Event listeners \\
formSubmit.addEventListener('click', getFormInput);

// On load run: \\
populateSavedInput(savedInputs);