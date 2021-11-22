let nums = [1, 3, 5, 6, 2, 0, 8, 9, 7, 4];

selectionSort(nums);
console.log(nums);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 외부 루프
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 내부 루프
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

// 선택 정렬의 성능을 계산해보자
// 먼저 외부 루프는 n - 1 번 실행되고 내부 루프는 (n - 1) - i 번 반복될 것이다.
// 데이터가 정순이든 역순이든 어떤 형태든 데이터의 길이가 똑같으면 외부 루프와 내부 루프의 반복되는 횟수는 같다.
// 그러므로 (n - 1) + (n - 2) + ... + 1 = n(n - 1)/2 = O(n²)이다.

// 선택 정렬은 O(n²)이라는 꽤 높은 시간복잡도를 갖는 단점이 있지만 자료 이동 횟수가 미리 결정되어있고 메모리가 크게 들지 않는다는 장점도 갖고 있다.
