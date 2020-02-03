
class Student {
    //fields
    classes = []; //this can change dynamicly
    constructor(name1){
        this.name = name1; //this is apparently static
        //this.classes = [];
    }
    addClass(studentClass) {
        this.classes.push(studentClass);
    }
}

const student = new Student('Angelica');  
student.addClass('sword_fighting');
student.addClass('Horseback_riding');
console.log(student.name);
console.log(student.classes);

//WE ARE ASSUMED TO KNOW WHAT THE DIFFECE IS between CONST and LET


module.exports = Student;