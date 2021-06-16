function loadingBar(num) {
    // store the converted bars in variable
    let bars = num / 10;
    let barArray = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    let barLoad = '';
    let barCount = 0;

    // increment each bar with a loop
    for (let i = 1; i <= bars; i++) {
        barCount = i
        barLoad += '%';
        barArray.unshift('%');
        barArray.pop();
    }

    if (barCount < 10) {
        console.log(`${barCount * 10}% [${barArray.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log(`${barCount * 10}% Complete!`);
        console.log(`${barArray.join('')}`);
    }
}
loadingBar(100);

// tested in Judge = 100/100