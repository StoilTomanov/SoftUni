function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0.0;
    let even = "even";
    let odd = "odd";

    switch (operator) {
        case "+":
            result = num1 + num2;
            operator = "+";
            if (result % 2 === 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
            }
            break;
        case "-":
            result = num1 - num2;
            operator = "-";
            if (result % 2 === 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
            }
            break;
        case "*":
            result = num1 * num2;
            operator = "*";
            if (result % 2 === 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
            }
            break;
        case "/":
            result = (num1 / num2);
            operator = "/";
            if (result !== 0 && result !== Infinity) {
                console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
            } else {
                result = Number(input[0]);
                console.log(`Cannot divide ${result} by zero`);
            }
            break;
        case "%":
            if (num2 !== 0) {
                result = num1 % num2;
                operator = "%";
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            } else {
                result = Number(input[0]);
                console.log(`Cannot divide ${result} by zero`);
            }
            break;
        default:
            console.log("Invalid input or operator!!!");
    }
}
operationsBetweenNumbers(["112", "0", "/"]);

// Checked in Judge; score = 90/100