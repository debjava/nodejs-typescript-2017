"use strict";
/**
 * This class provides the use of void type function.
 */
//import * as load from 'loadash';
Object.defineProperty(exports, "__esModule", { value: true });
const load = require("lodash");
class Test1 {
    show() {
        console.log("This is my first class for demo");
    }
}
exports.Test1 = Test1;
var test1 = new Test1();
test1.show();
console.log(load.toUpper('Hello, world !'));



