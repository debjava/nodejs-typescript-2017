"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestWithparam {
    show(name) {
        console.log("Your name : " + name);
    }
}
exports.TestWithparam = TestWithparam;
var test1 = new TestWithparam();
test1.show("John");
