// Assignment Code




var generateBtn = document.querySelector("#generate");

var passOption = {
  upper: false,
  lower: false,
  special: false,
  number: false,
  password:[]
}

var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers=[0,1,2,3,4,5,6,7,8,9,]
var specialChar=["!", "@", "#","$", "%", "^", "&", "*"]


//this variable is used to pick the case, number, or char
var pick;



function generatePassword(){
  var passLength = prompt("how long do you want the password to be?");

  passOption.upper = window.confirm("Do you want upper case?");
  passOption.lower = window.confirm("Do you want lower case?");
  passOption.special = window.confirm("Do you want special characters?");
  passOption.number = window.confirm("Do you want numbers?");
  

      //this fill the array with random Upper Case
  var randomUpperLoop = function(){
    for(var i=0; i<passLength; i++){
      var upperPush = Math.floor(Math.random()*upperCase.length);
      var selectedUpper = upperCase[upperPush];
      passOption.password.push(selectedUpper);
    }
  }

   //will add to array with random Lower Case
   var randomLowerLoop = function(){
    for(var i=0; i<passLength;i++){
      var lowerPush = Math.floor(Math.random()*lowerCase.length);
      var selectedLower = lowerCase[lowerPush];
      passOption.password.push(selectedLower); 

    }
  }

  var randomNumberLoop = function(){
  //adds random numbers to the array
    for(var i=0; i<passLength;i++){
      var numbersPush = Math.floor(Math.random()*numbers.length);
      var selectedNumbers = numbers[numbersPush];
      passOption.password.push(selectedNumbers); 

    }
  }

  //adds random special characters to the array
  var randomSpecialLoop = function(){
    for(var i=0; i<passLength;i++){
      var specialPush = Math.floor(Math.random()*specialChar.length);
      var selectedSpecial = specialChar[specialPush];
      passOption.password.push(selectedSpecial); 
    }
  }


  
  //non-looped options
  var randomUpper = function(){

      upperPush = Math.floor(Math.random()*upperCase.length);
      selectedUpper = upperCase[upperPush];
      passOption.password.push(selectedUpper);
    
  }

  //will add to array with random Lower Case
  var randomLower = function(){
    
      lowerPush = Math.floor(Math.random()*lowerCase.length);
      selectedLower = lowerCase[lowerPush];
      passOption.password.push(selectedLower); 

  }

  var randomNumber = function(){
  //adds random numbers to the array
    
      numbersPush = Math.floor(Math.random()*numbers.length);
      selectedNumbers = numbers[numbersPush];
      passOption.password.push(selectedNumbers); 
    
  }

  //adds random special characters to the array
  var randomSpecial = function(){
    
      specialPush = Math.floor(Math.random()*specialChar.length);
      selectedSpecial = specialChar[specialPush];
      passOption.password.push(selectedSpecial); 
    
  }

  if (passOption.upper  
      && passOption.lower 
      && passOption.number == false
      && passOption.special == false
      ){

      for(var i=0; i<passLength; i++){
          pick = Math.floor(Math.random() * 2);
          console.log(pick);
            if(pick == 0 ){
              randomUpper();
            }
            else if(pick == 1){
              randomLower();
            }
      }

  }

  else if(passOption.upper 
      && passOption.lower 
      && passOption.number
      && passOption.special == false){
    for(var i=0; i<passLength; i++){
      pick = Math.floor(Math.random() *3);
      console.log(pick);
        if(pick == 0 ){
          randomUpper();
        }
        else if(pick == 1){
          randomLower();
        }
        else if(pick == 2){
          randomNumber();
        }
    }
  }

  else if(passOption.upper 
      && passOption.lower 
      && passOption.number
      && passOption.special){

      for(var i=0; i<passLength; i++){
        pick = Math.floor(Math.random() *4);
        console.log(pick);
          if(pick == 0 ){
            randomUpper();
          }
          else if(pick == 1){
            randomLower();
          }
          else if(pick == 2){
            randomNumber();
          }
          else if(pick == 3){
            randomSpecial();
          }
    }
  }



  console.log(passOption.password);


  //only if one option is selected
    if(passOption.upper){
      randomUpperLoop();
    }
    else if(passOption.lower){
      randomLowerLoop();
    }
    else if(passOption.number){
      randomNumberLoop();
    }
    else if(passOption.special){
      randomSpecialLoop();
    }

}
  //





  // console.log(passOption.password);



generatePassword();
// console.log(passOption);
// console.log(upperCase);
// console.log(lowerCase);
// console.log(numbers);
// console.log(specialChar);















//     testing things out before making it work with the stuff below 



// // Write password to the #password input
// function writePassword() {


//   var password = generatePassword();
  

//   var passwordText = document.querySelector("#password");


//   passwordText.value = "password";



// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

