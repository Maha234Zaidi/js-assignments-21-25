// =================JS ASSIGNMENTS 21-25==================//

// ques 01
// ans
/* var firstName = prompt("enter your first name ");
var secondName = prompt(" enter your last name ");
var fullName = firstName + secondName;
document.write(fullName);  */

// ques 2
//ans
/* var userPhone = prompt("enter your favourite phone model");
var phoneOfLength = userPhone.length;
document.write("My favourite phone is: " + userPhone + "<br>" + "Length of string : " + phoneOfLength) */

// ques 3
//ans
/* var word = "Pakistani";
var index = word.indexOf("n");
document.write("String :" + word + "<br>" + "Index of 'n' " + index
); */

// ques 4
//ans
/* var word = "Hello World";
var index = word.lastIndexOf('l');
document.write("String :" + word + "<br>" + "Last index of 'l' " + index) */

//ques 5
//ans
/* var word = "Pakistani";
var index = word.charAt("3");
document.write("String :" + word + "<br>" + "Character at index 3: " + index) */

//ques 6
//ans
/*  var firstName = prompt("enter your first name ");
var secondName = prompt(" enter your last name ");
var fullName = firstName.concat(secondName) ;
document.write(fullName);   */

// ques 7
//ans
/* var cityName1 = "Hyderabad";
var replacing = cityName1.replace("Hyderabad","Islamabad")
document.write("City :" + cityName1 + "<br>" + "After replacement: " + replacing); */

//ques 8 
//ans
/* var message = "Ali and Sami are best friends. They play cricket and football together.";
var messageReplace = message.replace(/and/g,"&")
document.write(messageReplace); */

// ques 9
// ans
/* var stringNum = "472";
var number = Number(stringNum);
document.write("Value: " + stringNum + "<br> "+ "Type : " + typeof stringNum + "<br>" );
document.write("Value: " + number + "<br> "+ "Type : " + typeof number + "<br>" ); */

//ques 10 
//ans
/* var userInput = prompt("enter your favourite dryfruit");
var converted = userInput.toUpperCase();
document.write(converted);
 */

// ques 11
//ans
/* var userInput = prompt("enter a sentence");

var firstChar = userInput.slice(0,1);
var otherChar = userInput.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var mixed = firstChar + otherChar;
document.write(mixed) */

// ques 12
//ans
/* var num = 35.36;
var str = num.toString().replace(".","");
document.write(str) */

//ques 13 
//ans
//  ascii_of_at = 64;
//  ascii_of_exclamation = 33;
//  ascii_of_comma = 44;
//  ascii_of_period = 46;

/* var userInput = prompt("enter your username");
var characterCode = userInput.charCodeAt(0);
for(var i = 0; i < userInput.length; i++){
     characterCode = userInput.charCodeAt(i);
     if(characterCode === 64 || characterCode === 33 || characterCode === 44 || characterCode === 46){
        alert("Please enter a valid username!");
        break
     } 
} */

// ques 14
//ans
/* var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("wht do you want to order");
var flag = false;
userInput = userInput.toLowerCase();
for(var i = 0; i < array.length; i++){
   if( userInput=== array[i]){
    document.write(array[i] + " is available at index " +  i + " in our bakery")
    flag = true
   }
}
if (flag=== false){
    document.write("we are sorry " +  userInput + " is not available in our bakery"   )
}
 */

// ques 15
//ans


//question 16
//ans
/* var university = ("UNIVERSITY OF KARACHI");
var array = university.split("");
for(var i = 0; i < array.length; i++){
    document.write(array[i]);
}
 */

// ques 17
//ans
/* var userInput = prompt("write any word");
var lastChar =userInput[userInput.length -1];
document.write("User input " + userInput + "<br>" + "Last character of input:" + lastChar); */

//ques 18
//ans
/* var string = "The quick brown fox jumps over the lazy dog";
string = string.toLowerCase();
var findThe = string.split("the").length - 1;
document.write("Text: " + string +"<br>" + " There are " + findThe + " occurence(s) of word 'the' " ); */