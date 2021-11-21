let nums = [1, 3, 5, 6, 2, 0, 8, 9, 7, 4];

insertionSort(nums);
console.log(nums);

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 외부 루프
    let index = i;
    while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
      // 내부 루프
      let temp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = temp;
      index--;
    }
  }
}

/**
 *  삽입 정렬의 복잡도는 입력 자료의 구성에 따라서 달라진다.
 *
 * 먼저 입력 자료가 이미 정렬되어 있는 경우(ex: [1,2,3,4,5])
 * 외부 루프는 n - 1 번 실행되고 각 내부 루프는 실행되지 않으므로
 * O(n - 1) = O(n)이다.
 *
 * 입력 자료가 반대로 정렬되어 있는 경우(ex: [5,4,3,2,1])
 * 외부 루프는 n - 1 번 실행되고 각 내부 루프는 1 + 2 + ... + (n - 1) 번 실행된다.
 * 그래서 즉 (n - 1) + n(n - 1)/2 = O(n²)이다
 *
 * 삽입 정렬은 비교적 많은 레코드들의 이동이 일어난다.
 * 결과적으로 레코드 양이 많을수록 삽입 정렬을 사용하는 것은 적합하지 않다.
 * 반면에 삽입 정렬은 안정한 정렬 밥법으로서 레코드의 수가 적을 경우 알고리즘 자체가 매우 간단한 것이 장점이 될 수 있다.
 * 또한 삽입정렬은 대부분의 레코드가 이미 정렬되어 있는 경우에 매우 효율적일 수 있다.
 *  */
