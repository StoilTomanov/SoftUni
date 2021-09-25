function listOfNames(names) {
    let li = 0;
    names.sort((a, b) => a.localeCompare(b));

    for (let name of names) {
        li++;
        console.log(`${li}.${name}`);
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"]);