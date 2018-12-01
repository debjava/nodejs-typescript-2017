import { StringUtil } from "./StringUtil";

class ConditionsTest {

    checkNum(): void {
        let num = 7;
        if (num > 0)
            console.log("Number is greater : ", num);
    }

    private checkCaseInsensitive     (name: string): void {  
        if (   name === "Hati") {
            console.log("Name is Hati");
        }
        else if (name.toLowerCase() === "DD".toLowerCase()) {
            //This is a comment
            console.log("Real name : ", name);
        }
    }

    checkOther(): void {
        let name = "DD";
        if (name === "DD") {
            console.log("Actually name is " + name);
        }
        this.checkCaseInsensitive(name);
    }

    public bothStringsEquals(): void {
        let checkFlag = StringUtil.equals("Hati", "hati");
        console.log("CheckFlag : ", checkFlag);
    }
}

let obj = new ConditionsTest();
obj.checkNum();
obj.checkOther();
obj.bothStringsEquals();