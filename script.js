// When i click the generate password button => function generatePassword() is called
// 
let array = new Uint32Array(10)
let crypto = window.crypto

function generatePassword() {
    crypto.getRandomValues(array)
    alert(array)
}