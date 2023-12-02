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
//these variable is used to make sure every option is used
var checkerUpper = false;
var checkerLower = false;
var checkerNumber = false;
var checkerSpecial = false;


//What the password will be turned into at the end.
var passwordString;


function generatePassword(){


    var passLength = prompt("how long do you want the password to be? (for security, must be more than 4 characters)");


    if(passLength <= 3){
      return "You need to use at least 4 characters";
    }
    
      passOption.upper = window.confirm("Do you want upper case?");
      passOption.lower = window.confirm("Do you want lower case?");
      passOption.number = window.confirm("Do you want numbers?");
      passOption.special = window.confirm("Do you want special characters?");
      
     

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


    //for if the user picks TWO options
    if (passOption.upper  
        && passOption.lower 
        && passOption.number == false
        && passOption.special == false
        ){
          do{

            passOption.password = [];
            checkerUpper = false;
            checkerLower = false;

            for(var i=0; i<passLength; i++){
                pick = Math.floor(Math.random() * 2);
                  if(pick == 0 ){
                    randomUpper();
                    checkerUpper = true;
                  }
                  else if(pick == 1){
                    randomLower();
                    checkerLower = true;
                  }
            }
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
        else{
          alert("you didn't pick any options");
        }

      console.log(passOption.password);

      passwordString = passOption.password.join("");
      console.log(passwordString);
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

