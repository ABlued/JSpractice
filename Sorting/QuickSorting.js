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

// 퀵 정렬은 대개의 경우 매우 좋은 성능을 보여준다.
// 퀵 정렬 또한 합병 정렬과 마찬가지로 n개의 원소를 가지는 리스트가 n/2, n/4, n/8... n/2^k의 크기로 나눠지고 n/2^k = 1이 될때까지 나눠지니
// k = log₂N 번 만큼 걸리게 된다. 또한 각각의 분할마다 평균 n번의 비교가 이루어지니 총 시간복잡도는 O(Nlog₂N) = O(NlogN)이다.
// 그러나 퀵정렬의 최악의 경우가 존재한다. 그것은 리스트가 계속 불균형하게 나누어지는 것이다.
// 이런 경우 퀵 정렬의 분할 개수는 n이 되고, 한번의 분할에서 평균 n번 정도의 비교 연산이 이루어지므로 O(n²)이 된다.

// 최악의 경우는 다음과 같다.
/**
 * (1 2 3 4 5 6 7 8 9)
 * 1 (2 3 4 5 6 7 8 9)
 * 1 2 (3 4 5 6 7 8 9)
 * 1 2 3 (4 5 6 7 8 9)
 * ...
 * 1 2 3 4 5 6 7 8 9
 */

// 하지만 이러한 경우를 제외하면은 다른  O(NlogN) 정렬 알고리즘에 비해 빠른 편이다.
// 왜냐하면 퀵정렬은 불필요한 데이터의 이동을 줄이고 먼 거리의 데이터를 교환할 뿐만 아니라, 한번 결정된 피벗들이 추후 연산에서 제외되는 특성이 있기 때문이다.

// 이처럼 퀵정렬은 속도가 빠르고 추가 메모리 공간을 필요로 하지 않는 등의 장점이 있는 반면에 앞의 예시처럼 이미 정렬된 리스트에 대해서는 오히려 수행시간이 더 많이 걸리는 단점도 가진다.
// 그래서 퀵정렬을 이용했을 때 피벗을 맨 왼쪽 데이터를 이용하기보다 중앙 부분을 분할할 수 있는 데이터를 선택한다. 많이 사용되는 방법은 리스트 내의 중간값(median) 인덱스의 피벗을 선택하는 것이다.
