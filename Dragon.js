class Dragon {
    //fields
    color = []; //this can change dynamicly
    constructor(name){
        this.name = name; //this is apparently static
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

