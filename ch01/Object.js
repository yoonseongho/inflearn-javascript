/** 객체 (Object) */

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