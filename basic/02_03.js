const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1);

// p1 = { name: 'lee', age: 25 };
// p1의 주소를 바꾸려고 시도하는거니까 오류난다!

//constant 일때 속성 변경은 가능하지만
// 객체를 재할당하는 것은 불가능.
