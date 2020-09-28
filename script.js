// FUNCTION EXERCISES

// Remember the syntax for a function is

// function nameOfFuntion(param1, param2) {
//    code block();
// }
//

// **************************************************** //
// #1 Write a function that adds two numbers together. 
// **************************************************** //
function aFunctionToAddTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

aFunctionToAddTwoNumbers(1,2);
// **************************************************** //
// #2 Write a function that squares a number
// **************************************************** //
// function squaredNum(numToSquare) {
//   return numToSquare * numToSquare;
// }

// console.log(squaredNum(60));
// console.log(squaredNum(6));
// console.log(squaredNum(3));
// console.log(squaredNum(1));


// **************************************************** //
// #3 Write a function that cubes a number
// **************************************************** //
// function cube(numToCube) {
//   console.log(numToCube ** 3);
// }

// cube(3);
// **************************************************** //
// #4 Write a function that takes two arguments both numbers.
//    The first number will be raised to the power of the second number.
// **************************************************** //
// function raiseNumber(base,exponent) {
//   console.log(base ** exponent);
// }
// raiseNumber(4,4);
// **************************************************** //
// #5
// We are building an early feature for NASA. 
// This feature requires us to 
// create a function that finds
// the hypotenuse of a triangle.

// The formula to find the 
// hypotenuse is. 
// h^2  = a^2 + b^2 
// **************************************************** //
// function squaredNum(numToSquare) {
//   return numToSquare * numToSquare;
// }

// function getHypotenuse(sideOne, sideTwo) {
//   var hypotenuseSquare;
//   var aSquared = squaredNum(sideOne)
//   var bSquared = squaredNum(sideTwo)

//   hypotenuseSquare = aSquared + bSquared;
//   console.log(Math.sqrt(hypotenuseSquare));
// }

// getHypotenuse(9, 3);
// **************************************************** //
// #6 
// Write a function called isBoolean that takes in a boolean param, 
// meaning that when we pass in an argument it will be a true or false value. 
// If we pass in a truthy value we will print to the console “this is a truthy value”. 
// If we pass a falsy value we will print to the console “this is a falsy value”
// **************************************************** //
// function isBoolean(trueOrFalseValue) {
//   if (trueOrFalseValue) {
//     console.log("you passed in a true statement");
//   } else {
//     console.log("this value is false")
//   }
// }

// var password = "George";
// isBoolean("George" == password);

// **************************************************** //
// #7 
// Write a function that takes no parameters and only prints “Hello” to the console 100 times. 
// **************************************************** //

// **************************************************** //
// #8 
// Write a function that takes no parameters. 
// The function will prompt the user to enter the password. 
// The secret password is “password”.
// Prompt for success or failure
// **************************************************** //
function secretPassword() {

  var password; 

  while (password != "password") {
    password = prompt("Enter you password here", "airplane is a default value in our text box");

    if(password == "password" ){
      console.log("You got the password right!!");
    } else {
      console.log("try again");
    }
  }
 
}

secretPassword();


// until you get the correct password keep prompting the user 
// to enter the password

// **************************************************** //
// #9
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the 
// number and for the multiples of five print “Buzz”. For 
// numbers which are multiples of both three and five print 
// “FizzBuzz"
// **************************************************** //