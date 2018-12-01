/**
 * This class provides the use of void type function.
 */
//import * as load from 'loadash';

import * as load from "lodash";

export class Test1 {
  
  public show() : void {
    console.log("This is my first class for demo");
  }
}

var test1 = new Test1();
test1.show();
console.log(load.toUpper('Hello, world !'));






