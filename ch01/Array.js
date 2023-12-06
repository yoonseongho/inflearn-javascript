/** 배열
 * 순서가 있는 데이터 컬렉션을 저장할 때 사용
 * 데이터 컬렉션이 논리적으로 정의된 규칙에 의해 나열된 것
 * -> 여러개의 데이터를 순서와 함께 저장하는 창고
 * 배열 정의: []
 */

/* ["Jason", "Alice", "Chris", "Jane", "Tom"]: 이름들을 요소(Element)라고 한다. 배열의 각 요소은 인덱스(index)라고 한다
 * 인덱스(index): 해당 요소의 위치값을 의미하는 숫자이고 항상 0부터 시작을 한다.
 * 항상 0부터 시작을 하고 그 뒤에 오는 요소들은 1씩 더해져 가면서 인덱스 값을 가지게 됨
 * 순서에 맞게 index를 통해 각 요소에 접근 가능
 */
let ranking = ["Jason", "Alice", "Chris", "Jane", "Tom"];
console.log(ranking[0]); // Jason
console.log(ranking[1]); // Alice
console.log(ranking[2]); // Chris
console.log(ranking[3]); // Jane
console.log(ranking[4]); // Tom