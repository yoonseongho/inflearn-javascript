/** 객체 (Object)
 * Object.keys(): 주어진 객체의 key만을 가져와 배열에 담아주는 메서드
 * Object.values(): 주어진 객체의 value만을 가져와 배열에 담아주는 메서드
*/

/** 객체 정의
 * 1. 중괄호를 사용해서 정의
 * 2. 내부의 요소는 프로퍼티(키 + 값)
 * 3. Dot notation, Bracket notation
 * 4. 위 두가지로 새로운 프로퍼티도 생성
 */

/** 객체 메서드
 * 1. Object.keys() -> key 모음을 배열로 (문자열로)
 * 2. Object.values() -> value 모음을 배열로 (데이터 그대로)
 */

const jsonData = {
    name: "Jason",
    age: 25,
    gender: "Male"
};

console.log(jsonData);
console.log(jsonData.name);
console.log(jsonData.age);
console.log(jsonData.gender);
console.log(jsonData["name"]);

let name = "age"
console.log(jsonData[name]); // 25

console.log(Object.keys(jsonData)); // 결과: [ 'name', 'age', 'gender' ]

let result = Object.keys(jsonData);
console.log(result); // 결과: [ 'name', 'age', 'gender' ]
console.log(result.includes("name"));
console.log(Object.values(jsonData)); // 결과: [ 'Jason', '25', 'Male' ]

jsonData.favoriteFood = ["rice", "noodle", "chicken"];
console.log(jsonData);