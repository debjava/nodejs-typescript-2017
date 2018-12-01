/**
 * New typescript file
 */
class BasicDatatype1 {
    /**
     *
     */
    constructor() {
        this.list = [1, 2, 3];
        this.list1 = [1, 2, 3];
        this.boolFlag = false;
        this.strColor = "Green";
        this.age = 23;
        this.anyValue = "Some kinda value";
    }
    /**
     *
     *
     * @memberof BasicDatatype1
     */
    showValues() {
        console.log("Default boolean value : " + this.boolFlag);
        console.log("Color value : " + this.strColor);
        console.log("Age :::" + this.age);
        console.log("Any type value : " + this.anyValue);
        console.log("All list numbers : " + this.list);
        console.log("All list1 numbers : " + this.list1);
    }
}
let baseType1 = new BasicDatatype1();
baseType1.showValues();
