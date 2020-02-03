const faker = require("faker");
const Student = require("../Students.js")

console.log("message ",Student)

for(let i=0; i<10; i++){
    let student = new Student(faker.name.findName());
   
}
// console.log(student);
// console.log(students)