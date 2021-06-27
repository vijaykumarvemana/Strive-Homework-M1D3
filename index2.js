// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of a 'isMale' parameter
*/

function ex1(isMale) {
  const string = isMale ? "male" : "female"
  return string
}

console.log(ex1(true)) // expected "male"
console.log(ex1(false)) // expected "female"

/*
 2. Write code to check from two given integers a and b whether one of them is 8 or their sum or difference is 8.
*/

function ex2(a, b) {
  if (a == 8 || b == 8) {
    return true;
  }

  if (a + b == 8 || a - b == 8)
  {
    return true;
  }
  return false;
}


console.log(ex2(8, 0)) // a is 8 -> expected: true
console.log(ex2(15, 7)) // 15 - 7 = 8 -> expected: true
console.log(ex2(7, 1)) // 7 + 1 expected: true

console.log(ex2(7, 2)) // expected: false

/*
  3. Return a variable that concatenates two strings a and b.
*/
function ex3(a, b) {
  return a + b
}

console.log(ex3("Strive ", "School")) // expected: "Strive School"

/*
4.Write a JavaScript conditional statement to sort three numbers in ascending order. Display the result in the console.
*/
function ex4(a,b,c) {
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

console.log(ex4(8,10,3)) // expected: [3, 8, 10]


/*
 5. Write code to find the average of two given integers.
*/
function ex5(a,b) {
  return ((a+b)/2)
}

/* 
  6. Find the longest of two given strings
*/
function ex6(a,b) {
  return a > b ? a : b
}

/*
 7. Write code to check whether a value is a number or not.
*/
function ex7(value) {
  return (typeof value === 'number')
}

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/
function ex8(perc, num) {
  return (perc/100) * num
}

 console.log(ex8(20, 400)) // expected: 80

/*
 9. Write code to check if a given number is even or odd.
*/
function ex9(num) {
  return num%2 === 0 ? "even" : "odd"
}

console.log(ex9(4)) // expected: "even"
console.log(ex9(9)) // expected: "odd"

module.exports = { 
  ex1, 
  ex2, 
  ex3, 
  ex4, 
  ex5, 
  ex6, 
  ex7, 
  ex8, 
  ex9 
}