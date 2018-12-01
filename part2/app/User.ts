import { JsonObject, JsonProperty, JsonConverter, JsonConvert } from "json2typescript";
// @JsonObject("User")
export class User {

    @JsonProperty("_name",String)
    private _name: string;
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    @JsonProperty("_age",Number)
    private _age: Number;

    public get age(): Number {
        return this._age;
    }
    public set age(value: Number) {
        this._age = value;
    }

    doSomething(): void {
        let myuser = new User();
        myuser._name = "DD";
        myuser._age = 23;
        let jsonStr = JSON.stringify(myuser);
        console.log(jsonStr);
    }

    toUserFromJson(jsonStr: string): void {
        let jsonConvert: JsonConvert = new JsonConvert();
        console.log("---->",jsonStr);
        let jsonObj: object = JSON.parse(jsonStr);
        console.log("=====>",jsonObj);
        let user: User = jsonConvert.deserializeObject(jsonObj, User);
        console.log("user ---->: ",user);

        let myuser = new User();
        myuser._name = "DD";
        myuser._age = 23;
        console.log("user1 : ",myuser);
        let obj1: string = jsonConvert.serializeObject(myuser);
        console.log(obj1);

    }

}

let user1 = new User();
user1.doSomething();
let jsonStr = "{\"_name\":\"DD\",\"_age\":27}";
user1.toUserFromJson(jsonStr);


