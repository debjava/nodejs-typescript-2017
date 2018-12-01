interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

}

let ip: IPerson = new Person("John","Abraham");
let fullName: string = ip.getFullName();
console.log("Full Name of the person : ",fullName);