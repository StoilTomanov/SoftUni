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

    //sum that is collected for the cakes, waffles and pancakes for one day
    let cakeSum = cakes * cakePrice;
    let waffleSum = waffles * wafflePrice;
    let pancakeSum = pancakes * pancakePrice

    //total sum that will be collected for the days of campaign
    let cakesQuantityForCapmaign = cakeSum * bakers;
    let cakeTotalSum = days * cakesQuantityForCapmaign;
    let wafflesQuantityForCampaign = waffleSum * bakers;
    let waffleTotalSum = days * wafflesQuantityForCampaign;
    let pancakesQuantityForCampaign = pancakeSum * bakers;
    let pancakeTotalSum = days * pancakesQuantityForCampaign;

    let totalSumFromCampaign = cakeTotalSum + waffleTotalSum + pancakeTotalSum;

    // 1/8 from the total sum collected for expences
    let oneEightFromCampaign = totalSumFromCampaign / 8;

    //total sum for charity
    let totalSumForCharity = totalSumFromCampaign - oneEightFromCampaign;

    console.log(totalSumForCharity);

}
charity(["23", "8", "14", "30", "16"]);

// Checked in Judge; score = 100/100
// My original solution