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

//these are the default special characters I chose but more can be added and it won't impact the functionality of the program
var specialChar=["!", "@", "#","$", "%", "^", "&", "*"]


//this variable is used to pick the case, number, or char
var pick;
//these variable is used to make sure every option is used
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
      return "No password length requested";
     }
    if(passLength < 8 || passLength>128){
      return "You need to use between 8 and 128 characters";
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
                  randomNumber();
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
                  randomUpper();
                  checkerNumber = true;
                }
                else if(pick == 1){
                  randomNumber();
                  checkerSpecial = true;
                }
          }
        }while(checkerNumber == false || checkerSpecial == false);
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
                    checkerLower = true;
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
        randomUpperLoop();
      }
      else if( passOption.upper == false
        && passOption.lower  
        && passOption.number == false
        && passOption.special == false){
          randomLowerLoop();
        }
        else if( passOption.upper == false
          && passOption.lower  == false
          && passOption.number 
          && passOption.special == false){
            randomNumberLoop();
          }
          else if( passOption.upper == false
            && passOption.lower  == false
            && passOption.number == false
            && passOption.special ){
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


// generatePassword();




// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  
    

  var passwordText = document.querySelector("#password");


  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

