function fishTank(input) {
    let lenghtCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = lenghtCm * widthCm * heightCm;

    let totalVolume = aquariumVolume * 0.001;

    let percentConvert = percent * 0.01;

    let litresNeeded = totalVolume * (1 - percentConvert);

    console.log(litresNeeded);

}
aquarium(["85", "75", "47", "17"]);

// Checked in Judge; score = 100/100