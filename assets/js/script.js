// Assignment code here

var length
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = '0123456789';
var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//How long do you want your password to be? (8-128 characters)

//What type of characters do you want your password to have? (uppercase/lowercase letters, numbers, special characters)
function generatePassword() {
  console.log("Hey there!");

  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  var numericCharacters = confirm (
    "Click 'ok' to include numbers in your password or 'cancel' to exclude numbers."
  );

  var lowercaseCharacters = confirm (
    "Click 'ok' to include lowercase letters in your password or 'cancel' to exclude lowercase letters."
  );

  var uppercaseCharacters  = confirm (
    "Click 'ok' to include uppercase letters in your password or 'cancel' to exclude uppercase letters."
  );

  var specialCharacters  = confirm (
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

    if (numericCharacters === true) {
      randomPassword = randomPassword + numeric;
    }
    console.log (randomPassword)
    if (lowercaseCharacters === true) {
      randomPassword = randomPassword + lowercase;
    }
    console.log (randomPassword)
    if (uppercaseCharacters === true) {
      randomPassword = randomPassword + uppercase;
    }
    console.log (randomPassword)
    if (specialCharacters === true) {
      randomPassword = randomPassword + punctuation;
    }
    console.log (randomPassword)
    
    for (var i = 0; i < 10; i ++) {
      console.log ("here's your password")  
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