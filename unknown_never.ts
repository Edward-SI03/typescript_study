// 알수 없는 타입
// 어떤값이든 저장 가능
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "jin";
// userName은 문자열만 받는데 unknown을 받을 수 없음
// userName은 any는 받을 수 있음(유연하니까)
// userName = userInput; // 에러 발생

// unknown이지만, 문자열인지 검증을 거치고 나면 userName이 받을 수 있음(문자열로 검증을 했으니까)
if (typeof userInput === "string") {
  userName = userInput;
}
// unknown이 any 타입보다는 좋지만, 타입을 알 수 있다면,
// string | number 같은 유니온타입으로라도 정의해주는것이 좋음

// 절대 타입
// 에러를 발생시키는 것 자체가 스크립트와 충돌하기 때문에 아무것도 반환하지 않음
// void랑 비슷하게 아무것도 반환하지 않지만,
// 스크립트와 충돌로인해 아무것도 반환하지 않는다는 것을 명시할 수 있으므로 좀더 구체적인 특징을 가지고 있다.
function generateError(msg: string, code: number): never {
  throw { errMsg: msg, errCode: code };
}

generateError("에러발생", 500);
