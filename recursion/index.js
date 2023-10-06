// Psuedo code:
// function openGiftBox() {
//    if (isBall) return ball;
//    openGiftBox();
// }
//
// Rules:
// 1. Opening a gift box is always the same
// 2. The problem gets smaller with each instance
//
// Terminology:
// Recursive case: function calls itself
// Base case: returns success case

// CALL STACK
// Structure below:
// funcThree is at top of stack
// after it finishes, it is removed and funcTwo is at top
// etc.
function funcThree() {
  console.log("Three");
}
function funcTwo() {
  funcThree();
  console.log("Two");
}
function funcOne() {
  funcTwo();
  console.log("One");
}

// Factorial
// Example:
// 4! = 4 * 3! = 4 * 3 * 2! = 4 * 3 * 2 * 1
// 1 is the base case since 1! = 1

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
