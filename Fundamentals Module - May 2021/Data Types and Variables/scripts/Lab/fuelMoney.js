function fuelMoney(distance, passangers, price) {
    //7 / 100 fuel consumption;

    let totalFuel = (distance / 100) * (7 + (passangers * 0.100));
    //let fuelIncreased = totalFuel + (passangers * 0.100);
    let moneyForFuel = price * totalFuel;

    console.log(`Needed money for that trip is ${moneyForFuel.toFixed(2)}lv.`);

}
fuelMoney(260, 9, 2.49);
console.log('---------------');
fuelMoney(90, 14, 2.88);

// tested in Judge = 100/100;