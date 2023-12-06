// Assignment Code
var generateBtn = document.querySelector("#generate");

//The variable containing the password and options chosen
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

//These are the special characters i could find, more can be added without needing to adjust any other line of code
var specialChar=["!", "@", "#","$", "%", "^", "&", "*", "'", "(", ")", "+",",","-",".","/",":",";", "<", "=", ">", "?", "[", "]", "^", "_" , "`", "{", "|", "}", "~"];


//this variable is used to pick the case (upper or lower), number, or char
var pick;

//these variable are used to make sure every option the user selected has been used
var checkerUpper = false;
var checkerLower = false;
var checkerNumber = false;
var checkerSpecial = false;


//What the password will be turned into at the end.
var passwordString;


function generatePassword(){


    var passLength = prompt("how long do you want the password to be? (can be 8 to 128 in length)");


    //makes sure the user is supplying a password length that fits the criteria
    if(passLength === null){
      return null;
     }
    if(passLength < 8 || passLength>128){
      alert("You need to use between 8 and 128 characters");
      return null;
     }
     else{
      alert("you didn't enter a number");
      return null;
     }
     
     //if the password length is within the acceptance criteria, than asks the options
      passOption.upper = window.confirm("Do you want upper case?");
      passOption.lower = window.confirm("Do you want lower case?");
      passOption.number = window.confirm("Do you want numbers?");
      passOption.special = window.confirm("Do you want special characters?");
      
     

      //looped generators/functions (only used if the user picks a single option)

        //will fill the array with random Upper Case
    var randomUpperLoop = function(){
      for(var i=0; i<passLength; i++){
        var upperPush = Math.floor(Math.random()*upperCase.length);
        var selectedUpper = upperCase[upperPush];
        passOption.password.push(selectedUpper);
      }
    }

    //will fill the array with random Lower Case
    var randomLowerLoop = function(){
      for(var i=0; i<passLength;i++){
        var lowerPush = Math.floor(Math.random()*lowerCase.length);
        var selectedLower = lowerCase[lowerPush];
        passOption.password.push(selectedLower); 

      }
    }

    var randomNumberLoop = function(){
    //will fill the array with random numbers
      for(var i=0; i<passLength;i++){
        var numbersPush = Math.floor(Math.random()*numbers.length);
        var selectedNumbers = numbers[numbersPush];
        passOption.password.push(selectedNumbers); 

      }
    }

    //will fill the array with random special characters
    var randomSpecialLoop = function(){
      for(var i=0; i<passLength;i++){
        var specialPush = Math.floor(Math.random()*specialChar.length);
        var selectedSpecial = specialChar[specialPush];
        passOption.password.push(selectedSpecial); 
      }
    }


    //non-looped options (fills the array one character at a time)

    //adds random upper case letters to the array
    var randomUpper = function(){

        upperPush = Math.floor(Math.random()*upperCase.length);
        selectedUpper = upperCase[upperPush];
        passOption.password.push(selectedUpper);
      
    }

    //adds random lower case letters to the array
    var randomLower = function(){
      
        lowerPush = Math.floor(Math.random()*lowerCase.length);
        selectedLower = lowerCase[lowerPush];
        passOption.password.push(selectedLower); 

    }

        //adds random numbers to the array

    var randomNumber = function(){
      
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


   
    //each of these if statements/do while loops basically work the same
    //I'm not what to use to make this more efficient
    //the code is essentially the same in structure but the conditions are all different
  
    
    //this statement goes through if the user only wants upper and lower case for a password
    if (passOption.upper  
        && passOption.lower 
        && passOption.number == false
        && passOption.special == false
        ){
          do{
            //resets the password array if the not all options are selected
            passOption.password = [];
            
            //resets the upper and lower case confirmation
            checkerUpper = false;
            checkerLower = false;

            //runs as long as the password length
            for(var i=0; i<passLength; i++){
              //picks a random number (between 0 & 1)
                pick = Math.floor(Math.random() * 2);
                  //if 0 is selected, puts a random Uppercase in the array/password
                  if(pick == 0 ){
                    randomUpper();
                    //confirms an uppercase has been used
                    checkerUpper = true;
                  }
                  //if 1 is selected, puts a random lowercase in the array/password
                  else if(pick == 1){
                    randomLower();
                    //confirms a lowercase has been used
                    checkerLower = true;
                  }
            }
            //will restart the loop if both a lower case and uppercase have not been used
          }while(checkerUpper == false || checkerLower == false);

    }

    else if (passOption.upper  
      && passOption.lower  == false
      && passOption.number
      && passOption.special == false){
        do{

          passOption.password = [];
          checkerUpper = false;
          checkerNumber = false;

          for(var i=0; i<passLength; i++){
              pick = Math.floor(Math.random() * 2);
                if(pick == 0 ){
                  randomUpper();
                  checkerUpper = true;
                }
                else if(pick == 1){
                  randomNumber();
                  checkerNumber = true;
                }
          }
        }while(checkerUpper == false || checkerNumber == false);
   }

    else if (passOption.upper  
      && passOption.lower  == false
      && passOption.number == false
      && passOption.special ){
        do{

          passOption.password = [];
          checkerUpper = false;
          checkerSpecial = false;

          for(var i=0; i<passLength; i++){
              pick = Math.floor(Math.random() * 2);
                if(pick == 0 ){
                  randomUpper();
                  checkerUpper = true;
                }
                else if(pick == 1){
                  randomSpecial();
                  checkerSpecial = true;
                }
          }
        }while(checkerUpper == false || checkerSpecial == false);
    }

    else if (passOption.upper == false
      && passOption.lower  == false
      && passOption.number 
      && passOption.special ){
        do{

          passOption.password = [];
          checkerNumber = false;
          checkerSpecial = false;

          for(var i=0; i<passLength; i++){
              pick = Math.floor(Math.random() * 2);
                if(pick == 0 ){
                  randomNumber();
                  checkerNumber = true;
                }
                else if(pick == 1){
                  randomSpecial();
                  checkerSpecial = true;
                }
          }
        }while(checkerNumber == false || checkerSpecial == false);
    }
    else if (passOption.upper == false
      && passOption.lower  
      && passOption.number 
      && passOption.special == false){
        do{

          passOption.password = [];
          checkerLower = false;
          checkerNumber = false;

          for(var i=0; i<passLength; i++){
              pick = Math.floor(Math.random() * 2);
                if(pick == 0 ){
                  randomLower();
                  checkerLower = true;
                }
                else if(pick == 1){
                  randomNumber();
                  checkerNumber = true;
                }
          }
        }while(checkerNumber == false || checkerLower == false);
    }
    else if (passOption.upper == false
      && passOption.lower 
      && passOption.number == false
      && passOption.special ){
        do{

          passOption.password = [];
          checkerSpecial = false;
          checkerLower = false;

          for(var i=0; i<passLength; i++){
              pick = Math.floor(Math.random() * 2);
                if(pick == 0 ){
                  randomLower();
                  checkerLower = true;
                }
                else if(pick == 1){
                  randomSpecial ();
                  checkerSpecial = true;
                }
          }
        }while(checkerSpecial == false || checkerLower == false);
    }



    //if the user picks THREE options
    else if(passOption.upper 
        && passOption.lower 
        && passOption.number
        && passOption.special == false){

          do{
              passOption.password = [];
              
              checkerUpper = false;
              checkerLower = false;
              checkerNumber = false;

              for(var i=0; i<passLength; i++){
                pick = Math.floor(Math.random() *3);
                
                  if(pick == 0 ){
                    randomUpper();
                    checkerUpper = true;
                  }
                  else if(pick == 1){
                    randomLower();
                    checkerLower = true;
                  }
                  else if(pick == 2){
                    randomNumber();
                    checkerNumber = true;
                  }
                }            
                
            }while(checkerUpper == false || checkerLower == false || checkerNumber == false );
            
            
      }


      else if(passOption.upper 
        && passOption.lower 
        && passOption.number == false
        && passOption.special ){

          do{
              passOption.password = [];
              
              checkerUpper = false;
              checkerLower = false;
              checkerSpecial = false;

              for(var i=0; i<passLength; i++){
                pick = Math.floor(Math.random() *3);
                
                  if(pick == 0 ){
                    randomUpper();
                    checkerUpper = true;
                  }
                  else if(pick == 1){
                    randomLower();
                    checkerLower = true;
                  }
                  else if(pick == 2){
                    randomSpecial();
                    checkerSpecial = true;
                  }
                }            
                
            }while(checkerUpper == false || checkerLower == false || checkerSpecial == false );
            
      }

      else if(passOption.upper 
        && passOption.lower == false 
        && passOption.number 
        && passOption.special ){

          do{
              passOption.password = [];
              
              checkerUpper = false;
              checkerSpecial = false;
              checkerNumber = false;

              for(var i=0; i<passLength; i++){
                pick = Math.floor(Math.random() *3);
                
                  if(pick == 0 ){
                    randomUpper();
                    checkerUpper = true;
                  }
                  else if(pick == 1){
                    randomNumber();
                    checkerNumber = true;
                  }
                  else if(pick == 2){
                    randomSpecial();
                    checkerSpecial = true;
                  }
                }            
                
            }while(checkerUpper == false || checkerNumber == false || checkerSpecial == false );
            
      }


      else if(passOption.upper == false 
        && passOption.lower 
        && passOption.number 
        && passOption.special ){

          do{
              passOption.password = [];
              
              checkerLower = false;
              checkerNumber = false;
              checkerSpecial = false;
              

              for(var i=0; i<passLength; i++){
                pick = Math.floor(Math.random() *3);
                
                  if(pick == 0 ){
                    randomLower();
                    checkerLower = true;
                  }
                  else if(pick == 1){
                    randomNumber();
                    checkerLower = true;
                  }
                  else if(pick == 2){
                    randomSpecial();
                    checkerSpecial = true;
                  }
                }            
                
            }while(checkerLower == false || checkerNumber == false || checkerSpecial == false );
            
      }



      // if the user picks all options
    else if(passOption.upper 
        && passOption.lower 
        && passOption.number
        && passOption.special){
        
        do{

          passOption.password = [];

          checkerUpper = false;
          checkerLower = false;
          checkerNumber = false;
          checkerSpecial = false;

          for(var i=0; i<passLength; i++){
            pick = Math.floor(Math.random() *4);
              if(pick == 0 ){
                randomUpper();
                checkerUpper = true;
              }
              else if(pick == 1){
                randomLower();
                checkerLower = true;
              }
              else if(pick == 2){
                randomNumber();
                checkerNumber = true;
              }
              else if(pick == 3){
                randomSpecial();
                checkerSpecial = true;
              }
            }
          }while(checkerUpper == false || checkerLower == false || checkerNumber == false || checkerSpecial == false);
    }

    //if the user only picks one option
    else if( passOption.upper 
      && passOption.lower == false 
      && passOption.number == false
      && passOption.special == false){

        //clears the password that's in the password box before generating a new one
        passOption.password = [];
        randomUpperLoop();
      }
      else if( passOption.upper == false
        && passOption.lower  
        && passOption.number == false
        && passOption.special == false){
          passOption.password = [];
          randomLowerLoop();
        }
        else if( passOption.upper == false
          && passOption.lower  == false
          && passOption.number 
          && passOption.special == false){
            passOption.password = [];
            randomNumberLoop();
          }
          else if( passOption.upper == false
            && passOption.lower  == false
            && passOption.number == false
            && passOption.special ){
              passOption.password = [];
              randomSpecialLoop();
            }


        //if the user doesn't pick any options
        else{
          alert("you didn't pick any options");
        }

        

      //turns the password from an array to a string
      passwordString = passOption.password.join("");
      
      //returns the password as a string
      return passwordString;

}





// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  
    

  var passwordText = document.querySelector("#password");


  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








///////////////////////////////////////////////////////////////////
//What I thought would be a better way to do this project. But it doesn't meet all the acceptance criteria


//the thought process.
//have a blank array that will eventually be filled up with the different options
//the password will then be picked from this new array

//like, if they want uppercase then all then the uppercase letters get added
//to the password array. same for all the other options.
//the program will then randomly pick array spots from this newly created array


//this is my psudo code
////////////////////////////////////////////////////
// var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWKYZ"];
// var lowerCase = ["abcdefghijklmnopqrstuvwkyz"];
// var numbers = ["0123456789"];
// var special = ["!@#$%^&*()_+-={}|[]:<>?,./"];

// var passToFill = [];
// //remember to use the .split() method
// var passLength = prompt("how long?");
// var upper = confirm("want uppercase?");
// if(upper){
//   passToFill = passToFill.join(upperCase);
// }
// var upper = confirm("want lower case?");
// if(lower){
//   passToFill = passToFill.join(upperlower);
// }
// var upper = confirm("want numbers?");
// if(number){
//   passToFill = passToFill.join(uppernumbers);
// }
// var upper = confirm("want special?");
// if(special){
//   passToFill = passToFill.join(upperspecial);
// }
// //make this else statement for things that don't work
// else{
//   prompt("you didn't pick any options")
// }
// for (var i = 0; i<passLength.length; i++){
//   //fill up the new password array here with random array spots
// }
// //return the new password
// return passToFill;
/////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////
//the actual code. It works, but doesn't confirm that all the user options are in the final password


// //global variables
// //the options the user can pick for their password
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWKYZ";
// var lowerCase = "abcdefghijklmnopqrstuvwkyz";
// var number = "0123456789";
// var specialCharcters = "!@#$%^&*()_+-={}|[]:<>?,./";

// //this array will be filled with the options the user picks
// var passSet = [];



// var passArray;

// var finalPass = [];

// //After getting the final password, this is the variable used to convert it to a string
// var passwordString;
// var generatePassword =function(){

//   //these turn the options into an array. I didn't want to type out ["A", "B", "C"....]
//   var upperCaseArray = upperCase.split("");
//   var lowerCaseArray = lowerCase.split("");
//   var numbersArray = number.split("");
//   var specialArray = specialCharcters.split("")

//   //Clears the arrays that i'll be filling each time for the password options/password
//   passSet = [];
//   finalPass =[];

//   //gets the length of the password
//   var passLength = prompt("how long do you want your password to be?(Can be 8-128 characters)");

//   //makes sure the password is within the limits given by the acceptance criteria
//   if(passLength == 0 || passLength ==""){
//     return "No password length entered";
//   }
//   if(passLength < 8 || passLength>128){
//     alert('password needs to be between 8 and 128 characters');
//     return "password is outside the limits";
//   }

//   //these next  4 if statements essentially all work the same.
//   //if the user chose the option, that option is then added to the array the password can later choose from

//   //checks if the user want's uppercase letters in the password
//   var upper = confirm("do you want to use uppercase?");
//   if(upper){
//     //adds uppercase letters to the array that the password can choose from later in the program
//     passSet.push(...upperCaseArray);
//     //just to help me know the if statment is being reached
//     console.log("in the upper if statement");
//   }
//   var lower = confirm("do you want to use lowercase?");
//   if(lower){
//     passSet.push(...lowerCaseArray);
//     console.log("in the lower if statment");
//   }
//   var numbers = confirm("do you want to add numbers to the password?");
//   if(numbers){
//     passSet.push(...numbersArray);
//     console.log("in the number if statement");
//   }
//   var special = confirm("do you want to add special characters to the password?");
//   if(special){
//     passSet.push(...specialArray);
//     console.log("in the special if statment");
//   }
//   //let's me know what the final option array has that the random password can then choose from
//   console.log(passSet);

//   // runs as many times as the user chose for the length of the password
// for(var i =0;i<passLength;i++){
//   //picks a random number that is between 0 and the length of the option array
//   var passRando = Math.floor(Math.random()*passSet.length);
//   //takes that random number and converts it that spot in the array that has all the user options for the password
//   var passSelected = passSet[passRando];
//   //puts that random character into the end of the finalPass array  --> this is essentially what the password will end up being
//   finalPass.push(passSelected);
// }

// console.log(passRando);
// console.log(finalPass);
// //converts that finalPass from an array to a string. (otherwise the password will have a bunch of commas in it)
// passwordString = finalPass.join("");

// //returns the final password as a string
// return passwordString;

// }
