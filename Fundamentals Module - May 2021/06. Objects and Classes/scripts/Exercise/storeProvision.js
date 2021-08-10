function storeProvision(currentStock, orderedStock) {

    let unmatchedProducts = [];
    let unmatchedQuantity = [];
    let counterForMissed = 0;


    for (let i = 0; i < currentStock.length; i += 2) {

        orderedStock:

            for (let j = 0; j < orderedStock.length; j += 2) {

            if (orderedStock.includes(currentStock[i])) {
                let indexOfProduct = orderedStock.indexOf(currentStock[i]);
                let stockObj = {
                    product: currentStock[i],
                    quantity: orderedStock[i + 1],
                }
                stockObj.quantity = Number(orderedStock[indexOfProduct + 1]) + Number(currentStock[i + 1]);
                console.log(`${stockObj.product} -> ${stockObj.quantity}`);
                counterForMissed++;
                break orderedStock;

            } else if (!orderedStock.includes(currentStock[i])) {
                let indexOfMissedProduct = orderedStock.indexOf(orderedStock[i - counterForMissed]);
                let indexOfMissedQuantity = orderedStock.indexOf(orderedStock[i - counterForMissed + 1]);
                let stockObj = {
                    product: currentStock[i],
                    quantity: currentStock[i + 1],
                }
                console.log(`${stockObj.product} -> ${stockObj.quantity}`);
                unmatchedProducts.push(orderedStock[indexOfMissedProduct]);
                unmatchedQuantity.push(orderedStock[indexOfMissedQuantity]);
                break orderedStock;
            }


        }
    }

    for (let i = 0; i < unmatchedProducts.length; i++) {
        let stockObj = {
            product: unmatchedProducts[i],
            quantity: Number(unmatchedQuantity[i]),
        }
        console.log(`${stockObj.product} -> ${stockObj.quantity}`);
    }

}
storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],

    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);