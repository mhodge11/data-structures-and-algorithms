// Can't be simplified further than O(a + b)

function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }

  for (let j = 0; j < b; j++) {
    console.log(j);
  }
}

// Can't be simplified further than O(a * b)

function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j);
    }
  }
}
