
const messages = [
    { text: "Initializing Hacking", delay: 1 + 6 * Math.random() },
    { text: "Reading your files", delay: 1 + 6 * Math.random() },
    { text: "Password Files Detected", delay: 1 + 6 * Math.random() },
    { text: "Sending all Passwords and personal files to Server", delay: 1 + 6 * Math.random() },
    { text: "Cleaning Up", delay: 1 + 6 * Math.random() }
];

const boxDiv = document.querySelector('.box');

async function displayMessage(msg, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            const newParagraph = document.createElement('p');

            setInterval(() => {
                if(newParagraph.innerHTML.endsWith("...")){
                    newParagraph.innerHTML = newParagraph.innerHTML.slice(0, newParagraph.innerHTML.length - 3)
                }else{
                    newParagraph.innerHTML = newParagraph.innerHTML + ".";
                }
            }, 500)

            newParagraph.textContent = msg;
            boxDiv.appendChild(newParagraph);
            resolve();
        }, delay * 1000);
    });
}

async function hacking() {
    for (const { text, delay } of messages) {
        await displayMessage(text, delay);
    }
}

window.onload = hacking; // Call hacking function when the window loads

