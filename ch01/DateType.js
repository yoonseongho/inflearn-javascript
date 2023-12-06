/** 데이터 타입
 * String
 * Number
 * Boolean
 * undefined
 * null
 * symbol
 * Bigint
 * Object
 */

/** String 타입
 * 1. 따옴표로 정의("", '')
 * 2. 숫자, 알파벳, 공백 등 모드 텍스트화 가능
 */
console.log('Hello' + ' world');
console.log("Hello" + "world");

/** Number 타입
 * 1. 숫자 그대로를 입력
 * 2. 따옴표로 감싸진 숫자와 다름
 * 산술 연산자: +, -, /, *
 */
console.log(1 + 2);
console.log(3 - 1);
console.log(10 / 2);

/* 문자열과 숫자열을 더해주게 되면 문자열로 변환이 되어서 반환 됨
   더하기 연산에 문자열이 하나라도 포함되는 경우 (문자열 연결 연산자) */
console.log('a' + 1);
console.log('1' + 1);
console.log(1 + ''); /* 빈문자열도 문자열로 인식 함 */

/* NaN: not a number */
console.log('a' * 1);

/* 텍스트가 숫자로 변환이 가능한지 판단 후 숫자형으로 변환 */
console.log('2' * 2);