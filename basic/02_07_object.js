const user = {
  name: 'Alice',
  age: 25,
  job: 'Developer',
};
// 1.객체 구조분해할당
const { age, name } = user; // 객체와 중괄호니까 키값으로 가져오는 것임. 배열은 인덱스니까 순서!
// console.log(age, name);
//2. 변수 이름 변경 (별칭지정)
const { name: userName, job: profession } = user;
console.log(userName);
console.log(profession);

//3 기본값 설정
// const { salary = 5000, age: userAge = 30 } = user;
// console.log(salary);
// console.log(userAge);

//4. 중첩된 객체 구조 분해

const person = {
  name: 'Bob',
  info: { address: 'Seoul', hobbies: ['reading', 'coding'] },
};

//구조분해할당을 통해 이름과 첫번째 취미를 추ㅠㄹ력하시오.
const {
  name: name2,
  info: {
    address,
    hobbies: [firsthobby, secondhobby],
  },
} = person;

console.log(`이름: ${name2}, 첫번째취미 : ${firsthobby}`);
