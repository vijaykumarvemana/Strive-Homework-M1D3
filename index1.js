/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20.
*/

function ex1(){
   return 12+20
}

/* EXERCISE 2
Create a variable named x containing the number 12. Then, UNCOMMENT the "return x" line.
*/

function ex2(){
  let x = 12
  return x
}
//
/* EXERCISE 3
Create a variable named name containing the string John Doe Then, UNCOMMENT the "return name" line.
*/

function ex3(){
  let name = "John Doe"
  return name
}

/* EXERCISE 4
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
Then, UNCOMMENT the commented out lines.
*/

function ex4(){
  let x = 12
  let result = x - 12
  return result
}

/* EXERCISE 5
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
Eventually, return both result1 and result2
Then, UNCOMMENT the commented out lines.
*/

function ex5(){
  let name1 = "john"
  let name2 = "John"
  let result1 = name1 === name2
  let result2 = name1 === name2.toLowerCase()
  return {
    result1, result2
  }
}


/* EXERCISE 6
Write the code to print the literal value of a number x: its value must be less than 10. (ex.: if x is 1 print "one", if 5 print "five" etc.).
Then, UNCOMMENT the commented out lines.
*/

function ex6(x){
  if(x < 10){
    console.log("two")
  }
 /* WRITE YOUR CODE HERE */
 let numberAsString = x.toString()
 return numberAsString
}

console.log(ex6(2)) // expected: "two"

/* EXERCISE 7
Return the largest between two numbers a and b using a ternary operator.
Then, UNCOMMENT the commented out lines.
*/

function ex7(a, b){
  const largest = a > b ? a : b

  return largest
}

console.log(ex7(10, 20)) // expected: 20


module.exports = {
  ex1,ex2,ex3,ex4,ex5,ex6,ex7
}