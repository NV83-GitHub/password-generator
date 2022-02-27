const cryptoArray = new Uint8Array(16)   // The argument could be a variable to let the user choose the number of character in the password, here i will set it at 16 by default
const crypto = window.crypto
const passwordsArray = [1, 2, 3, 4]

// When user click generate password button this function is called
function generatePassword() {

    for (i = 0; i < passwordsArray.length; i++) {
        // Use window.crypto object to populate an array with random number between 0 and 255 (since i use a Uint8Array).
        crypto.getRandomValues(cryptoArray)
        // Convert range from 0 - 255 to 1 - 93(numbers of usable Ascii)then to actual range 33 - 126
        const asciiSelector = cryptoArray.map(x => Math.floor(x / 2.752) + 32)
        // Convert numbers to Ascii using the spread operator ... to pass an array as argument
        const asciiCharArray = String.fromCharCode(...asciiSelector)
        // Display Result in pwd-btn elements (they are numbered from 1 to 4 in the html so i loop trough an array to complete the getElementById)
        document.getElementById("pwd-btn-" + passwordsArray[i]).textContent = asciiCharArray
    }
}

// When user click on a pwd, it is copied to clipboard
function copyToClipBoard(id) {
    let copyText = document.getElementById(id).textContent
    navigator.clipboard.writeText(copyText)
    alert("copied text: " + copyText)
}

