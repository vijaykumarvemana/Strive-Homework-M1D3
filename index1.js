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

let result = 12 + 29
console.log(result)

/* EXERCISE 2
Create a variable named x containing the number 12. 
*/
let variable1 = 12
console.log(variable1 - 12)

/*...function variable(){
  let x = 12
  return x
}
console.log(variable())
...*/
/* EXERCISE 3
Create a variable named name containing the string John Doe.
*/

let name = "John Doe"
console.log(name)

/* EXERCISE 4
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.

*/
/*...
let x = 12
let subtraction = x - 12 
console.log(subtraction)
...*/
function subtraction(){
  let x = 12
  let result = x - 12
  return result
}
console.log(subtraction())

/* EXERCISE 5
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
Eventually, return both result1 and result2
*/
let name1 = "john"
let name2 = "John"
let result1 = name1 === name2
let result2 = name1 === name2.toLowerCase()
console.log(result1, result2)


/* EXERCISE 6
Write the code to print the literal value of a number x: its value must be less than 10. (ex.: if x is 1 print "one", if 5 print "five" etc.).

*/
let x = 4
if(x === 0){
  console.log("zero")
}else if (x === 1){
  console.log("one")
}else if(x === 2){
  console.log("two")
}else if(x === 3){
  console.log("three")
}else if(x === 4){
  console.log("four")
}else if(x === 5){
  console.log("five")
}else if(x === 6){
  console.log("six")
}else if(x === 7){
  console.log("seven")
}else if(x === 8){
  console.log("eight")
}else if(x === 9){
  console.log("nine")
}



/* EXERCISE 7
Return the largest between two numbers a and b using a ternary operator.
*/

function largest(a, b){
  const largest = a > b ? a : b
  return largest
}
console.log(largest(10, 20)) // expected: 20


