function countTheWords(input) {
    let text = input[0];
    let wordCount = 0.0;

    for (let i = 0; i <= text.length; i++) {
        if (text[i] === " ") {
            wordCount += 1;
        }

    }
    wordCount++;
    if (wordCount <= 10) {
        console.log("The message was send successfully!");
    } else {
        console.log(`The message is too long to be send! Has ${wordCount} words.`);
    }
}
countTheWords(["This message has exactly eleven words. One more as it's allowed!"]);

// Checked in Judge; score = 100/100