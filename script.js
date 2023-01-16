// Assignment Code
var generateBtn = document.querySelector("#generateBtn");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQESTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var passwordLength = prompt("Password length? Please enter a numberical value from 8-128.");
  passwordLength = parseInt(passwordLength);
  var password = ""
  var passwordText = ""
  if (passwordLength < 8) {
    alert("Password must have more than 7 characters.");
    return"";
  }

  if (passwordLength > 128) {
    alert("Password must not have more than 128 characters.");
    return"";
  }

  var lowercaseCharChoice = confirm("Would you like lowercase characters in your password?");

  if (lowercaseCharChoice) {
    passwordText += lowercaseChar;
  }

  var uppercaseCharChoice = confirm("Would you like uppercase characters in your password?");

  if (uppercaseCharChoice) {
    passwordText += uppercaseChar;
  }

  var numericalCharChoice = confirm("Would you like numerical characters in your password?");

  if (numericalCharChoice) {
    passwordText += numericalChar;
  }

  var specialCharChoice = confirm("Would you like special characters in your password?");

  if (specialCharChoice) {
    passwordText += specialChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += passwordText[Math.floor(Math.random() * passwordText.length)]
  }


console.log(password)

  return password
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
