const myArray = [11, 3, 23, 7];

// Simplest scenario
// No reindexing of other items
// aka O(1) operations
// Actions are done at end of array
myArray.push(17);
myArray.pop();

// Every item must be reindexed
// aka O(n) operations
// Actions are done at beginning of array
myArray.shift();
myArray.unshift(11);

// Also O(n) because of worst case, aka 0 index
myArray.splice(1, 0, "Hi");

// Also O(n) if by value
myArray.find((v) => v === 7);

// O(1) if by index
myArray[3];