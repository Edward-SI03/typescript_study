function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void 아무것도 반환하지 않는 타입
function printResult(num: number): void {
  console.log("Result : " + num);
}

printResult(add(5, 12)); //17
console.log(printResult(add(5, 12))); // undefined(void타입이니까 아무것도 반환 안함)

// 함수도 타입이 될 수 있음
// 화살표 함수를 통해 리턴값과, 매개변수의 타입을 정의함
// 타입을 함수로 정의하면 에러를 줄이고, 정해진 틀의 함수를 변수로 받아 사용이 가능함
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(2, 7));

// 콜백함수
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 13, (result) => {
  console.log(result);
});
