function worldRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeter = Number(input[1]);
    let timeInSecForMeter = Number(input[2]);

    let pureTimeInSec = distanceInMeter * timeInSecForMeter;
    let delay = Math.floor(distanceInMeter / 15) * 12.5;
    let totalTime = delay + pureTimeInSec;

    if (totalTime >= recordInSec) {
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldRecord(["55555.67", "3017", "5.03"]);

// Checked in Judge; score = 100/100