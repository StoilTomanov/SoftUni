function convertToJson(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let parsed = JSON.stringify(person);
    console.log(parsed);

}
convertToJson('George', 'Jones', 'Brown')