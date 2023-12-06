/* 변수의 대한 js */
/** 변수명 주의사항
 * 변수명은 동사가 아닌 명사로 해야 됨
 * 숫자를 사용할 수는 있으나 가장 첫 글자가 숫자여서는 안됨
 * 예약어를 선언하면 error가 발생
 * 프로그램 변수에서는 공백이 허용하지 않는다
 * camelCase: 첫 단어는 소문자로하고 이후에 나타는 단어의 첫 글자를 대문자로 입력해야한다
 * snake_case: 띄어쓰기 대신 언더바(_)로 구분
 * PascalCase: 첫글자도 대문자, 띄어쓰기 대신 대문자로 구분
 */

/** 변수 선언
 * 1. 원하는 이름으로 변수 선언
 * 2. 이름 => 변수명
 * 3. 키워드는 var, let, const
 */

/** 데이터 할당
 * 1. '=' 할당 연산자
 * 2. 어떠한 데이터든 할당 가능
 */

/* let - 재할당 => 이미 데이터가 할당되어 있는 변수에 다시 할당 */
/* let => 재할당 O, 재선언 X */
let box;
// let box; /* error */

box = 1;
console.log(box);

box = 5;
console.log(box);

/* const => 상수, 변수, 키워드는 반드시 선언과 할당이 동시에 이루어져야 함 */
/* const => 재할당 X, 재선언 X */
const word = 'abc';
// const word = 'abc'; /* error */
console.log(word);

/* var => 재할당 O, 재선언 O */
var uniqueWord = 'unique';
var uniqueWord = 'uniqueWord';
console.log(uniqueWord);