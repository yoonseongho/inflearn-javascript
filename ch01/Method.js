/** Property
 * 데이터 타입마다 가지고 있는 고유한 속성들
 */

/** 배열 메서드
 * 1. push() -> 데이터 추가
 * 2. pop() -> 데이터 삭제
 * 3. indexOf() -> index 조회
 * 4. includes() -> 포함 여부 확인
 */

/** Array.length
 * 특정 배열의 길이를 나타내는 속성
 * 길이 => 배열 내 요소의 개수
 */
let ranking = ["Jason", "Alice", "Chris", "Jane", "Tom"];
console.log(ranking.length); // 5

/** Method
 * 해당 데이터가 특정한 동작, 데이터를 추가허가나 삭제하거나 데이터를 분류하는 등의 다양한 기능을 담은 명령
 */

/** 배열(Array) Method
 * push() -> Array.push():  배열의 가장 뒤에 데이터를 추가해주는 Method
 * pop() -> Array.pop(): 배열의 가장 끝에 있는 데이터를 제거하는 Method
 * indexOf() -> Array.indexOf(): 특정 배열에서 주어진 데이터의 index 값을 찾아 반환
 * includes() -> Array.includes(): 특정 배열에 주어진 데이터가 존재하는지 확인(여부에 따라 참(tue), 거짓(false) 반환)
 */
let ranking2 = ["Jason", "Alice", "Chris"];
ranking2.push("Jane"); // ranking2 배열의 가장 끝에 위치한 데이터 추가: 맨 뒤에 Jane 추가
console.log(ranking2);
console.log(ranking2.length); // push로 추가했으니 길이는 4

ranking2.pop();
console.log(ranking2); // ranking2 배열의 가장 끝에 위치한 데이터 제거: 맨 뒤에 Jane 삭제
console.log(ranking2.length); // pop으로 Jane을 삭제했으니 길이는 3

console.log(ranking2.includes("Chris"));
console.log(ranking2.indexOf("Chris"));