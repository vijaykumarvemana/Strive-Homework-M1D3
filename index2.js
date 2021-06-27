// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of a 'isMale' parameter
*/

function finder(isMale) {
  const string = isMale ? "male" : "female"
  return string
}
console.log(finder(true)) // expected "male"
console.log(finder(false)) // expected "female"

/*
 2. Write code to check from two given integers a and b whether one of them is 8 or their sum or difference is 8.
*/

function checker(a, b) {
  if (a == 8 || b == 8) {
    return true;
  }

  if (a + b == 8 || a - b == 8)
  {
    return true;
  }
  return false;
}
console.log(checker(8, 0)) // a is 8 -> expected: true
console.log(checker(15, 7)) // 15 - 7 = 8 -> expected: true
console.log(checker(7, 1)) // 7 + 1 expected: true
console.log(checker(7, 2)) // expected: false

/*
  3. Return a variable that concatenates two strings a and b.
*/
function twoStrings(a, b) {
  return a + b
}
console.log(twoStrings("Strive ", "School")) // expected: "Strive School"

/*
4.Write a JavaScript conditional statement to sort three numbers in ascending order. Display the result in the console.
*/
function ascenOrder(a,b,c) {
  if(a < b && a < c && b < c) {
    console.log(a, b ,c)
   } 
    else if (b < c && b < a && c < a) {
    console.log(b, c , a)
  }  
   else if(c < a && c < b && a < b) {
    console.log(c, a ,b);
  } else {
    console.log("nothing");
  }
  
}
console.log(ascenOrder(8,10,3)) // expected: [3, 8, 10]


/*
 5. Write code to find the average of two given integers.
*/
let d = 4;
let h = 5;
let average = (d + h) / 2;
console.log(average);


/* 
  6. Find the longest of two given strings
*/
let str1 = "strive School";
let str2 = "FullStack";
if (str1.length > str2.length) {
  console.log("str1 is longer");
} else {
  console.log("str2 is longer");
}
/*
 7. Write code to check whether a value is a number or not.
*/
let string = "hello!"
let number = 50
console.log(typeof string);
if (typeof number === "number") {
  console.log(true);
} else {
  console.log(false);
}

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/
let num = 400;
let per = 20;
let percentage = (400 / 100) * 20;
console.log(percentage);
/*function ex8(perc, num) {
  return (perc/100) * num
}
 console.log(ex8(20, 400)) // expected: 80
 */

/*
 9. Write code to check if a given number is even or odd.
*/
function evenOdd(num) {
  return num%2 === 0 ? "even" : "odd"
}

console.log(evenOdd(4)) // expected: "even"
console.log(evenOdd(9)) // expected: "odd"

