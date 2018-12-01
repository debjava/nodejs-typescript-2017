var Employee = /** @class */ (function () {
    function Employee(fName, lName) {
        this.fName = fName;
        this.lName = lName;
        this.firstName = fName;
        this.lastName = lName;
    }
    return Employee;
}());
function showEmp(emp) {
    return "Hello, " + emp.firstName + " " + emp.lastName;
}
var emp = new Employee("Deb", "Mishra");
document.body.innerHTML = showEmp(emp);
