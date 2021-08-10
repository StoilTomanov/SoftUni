function inventory(arr) {

    let heroObject = {};
    let listOfHeroes = [];

    for (let element of arr) {
        let [heroName, heroLevel, item] = element.split(' / ');
        let itemsToSort = item
            .split(', ')
            .sort((a, b) => a.localeCompare(b))
            .join(', ')
        heroObject = {
            Hero: heroName,
            level: Number(heroLevel),
            items: itemsToSort,
        }
        listOfHeroes.push(heroObject);
    }

    listOfHeroes.sort((a, b) => a.level - b.level)

    for (let index of listOfHeroes) {
        console.log(`Hero: ${index.Hero}`);
        console.log(`level => ${index.level}`);
        console.log(`items => ${index.items}`);
    }

    console.log();
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);