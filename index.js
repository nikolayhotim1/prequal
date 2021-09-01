'usestrict';
let taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341
};

let cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892
};

let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000
};

let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    } else {
        return true;
    }
}

function checkOut(car) {
    let worthALook = prequal(car);

    if (worthALook) {
        console.log('You gotta check out this ' + car.make + ' ' + car.model);
    } else {
        console.log('You should really pass on the ' + car.make + ' ' + car.model);
    }
}

console.log(prequal(taxi)); // false
checkOut(taxi); // You should really pass on the Webville Motors Taxi

console.log(prequal(cadi)); // false
checkOut(cadi); // You should really pass on the GM Cadillac

console.log(prequal(fiat)); // false
checkOut(fiat); // You should really pass on the Fiat 500

console.log(prequal(chevy)); // true
checkOut(chevy); // You gotta check out this Chevy Bel Air
