// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = '';
  var length = 0;
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' ,'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var spChar = ['!', '"', '#', '$', '%', '&', "'", '(',  ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '[', ']', '|', '~']; 
  length = window.prompt('How long would you like your password to be?\nPlease choose a number between 8 and 128.');
  // checks validity of number
  if (length < 8 || length > 128) {
      alert("That is not a valid number.");
      // console.log(length);
      generatePassword();
  }
  // possibly the mega-array
  var validChar = [];
  // prompt --> Do they want uppercase letters?
  var askUpper = confirm("Do you want your password to include uppercase letters?")
  console.log(askUpper, ' askUpper');
  // prompt --> Do they want lowercase letters?
  var askLower = confirm("Do you want your password to include lowercase letters?")
  console.log(askLower, ' askLower');
  // prompt --> Do they want numbers?
  var askNumbers = confirm("Do you want your password to include numbers?")
  console.log(askNumbers, ' askNumbers');
  // prompt --> Do they want special characters?
  var askChar = confirm("Do you want your password to include special characters?")
  console.log(askChar, ' askChar');
  
  // checks to see if the user selected at least one character set
  if (!askUpper && !askLower && !askNumbers && !askChar) {
    alert("You must pick at least one option.\nPlease click 'Generate Password' again.");
    return;
  }
  
  // With each of those prompts, you need an array of those character types
  if (askUpper === true) {
    validChar = validChar.concat(uppercase);
    password = password.concat(uppercase[Math.floor(Math.random() * uppercase.length)]);
    // console.log(password);
  }
  if (askLower === true) {
    validChar = validChar.concat(lowercase);
    password = password.concat(lowercase[Math.floor(Math.random() * lowercase.length)]);
    // console.log(password);
  }
  if (askNumbers === true) {
    validChar = validChar.concat(numbers);
    password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
    // console.log(password);
  }
  if (askChar === true) {
    validChar = validChar.concat(spChar);
    password = password.concat(spChar[Math.floor(Math.random() * spChar.length)]);
    // console.log(password);
  }
  // console.log(validChar);

  pwLength = length - password.length;
  console.log(pwLength);
  console.log(password);
  for (var i = 0; i < pwLength; i++) {
    password = password.concat(validChar[Math.floor(Math.random() * validChar.length)]);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
