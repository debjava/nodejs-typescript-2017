"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * New typescript file
 */
class Employee {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        //this.show();
    }
    show() {
        console.log('Age :::' + this.age);
        console.log('Name :::' + this.name);
    }
}
exports.Employee = Employee;
