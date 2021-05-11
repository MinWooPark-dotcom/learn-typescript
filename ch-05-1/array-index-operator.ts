//! 인덱스 연산자: 배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 때 인덱스 연산자(index operator)[인덱스] 사용
const numbers: number[] = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index]; // 인덱스 연산자
  console.log(item);
}
