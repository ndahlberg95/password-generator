// Assignment code here

var length
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = '0123456789';
var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//How long do you want your password to be? (8-128 characters)

//What type of characters do you want your password to have? (uppercase/lowercase letters, numbers, special characters)
function generatePassword() { 

  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  var numericCharacters = confirm(
    "Click 'ok' to include numbers in your password or 'cancel' to exclude numbers."
  );

  var lowercaseCharacters = confirm(
    "Click 'ok' to include lowercase letters in your password or 'cancel' to exclude lowercase letters."
  );

  var uppercaseCharacters = confirm(
    "Click 'ok' to include uppercase letters in your password or 'cancel' to exclude uppercase letters."
  );

  var specialCharacters = confirm(
    "Click 'ok' to include special characters in your password or 'cancel' to exclude special characters."
  );

  //check options
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    // return;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    // return;
  }

  var randomPassword = ""

  var characterOptions = ""

  if (numericCharacters === true) {
    characterOptions = characterOptions + numeric;
  }

  if (lowercaseCharacters === true) {
    characterOptions = characterOptions + lowercase;
  }
 
  if (uppercaseCharacters === true) {
    characterOptions = characterOptions + uppercase;
  }
  
  if (specialCharacters === true) {
    characterOptions = characterOptions + punctuation;
  }
  
  for (var i = 0; i < length; i++) {
    var randIndex = Math.floor (Math.random() * characterOptions.length);
    var randomChar = characterOptions.charAt(randIndex)
    randomPassword = randomPassword + randomChar
  }

  return randomPassword;
}


//DON'T CHANGE ANYTHING BELOW THIS LINE!!!


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);