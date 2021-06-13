function foreignLanguages(str) {
    let country = str;

    if (country === 'England' || country === 'USA') {
        console.log('English');
    } else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }

}
//foreignLanguages('USA');
//foreignLanguages('Spain');
foreignLanguages('Germany');

// tested in Judge = 100/100;