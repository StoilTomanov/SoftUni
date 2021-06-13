function vacation(groupCount, typeOfGroup, dayOfWeek) {

    let totalStudentPrice = 0;
    let totalBusinessPrice = 0;
    let totalRegularPrice = 0;

    switch (dayOfWeek) {
        case 'Friday':
            if (typeOfGroup === 'Students') {
                if (groupCount >= 30) {
                    totalStudentPrice = groupCount * 8.45;
                    totalStudentPrice = totalStudentPrice * 0.85;
                    console.log(`Total price: ${totalStudentPrice.toFixed(2)}`);
                } else {
                    totalStudentPrice = groupCount * 8.45;
                    console.log(`Total price: ${totalStudentPrice.toFixed(2)}`);
                }
            } else if (typeOfGroup === 'Business') {
                if (groupCount >= 100) {
                    totalBusinessPrice = (groupCount - 10) * 10.90;
                    console.log(`Total price: ${totalBusinessPrice.toFixed(2)}`);
                } else {
                    totalBusinessPrice = groupCount * 10.90;
                    console.log(`Total price: ${totalBusinessPrice.toFixed(2)}`);
                }
            } else if (typeOfGroup === 'Regular') {
                if (groupCount >= 10 && groupCount <= 20) {
                    totalRegularPrice = groupCount * 15;
                    totalRegularPrice = totalRegularPrice * 0.95;
                    console.log(`Total price: ${totalRegularPrice.toFixed(2)}`);
                } else {
                    totalRegularPrice = groupCount * 15;
                    console.log(`Total price: ${totalRegularPrice.toFixed(2)}`);
                }
            }
            break;
        case 'Saturday':
            if (typeOfGroup === 'Students') {
                if (groupCount >= 30) {
                    totalStudentPrice = groupCount * 9.80;
                    totalStudentPrice = totalStudentPrice * 0.85;
                    console.log(`Total price: ${totalStudentPrice.toFixed(2)}`);
                } else {
                    totalStudentPrice = groupCount * 9.80;
                    console.log(`Total price: ${totalStudentPrice.toFixed(2)}`);
                }
            } else if (typeOfGroup === 'Business') {
                if (groupCount >= 100) {
                    totalBusinessPrice = (groupCount - 10) * 15.60;
                    console.log(`Total price: ${totalBusinessPrice.toFixed(2)}`);
                } else {
                    totalBusinessPrice = groupCount * 15.60;
                    console.log(`Total price: ${totalBusinessPrice.toFixed(2)}`);
                }
            } else if (typeOfGroup === 'Regular') {
                if (groupCount >= 10 && groupCount <= 20) {
                    totalRegularPrice = groupCount * 20;
                    totalRegularPrice = totalRegularPrice * 0.95;
                    console.log(`Total price: ${totalRegularPrice.toFixed(2)}`);
                } else {
                    totalRegularPrice = groupCount * 20;
                    console.log(`Total price: ${totalRegularPrice.toFixed(2)}`);
                }
            }
            break;
        case 'Sunday':
            if (typeOfGroup === 'Students') {
                if (groupCount >= 30) {
                    totalStudentPrice = groupCount * 10.46;
                    totalStudentPrice = totalStudentPrice * 0.85;
                    console.log(`Total price: ${totalStudentPrice.toFixed(2)}`);
                } else {
                    totalStudentPrice = groupCount * 10.46;
                    console.log(`Total price: ${totalStudentPrice.toFixed(2)}`);
                }
            } else if (typeOfGroup === 'Business') {
                if (groupCount >= 100) {
                    totalBusinessPrice = (groupCount - 10) * 16;
                    console.log(`Total price: ${totalBusinessPrice.toFixed(2)}`);
                } else {
                    totalBusinessPrice = groupCount * 16;
                    console.log(`Total price: ${totalBusinessPrice.toFixed(2)}`);
                }
            } else if (typeOfGroup === 'Regular') {
                if (groupCount >= 10 && groupCount <= 20) {
                    totalRegularPrice = groupCount * 22.50;
                    totalRegularPrice = totalRegularPrice * 0.95;
                    console.log(`Total price: ${totalRegularPrice.toFixed(2)}`);
                } else {
                    totalRegularPrice = groupCount * 22.50;
                    console.log(`Total price: ${totalRegularPrice.toFixed(2)}`);
                }
            }
            break;
        default:
            console.log('Invalid input!');
    }
}
vacation(30, "Students", "Sunday");
console.log('----------------');
vacation(40, "Regular", "Saturday");
console.log('----------------');

// tested in Judge = 100/100;