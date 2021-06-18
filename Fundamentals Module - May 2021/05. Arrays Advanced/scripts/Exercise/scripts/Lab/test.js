function objects() {
    function person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    let arrayOfObjects = [
        mike = new person('Mike', 32, 'San Francisco'),
        jessica = new person('Jessica', 26, 'New York'),
        john = new person('John', 30, 'Boston'),
        sarah = new person('Sarah', 28, 'Miami')
    ]

    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`Hi! My name is ${arrayOfObjects[i].name} and I am ${arrayOfObjects[i].age} years old and I live in ${arrayOfObjects[i].city}. Nice to meet you!`);
        console.log('');
    }

}
objects();