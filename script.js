var password = "";

var passwordLength = function () {
  var lengthPass = prompt(
    "Password Must Be Between 8 and 128 Characters Long."
  );

  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Entry. Length Must Be Between 8 and 128 Characters Long.");
    return passwordLength();
  }

  lengthPass = Math.floor(Number(lengthPass));

  return lengthPass;
};
var passwordGeneration = function () {
  password = "";

  var lengthPassword = passwordLength();

  var passInclu = charaInclusions();
  var passIncluLength = passInclu.length;

  for (var i = 0; i < lengthPassword; i++) {
    password += passInclu.charAt(Math.floor(Math.random() * passIncluLength));
  }

  return password;
};

var charaInclusions = function () {
var passInclu = "";

  var specialChar = "~`!@#$%^&*+<?/;:(=)|{".split(" ");
  var numbers = "0123456789".split(" ");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split(" ");

  var confirmLower = confirm("Would you like Lower Case Characters?");
  var confirmUpper = confirm("Also Upper Case Characters");
  var confirmNumber = confirm("Do you want Numbers?");
  var confirmSpecial = confirm("How about Special Characters?");

  if (confirmLower == true) {
    passInclu += lowerCase;
    console.log(confirmLower)
  }

  if (confirmUpper == true) {
    passInclu += upperCase;
    console.log(confirmUpper)
  }
  if (confirmNumber == true) {
    passInclu += numbers;
    console.log(confirmNumber)
  }
  if (confirmSpecial == true) {
    passInclu += specialChar;
    console.log(confirmSpecial)
  }
  console.log(passInclu)

  return passInclu
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGeneration();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
