class Employee {

    firstName: string;
    lastName: string;

    constructor( public fName: string, public lName: string ) {
        this.firstName = fName;
        this.lastName = lName;
    }

}

function showEmp( emp: Employee ) {
    return "Hello, " + emp.firstName + " " + emp.lastName;
}

let emp = new Employee("Deb","Mishra");

document.body.innerHTML = showEmp(emp);
