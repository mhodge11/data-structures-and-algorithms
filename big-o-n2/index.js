// runs n * n times
// even if n * n * n, still written as n^2

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

logItems(10);
