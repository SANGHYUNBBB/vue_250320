//배열 구조 분해 할당

const animals = ['bear', 'tiger', 'giraffe', 'elephant', 'lion'];

//1. 기본적인 구조분해할당
// const [ani1, ani2, ani3] = animals;
// console.log(ani1, ani2, ani3);

// //2. 일부 요소 건너뛰기
// const [, , ani1, ani2, ani3] = animals;
// console.log(ani1, ani2, ani3);

//3. 기본값 설정 추가로 설정이 된다!!!
// const zoo = ['panda', 'koala'];
// const [ani1, ani2, ani3 = 'monkey', ani4 = 'penguin'] = zoo;
// console.log(ani1, ani2, ani3, ani4);

//4. 중첩된 배열 구조 분해
const nestedArray = [1, [2, 3], 4];
// const [num1, numArr, num2] = nestedArray; // 이게 안되니까
// console.log(num1,numArr,num2)
// const [num1, [num2, num3], num4] = nestedArray;
// console.log(num1, num2, num3, num4);
