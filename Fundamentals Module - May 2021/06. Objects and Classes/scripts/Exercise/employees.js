function employees(employeeList) {

    for (let employee of employeeList) {
        let empDataObj = {
            name: employee,
            personalNumber: employee.length,
        }
        console.log(`Name: ${empDataObj.name} -- Personal Number: ${empDataObj.personalNumber}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);