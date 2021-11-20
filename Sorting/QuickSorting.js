function divide(array, left, right, pivot) {
  console.log(
    `array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`
  );
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    // 서로 바꿔야할 수가 존재하는 인덱스까지 찾은 후
    if (left <= right) {
      let swap = array[left];
      array[left] = array[right];
      array[right] = swap;
      left++;
      right--;
    }
    // 바꿔야하는 인덱스를 서로 바꾼다.
  }
  return left;
}

function stableQuickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  stableQuickSort(array, left, partition - 1);
  stableQuickSort(array, partition, right);

  return array;
}

const sorted = stableQuickSort([5, 3, 8, 4, 5, 1, 6, 2, 7]);
console.log(sorted);
