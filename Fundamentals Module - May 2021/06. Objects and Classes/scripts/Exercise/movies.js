function movies(array) {

    let counter = 0; // this will count each iteration of the first for loop

    // split each element to return an array of its words
    for (let y = 0; y < array.length; y = 0) {
        counter++
        let command = array[y].split(' ');
        let dataObj = new Map(); // using Map() as it has functionality to keep the original order of the keys/values
        // check whether the 'addMovie' is included in the array
        if (command.includes('addMovie')) {
            command.shift(command[0]);
            let currentElement = array.shift(); // this removes reach first element from the array so we dont skip an iteration in the second for loop
            let movieTitle = command.join(' ');

            // check for each element whether 'directedBy' or 'onDate' are included in the array

            for (let i = 0; i < array.length; i++) {
                if (array[i].includes(movieTitle)) {
                    dataObj.set('name', movieTitle);

                    if (array[i].includes('directedBy')) {

                        let currentList = array[i].split(' ');
                        let indexOfCommand = currentList.indexOf('directedBy');
                        let director = currentList.slice(indexOfCommand + 1).join(' ');
                        dataObj.set('director', director);

                    } else if (array[i].includes('onDate')) {

                        let currentList = array[i].split(' ');
                        let date = currentList.pop();
                        dataObj.set('date', date);

                    }
                }
            }
            // convert Map into Object 
            let movieObj = Object.fromEntries(dataObj);
            // print
            console.log(JSON.stringify(movieObj));
        }
        // breaking the loop once out of elements. I know.. i had to use a while loop :)
        if (counter === array.length) {
            break;
        }
    }
}
movies([
    'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'
]);