function poundsToDollars(pounds) {

    let fixedRate = 1.31;
    let dollars = pounds * fixedRate

    console.log(dollars.toFixed(3));

}
poundsToDollars(80);
poundsToDollars(39);

// tested in Judge = 100/100