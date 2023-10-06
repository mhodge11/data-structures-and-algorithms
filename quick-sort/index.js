// Big O
// Space complexity: O(1)
// Best case Time complexity: O(n * log n)
// Worst case Time complexity: O(n^2) (sorted or almost sorted data)

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }

    swap(array, pivotIndex, swapIndex);

    return swapIndex;
  }
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}
