/**
 * New typescript file
 */
class BasicDatatype1 {
 /**
     *
     *
     * @type {boolean}
     * @memberof BasicDatatype1
     */
    boolFlag : boolean ;
    strColor : string;
    age : number;
    anyValue : any;
    list: number[] = [1, 2, 3];
    list1: number[] = [1, 2, 3];

    /**
     * 
     */
    constructor() {
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
    public showValues() : void {
        console.log("Default boolean value : "+this.boolFlag);
        console.log("Color value : "+this.strColor);
        console.log("Age :::"+this.age);
        console.log("Any type value : "+this.anyValue);
        console.log("All list numbers : "+this.list);
        console.log("All list1 numbers : "+this.list1);
    }
}

let baseType1 = new BasicDatatype1();
baseType1.showValues();