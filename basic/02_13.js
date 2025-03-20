let obj = { result: 0 };

// JavaScript의 this 바인딩 문제
// 일반 함수는 호출될 때 this가 전역 객체를 참조함.
// obj.add = function (x, y) {
//   function inner() {
//     this.result = x + y; // 여기의 this가 지역변수가 아니라
//     // 전역 변수로 쓰임!!!!!
//   }
//   inner();
// };

// obj.add(3, 4);
// console.log(obj);
// console.log(obj.result);
// console.log(result);

//1. 화살표 함수
//화살표함수를 써서 inner 함수를 쓰는 방법.
// obj.add = function (x, y) {
//   const inner = () => {
//     this.result = x + y; // 여기의 this가 지역변수가 아니라
//     // 전역 변수로 쓰임!!!!!
//   };
//   inner();
// };

// obj.add(3, 4);
// console.log(obj);
// console.log(obj.result);
// console.log(result);

//2.bind() 메소드 사용으로
// 함수의 this 값을 특정 객체에 영구적으로 바인딩한 새로운 함수 반환
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner.bind(this); // 위치가 밖의 스코프에 해당함. 그래서 object이 범위안에 있음. 그래서 저
  //this가 object를 지칭하게됨!
};

obj.add(3, 4);
console.log(obj);
console.log(obj.result);
