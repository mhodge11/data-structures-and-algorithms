// No pointers
// num1 = 10, num2 still = 5

let num1 = 5;
let num2 = num1;

num1 = 10;

// Pointers

// FIRST CASE
// obj2 points to spot in memory of obj1
// obj1.value = 22, obj2.value = 22

// SECOND CASE
// obj2 and obj1 point to obj3's spot in memory
// JS cleans up memory of original obj1 through "Garbage Collection"

let obj1 = {
  value: 11,
};
let obj2 = obj1;

obj1.value = 22;

let obj3 = {
  value: 57,
};

obj2 = obj3;
obj1 = obj2;
