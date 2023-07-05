const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_{}><?"
const allChars = upperCase+lowerCase+number+symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;                 /* wo input hai isliye .value use kiya warna innerHTML use hota */
}

function copyPassword() {
    passwordBox.select();

    try {
        if (document.execCommand('copy')) {
            console.log('Password copied to clipboard.');
        } else {
            console.error('Copy command failed.');
        }
    } catch (err) {
        console.error('Oops, unable to copy password:', err);
    }

}