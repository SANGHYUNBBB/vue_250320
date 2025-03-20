function addContact(a, b, c = '없음', d = '없음', e = '없음') {
  person = {
    name: a,
    mobile: b,
    home: c,
    address: d,
    email: e,
  };
  console.log(person);
}
addContact('홍길동', '010-222-3331');
addContact('이몽룡', '010-222-3331', '02-3422-9900', '서울시');
