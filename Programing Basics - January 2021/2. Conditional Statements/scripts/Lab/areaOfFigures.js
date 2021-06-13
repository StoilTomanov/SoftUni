function area(input) {
    let type = input[0];
    if (type === "square") {
        let num = Number(input[1]);
        let area = num * num;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let numA = Number(input[1]);
        let numB = Number(input[2]);
        let area = numA * numB;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let radius = Number(input[1]);
        let area = Math.PI * (radius * radius);
        console.log(area.toFixed(3));
    } else if (type === "triangle") {
        let numA = Number(input[1]);
        let height = Number(input[2]);
        let area = (numA * height) / 2;
        console.log(area.toFixed(3));
    }
}
area(["triangle", "4.5", "20"]);

// Checked in Judge; score = 100/100