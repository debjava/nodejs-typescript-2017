export class TestWithparam {
  
  public show( name : string): void {
    console.log("Your name : "+name);
  }
  
}

var test1 = new TestWithparam();
test1.show("John");