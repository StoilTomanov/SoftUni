function buyFruit(fruit, weightInGm, pricePerKg) {

    console.log(`I need $${((weightInGm/1000) * pricePerKg).toFixed(2)} to buy ${(weightInGm/1000).toFixed(2)} kilograms ${fruit}.`);

}
buyFruit('orange', 2500, 1.80);
buyFruit('apple', 1563, 2.35);