function charity(input) {

    //inputs
    let days = Number(input[0]);
    let bakers = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    //prices
    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;

    let cakeSumPerDay = cakes * cakePrice;
    let wafflesSumPerDay = waffles * wafflePrice;
    let pancakesSumPerDay = pancakes * pancakePrice;

    let totalSumForDay = (cakeSumPerDay + wafflesSumPerDay + pancakesSumPerDay) * bakers;
    let totalSumFromCampaign = totalSumForDay * days;

    let charitySum = totalSumFromCampaign - (totalSumFromCampaign / 8);

    console.log(charitySum);

}
charity(["23", "8", "14", "30", "16"]);

// Checked in Judge; score = 100/100
// Solution from the explanations in the condition - more simple