/**
 * New typescript file
 */
export class Employee {

  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;

    //this.show();

  }

  public show(): void {
    console.log('Age :::' + this.age);
    console.log('Name :::' + this.name);
  }



}


