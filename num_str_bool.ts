console.log("hi!!");

// tsc를 사용하면 잘못된 타입의 데이터가 사용되거나 전달되는지 탐지할 수 있으므로 예기치 않은 런타임 오류를 방지할 수 있음

// 매개변수에 타입을 지정해줌(tsc의 원시 타입은 소문자)
function add(n1: number, n2: number, bool1: boolean, text1: string) {
  let result = n1 + n2;
  if (bool1) return console.log(text1 + result);
  return console.log("false");
}

// 매개변수에 들어가는 값의 타입이 맞지 않으면 런타임 환경 전 컴파일 시 에러를 확인 할 수 있음
const number1 = 5;
const number2 = 2.8;
const boolean1 = true;
const boolean2 = false;
const string1 = "result is ";

add(number1, number2, boolean1, string1);

// 변수 설정시 타입을 지정해주거나, 설정 값의 타입을 추론하여 타입이 정해짐
// 이후 변수 재할당시 타입이 맞지 않으면 에러 발생
let text: string;
// text = 8;
let text2 = "hi"; // 타입 추론
// text2 = 9;
