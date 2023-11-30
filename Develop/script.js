// Assignment Code




var generateBtn = document.querySelector("#generate");

var passOptions = {
  upper: false,
  lower: false,
  special: false,
  number: false
}

var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers=[0,1,2,3,4,5,6,7,8,9,]
var specialChar=["!", "@", "#","$", "%", "^", "&", "*"]

var newPass=[];

function generatePassword(){
  var passLength =prompt("how long do you want the password to be?");
  var index;
  for(var i=0; i<passLength; i++){
    index = Math.floor(Math.random()*upperCase.length);
    newPass = 

  }



}
generatePassword();
console.log(passOptions);
console.log(upperCase);
console.log(lowerCase);
console.log(numbers);
console.log(specialChar);















//     testing things out before making it work with the stuff below 



// // Write password to the #password input
// function writePassword() {


//   var password = generatePassword();
  

//   var passwordText = document.querySelector("#password");


//   passwordText.value = "password";



// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

