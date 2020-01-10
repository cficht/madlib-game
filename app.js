const button = document.getElementById('button');
const adj1 = document.getElementById('adjective-1');
const adj2 = document.getElementById('adjective-2');
const nou1 = document.getElementById('noun-1');
const nou2 = document.getElementById('noun-2');
const verb1 = document.getElementById('verb-1');
const nou3 = document.getElementById('noun-3');
const verb2 = document.getElementById('verb-2');
const adj3 = document.getElementById('adjective-3');
const storyText = document.getElementById('storytext');

storyText.style.visibility = "hidden";

function startMadlib() {
    const adjective1Input = document.getElementById('adjective-1-input').value;
    const adjective2Input = document.getElementById('adjective-2-input').value;
    const noun1Input = document.getElementById('noun-1-input').value;
    const noun2Input = document.getElementById('noun-2-input').value;
    const verb1Input = document.getElementById('verb-1-input').value;
    const noun3Input = document.getElementById('noun-3-input').value;
    const verb2Input = document.getElementById('verb-2-input').value;
    const adjective3Input = document.getElementById('adjective-3-input').value;

    adj1.textContent = adjective1Input;
    adj2.textContent = adjective2Input;
    nou1.textContent = noun1Input;
    nou2.textContent = noun2Input;
    verb1.textContent = verb1Input;
    nou3.textContent = noun3Input;
    verb2.textContent = verb2Input;
    adj3.textContent = adjective3Input;

    storyText.style.visibility = "visible";
}

button.addEventListener('click', startMadlib);

