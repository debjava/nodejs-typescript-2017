class StringRelated {
    showString() {
        let strValue = "This is a String";
        let str2 = strValue.charAt(5);
        console.log("Char At 5 : ", str2);
        let str1 = "Hello world!";
        let str3 = str1.slice(1, 7);
        console.log("Sliced value : ", str3);
        //Split a string
        let str4 = "Karnataka-Bangalore";
        let strValues = str4.split("-");
        for (let i = 0; i < strValues.length; i++) {
            console.log("Value at ", i, strValues[i]);
        }
    }
    showSubStringRelated() {
        let str = "Apples are round, and apples are juicy.";
        let str1 = str.substr(1, 2);
        console.log("Sub string using substr : ", str1);
        str1 = str.substring(1, 2);
        console.log("Sub string using substring : ", str1);
    }
}
let sObj = new StringRelated();
sObj.showString();
sObj.showSubStringRelated();
