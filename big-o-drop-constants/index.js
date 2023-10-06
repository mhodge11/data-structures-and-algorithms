// code runs n + n times
// aka O(2n)
// drop constants and just call it O(n)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems(3);
