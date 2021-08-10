function movies(array) {

    let moviesList = [];

    for (let element of array) {

        let movieObj = {};
        let tokens = element.split(' ');
        let movieTitle = '';

        if (tokens[0] === 'addMovie') {

            let currentToken = element.split(' ');
            currentToken.shift();
            movieTitle = currentToken.join(' ');
            movieObj.name = movieTitle;

            for (let i = 0; i < array.length; i++) {

                let currentElement = array[i];

                if (currentElement.includes('directedBy') && currentElement.includes(movieTitle)) {

                    let arrayOfCurrecntElement = currentElement.split(' ');
                    let findDirector = arrayOfCurrecntElement.indexOf('directedBy');
                    arrayOfCurrecntElement.splice(0, findDirector + 1)
                    let directorName = arrayOfCurrecntElement.join(' ');
                    movieObj.director = directorName;

                } else if (currentElement.includes('onDate') && currentElement.includes(movieTitle)) {

                    let arrayOfCurrecntElement = currentElement.split(' ');
                    let findDate = arrayOfCurrecntElement.indexOf('onDate');
                    arrayOfCurrecntElement.splice(0, findDate + 1)
                    let movieDate = arrayOfCurrecntElement.join(' ');
                    movieObj.date = movieDate;

                }
            }

            if (movieObj.hasOwnProperty('name') && movieObj.hasOwnProperty('director') && movieObj.hasOwnProperty('date')) {
                moviesList.push(movieObj);
            }
        }
    }

    for (let index of moviesList) {
        let currentIndex = index;
        let json = JSON.stringify(currentIndex);
        console.log(json);
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'I Am Legend directedBy Will Smith',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'I Am Legend onDate 12.04.2015',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
    'addMovie I Am Legend',
]);