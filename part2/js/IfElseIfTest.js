"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = require("./StringUtil");
class ConditionsTest {
    checkNum() {
        let num = 7;
        if (num > 0)
            console.log("Number is greater : ", num);
    }
    checkCaseInsensitive(name) {
        if (name === "Hati") {
            console.log("Name is Hati");
        }
        else if (name.toLowerCase() === "DD".toLowerCase()) {
            //This is a comment
            console.log("Real name : ", name);
        }
    }
    checkOther() {
        let name = "DD";
        if (name === "DD") {
            console.log("Actually name is " + name);
        }
        this.checkCaseInsensitive(name);
    }
    bothStringsEquals() {
        let checkFlag = StringUtil_1.StringUtil.equals("Hati", "hati");
        console.log("CheckFlag : ", checkFlag);
    }
}
let obj = new ConditionsTest();
obj.checkNum();
obj.checkOther();
obj.bothStringsEquals();
