// 보통 객체는 타입 추론으로 타입을 정의를 함
// const person = {
//   name: "jin",
//   age: 30,
// };

// 열거형
enum Role {
  admin, // admin = 5 시 숫자, 문자열을 지정도 가능(숫자로 하면 5,6,7 순서로 배정됨)
  read,
  author,
}

// 단, 튜플을 정의한다면 객체 타입을 정의하고 객체를 정의함
const person: {
  name: string;
  age: number;
  hobbies: string[]; // 문자형 배열
  role: [number, string]; // 튜플(튜플은 []안에 타입 정의하여 타입 고정, 요소 수에 때라 갯수 고정)
  role2: Role; // 열거형
} = {
  name: "jin",
  age: 30,
  hobbies: ["sport", "cooking"], // 배열안에 문자열만들어가서 요소들은 문자열인걸 앎
  role: [3, "singer"],
  role2: Role.admin,
};

// console.log(person.name);

// for (let hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   //   console.log(hobby.map())  // hobby가 문자열인걸 알고 있으니까 map을 사용못하는걸 앎
// }

// 튜플 : 길이와 타입이 고정된 배열
// console.log(person.role);
// person.role[1] = 2; // 타입을 고정하여 타입이 다르면 안됨
// person.role = [1, "2", 3]; // 길이를 고정하여 추가 안됨
// person.role.push("22"); // 단 튜플이어도 push는 허용되는 아이러니가 있음
// console.log(person.role);

// if (person.role2 === Role.admin) console.log("is admin");
