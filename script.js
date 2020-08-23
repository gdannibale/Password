// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
 }



  function generatePassword() {
    var password = "This should be getting changed!";
    var characters = 0;
    var lowercase = "";
    var Uppercase = "";
    var specialcharacter = "";
    


    var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var Uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
    var possiblepassword = [];
    var pw = [];
   
    characters = prompt("How many characters would you like (>7, <128?)");
    lowercase = prompt("Do you want lowercase characters (yes/no?)");
    Uppercase = prompt("Do you want uppercase characters (yes/no?)");
    specialcharacter = prompt ("Do you want special characters (yes/no?)");
      
      if (characters < 8) {
        alert("This number is invalid!"); 
        return "This number is less than 8.";
      }
      if (characters > 128) {
        alert("This number is invalid!");
        return "This number is greater than 128.";
      }
      if (lowercase == "yes" || Uppercase == "yes" || specialcharacter == "yes") {
        
      }else {
        alert("You have to choose at least one character type.");
        return "You have to choose at least one character type.";
      }
 

      if (lowercase == "yes") {
        possiblepassword = lc.concat(possiblepassword);

      }
      if (Uppercase == "yes") {
        possiblepassword = Uc.concat(possiblepassword);

      }
      if (specialcharacter == "yes") {
        possiblepassword = special.concat(possiblepassword);

      }
  //console.log("How many characters would you like?: " + characters );
  //console.log("Do you want lowercase characters?: " + lowercase );
  //console.log("Do you want uppercase characters?: " + Uppercase );
  //console.log("Do you want special characters?: " + specialcharacter );
  //console.log(lc);
  //console.log(Uc);
  //console.log(special);
  //console.log(possiblepassword);   
  
  var i;
  password = "";
  for (i = 0; i < characters; i++) {
  password = password + possiblepassword[Math.floor(Math.random() * possiblepassword.length)];
}

  console.log("How many characters would you like?: " + characters );
  console.log("Do you want lowercase characters?: " + lowercase );
  console.log("Do you want uppercase characters?: " + Uppercase );
  console.log("Do you want special characters?: " + specialcharacter );
  console.log(lc);
  console.log(Uc);
  console.log(special);
  console.log(possiblepassword);

  

      return password;
  }

  



  //create array
  //for loop characters times







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
