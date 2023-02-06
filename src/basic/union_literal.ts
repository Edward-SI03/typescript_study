// 유니온 타입
// 타입을 여러개 지정하고 싶을땐 | 을 사용하여 여러개의 타입을 가질 수 있게 해줌
// 단, 런타임 환경에서 타입에 따라 에러가 발생 할 수 있기 때문에 typeof를 통해 다른 로직을 구현
// 사용자 지정 타입으로 타입을 정의하고 사용도 가능
function combine(input1: combinable, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAge = combine(30, 26);
console.log(combineAge);

const combinename = combine("jin", "yeop");
console.log(combinename);

// 리터럴 타입
// 타입이 숫자, 문자열 같은 타입이 아닌 정확한 값을 가지는 타입
let n1 = 1; // 숫자타입
const n2 = 1; // 무조건 1이라는 리터럴 타입

// 사용자 지정 타입
type combinable = number | string;
// ex
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };
