function wordCounter(array) {
    let wordWanted = array[0].split(' ');

    let words = {};

    for (let word of wordWanted) {
        let counter = 0;
        for (let i = 1; i < array.length; i++) {
            let currentWord = array[i].trim()
            if (currentWord === word) {
                counter++;
            }
        }
        words[word] = counter;
    }
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1])

    for (let [key, value] of sortedWords) {
        console.log(`${key} - ${value}`);
    }

}
wordCounter([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])