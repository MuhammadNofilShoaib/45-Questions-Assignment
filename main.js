"use strict";
// // EXERCISE_1
// console.log("Hello World!")
// Define a function to create a car object
function createCar(manufacturer, model, additionalInfo = {}) {
    return Object.assign({ manufacturer,
        model }, additionalInfo);
}
// Call the function with required and additional information
const car = createCar('Toyota', 'Camry', { color: 'blue', features: ['sunroof', 'leather seats'] });
// Print the car object to ensure all information is stored correctly
console.log(car);
