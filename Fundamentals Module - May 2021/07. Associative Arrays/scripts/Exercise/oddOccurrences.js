function oddOccurrences(string) {
    // convert string to lower case
    let lowerCaseString = string.toLowerCase();
    // java c# php php java php 3 c# 3 1 5 c#
    let arrayOfSting = lowerCaseString.split(' ');
    let counter = 0;
    let dataObject = {};

    // create a nested for loop so each element iterates through the string looking for a maching value
    for (let i = 0; i < arrayOfSting.length; i++) {
        // shift the current element and keep it in a variable
        let wantedElement = arrayOfSting[i];
        for (let element of arrayOfSting) {
            // if matching value is found increase the counter for the current element
            if (wantedElement === element) {
                counter++;
            } else {
                continue;
            }
        }
        if (counter % 2 === 0) { // if even skip
            counter = 0;
        } else { // if odd - insert it as a key to a new pbject
            dataObject[wantedElement] = 0;
            counter = 0
        }
    }
    let keys = '';
    for (let key in dataObject) {
        keys += key + ' ';
    }
    console.log(keys);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')