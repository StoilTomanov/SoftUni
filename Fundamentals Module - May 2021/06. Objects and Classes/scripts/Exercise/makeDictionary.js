function makeDictionary(array) {
    // Term: ${term} => Definition: ${definition}
    let jsonToObject = {};
    let mainObj = {};

    // sort alphabetically the array by its objects keys
    array.sort()

    // iterate through the array of strings and convert from json to object
    for (let string of array) {
        jsonToObject = JSON.parse(string);
        Object.assign(mainObj, jsonToObject);
    }

    let entriesOfObj = Object.entries(mainObj)

    for (let i = 0; i < entriesOfObj.length; i++) {
        console.log(`Term: ${entriesOfObj[i][0]} => Definition: ${entriesOfObj[i][1]}`);
    }

}
makeDictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

]);