function printArray(arrOfStr, delimiter) {
    const output = arrOfStr.join(delimiter);

    console.log(output);

}
printArray([
        'One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-');
printArray([
        'How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_');