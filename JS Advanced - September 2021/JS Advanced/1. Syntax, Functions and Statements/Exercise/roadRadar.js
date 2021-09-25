function roadRadar(speed, area) {

    const areaObj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    if (speed <= areaObj[area]) {
        console.log(`Driving ${speed} km/h in a ${areaObj[area]} zone`);
    } else {
        let difference = speed - areaObj[area];
        let status = '';
        if (difference <= 20) { // speeding
            status = 'speeding';
        } else if (difference <= 40) { // excessive speeding
            status = 'excessive speeding';
        } else { // reckless driving
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaObj[area]} - ${status}`);

    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');