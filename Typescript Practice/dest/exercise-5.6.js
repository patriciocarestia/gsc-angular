"use strict";
class Student {
    constructor(name) {
        this.name = name;
        this.school = 'Harry Herpson High School';
    }
    ;
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${student.school}`);
    }
}
const student = new Student('Morty');
console.log(student.school);
student.introduction();
