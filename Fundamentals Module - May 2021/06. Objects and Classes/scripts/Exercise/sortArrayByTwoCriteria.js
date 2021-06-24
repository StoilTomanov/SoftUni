function sortArrayByTwoCriteria(elements) {
    /* 
    sort by:
    1. their length in ascending order (primary criteria)
    2. their alphabetical value in ascending order (secondary criteria)
     - case-insensitive
    */

    elements.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria
    })

    console.log(elements.join('\n'));
}
sortArrayByTwoCriteria(["alpha", "beta", "gamma"]);
sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);