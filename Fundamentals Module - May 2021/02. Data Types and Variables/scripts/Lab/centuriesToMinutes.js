function centuriesToMinutes(centuries) {

    let oneYear = 365.2422;
    let years = Math.trunc(100 * centuries);
    let days = Math.trunc(years * oneYear);
    let hours = Math.trunc(days * 24);
    let minutes = Math.trunc(hours * 60);

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centuriesToMinutes(1);
console.log('---------------------');
centuriesToMinutes(5);

// tested in Judge = 100/100;