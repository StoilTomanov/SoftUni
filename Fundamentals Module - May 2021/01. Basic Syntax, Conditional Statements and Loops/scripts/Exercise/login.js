function login(arrOfString) {
    // declare the username and reverse it to get the password
    let username = arrOfString[0];
    let password = username.split('').reverse().join('');
    let counter = 0;

    // iterate throug the array of strings 
    for (let i = 1; i < arrOfString.length; i++) {
        if (password !== arrOfString[i]) {
            counter++;
            // the fourth incorrect password will end the program
            if (counter === 4) {
                return console.log(`User ${username} blocked!`);
            }
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
login(['momo', 'omom']);

// tested in Judge = 100/100;