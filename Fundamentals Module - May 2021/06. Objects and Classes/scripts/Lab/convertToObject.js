function convertToObject(json) {
    let parsed = JSON.parse(json);

    for (let key of Object.keys(parsed)) {
        console.log(`${key}: ${parsed[key]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');