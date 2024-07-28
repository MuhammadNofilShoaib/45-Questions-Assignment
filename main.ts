#! /usr/bin/env node 

// // EXERCISE_1
// console.log("Hello World!")


// // EXERCISE_2
// let personName: string= "NOFIL";
// console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);


// // EXERCISE_3
// // lower case
// let personName: string ="Nofil"
// console.log("lowercase:", personName.toLowerCase());
// // upper case
// console.log("uppercase:", personName.toLocaleUpperCase());
// // Title case
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


// // EXERCISE_4
// let qoute: string= "Your love makes me strong. Your hate makes me unstoppable, Cristiano Ronaldo";
// let author: string= "Cristiano Ronaldo"
// console.log(`${author} once said, "${qoute}`);


// // EXERCISE_5
// let qoute: string= "Your love makes me strong. Your hate makes me unstoppable, Cristiano Ronaldo";
// let famous_person="Cristiano Ronaldo";
// let message=`${famous_person} once said, ${qoute}`;
// console.log(message);


// // EXERCISE_6
// let personName: string =`\n\t CRISTIANO RONALDO\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);


// // EXERCISE_7 & EXERCISE_8

// console.log(87 +3);
// console.log(54 -3);
// console.log(4 *2);
// console.log(16 / 2);


// // EXERCISE_9
// let favoriteNumber: number= ;
// console.log(`My favorite Number is ${favoriteNumber}`);


// // EXERCISE_10
// // program written by:NOFIL
// // Current date: 5/02/2024
// // this is simple 1st program we write just write hello world
// console.log('hello world')
// let names: string[] =['RONALDO','MESSI','MBAPPE','BELLINGHAM'];
// for(let i = 0; i // // console.log(names[i]) ;
// }


// EXERCISE_11
// let members: string[] =['ASHAS','YUSHA','NOFIL','SHOAIB','SAMI'];
// for(let i=0; i<members.length; i++) {
//     console.log(members[i]);
// }  


// // EXERCISE_12
// let members: string[] =['ASHAS','YUSHA','NOFIL','SHOAIB','SAMI'];
// let message: string='Happy Birthday to: ';
// for(let i=0; i<members.length; i++) { 
//     console.log(message + members[i]); 
// }


// // EXERCISE_13
// let models: string[] =['bike','car'];
// for(let i=0; i<models.length; i++) {
//     console.log(`I would like to own a ${models[i]}.`);
// }; 


// // EXERCISE_14
// let guest_list : string [] = ['ali','farhan','raza','ayesha'];
// for(let i=0; i // console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// export{guest_list}


// // EXERCISE_15
// let guest_list : string [] = ['ali','farhan','raza','ayesha'];
// for(let i=0; i<guest_list.length; i++) {
//      console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// let not_present : string = 'farhan';
// let new_guest : string = 'Babar Azam';
// guest_list[1] = new_guest; 
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// };


// // EXERCISE_16
// let guest_list : string [] = ['ali','farhan','raza','ayesha'];
//  for(let i=0; i<guest_list.length; i++) {
//  console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// let not_present : string = 'farhan';
// let new_guest : string = 'Babar Azam';
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// };


// // EXERCISE_17
// let guest_list : string [] = ['ali','farhan','raza','ayesha'];
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// let not_present : string = 'farhan';
// let new_guest : string = 'Babar Azam';
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// guest_list.unshift('shaheen','sarfaraz','rizwan');
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n')
// }
// console.log('\nUnfortunately we can not arrange a big table, So only two people are invited.');
// while(guest_list.length>2){
// let remove_guest = guest_list.pop();
// console.log(`Sorry MR. ${remove_guest} you are not invited for dinner.`);
// }
// for(let i=0; i<guest_list.length; i++) {
//      console.log('\nRespeted Sir/Madam ' + guest_list[i] + ',\nYES YOU ARE STILL INVITED on TOMORROW dinner \nThank You\n')
// }
// guest_list.splice(0,2,);


// // EXERCISE_18
// let places : string [] = ['Madrid','Portugal','Spain','New Jersey','Riyadh']
// console.log('original :' + places);
// // Print your array in alphabetical order without modifying the actual list.
// console.log('copy ' + [...places].sort());
// // • Show that your array is still in its original order by printing it.
// console.log('original :' + places);
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('copy ' + [...places].sort().reverse());
// // • Show that your array is still in its original order by printing it again.
// console.log('copy ' + [...places].sort().reverse());
// // • Reverse the order of your list. Print the array to show that its order has changed.
// console.log('original :' + places.sort());
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log('original :' + places.sort().reverse());


// // EXERCISE_19
// let guest_list : string [] = ['ali','farhan','raza','ayesha'];
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// let not_present : string = 'farhan';
// let new_guest : string = 'Babar Azam';
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }; 



// // EXERCISE_20
// const languages : string [] = ['english','urdu','hindi','french','arabic']
// console.log("List of countries:")
// for(let top of languages){
// console.log(top)
// }


// // EXERCISE_21
// interface Item {
// name: string;
// price: number;
// }

// // Create two objects using the interface
// const book: Item = {
// name: "Bradley Baker ",
// price: 12.99,
// };

// const apple: Item = {
// name: "Apple",
// price: 0.99,
// };

// // Access and print the object properties
// console.log(`\nBook name: ${book.name}, price: $${book.price}`);
// console.log(`\nFruit name: ${apple.name}, price: $${apple.price}`);


// // EXERCISE_22
// // Define an interface for the object structure
// interface Item {
// name: string;
// price: number;
// }

// // Create two objects using the interface
// const book: Item = {
// name: "ESSENTIAL TYPESCRIPT ",
// price: 12.99,
// };

// const fruit: Item = {
// name: "Apple",
// price: 0.99,
// };

// // Access and print the object properties
// console.log(`\nBook name: ${book.name}, price: $${book.price}`);
// console.log(`\nApple name: ${fruit.name}, price: $${fruit.price}`);


// // EXERCISE_23
// let cars: string = 'Buggati Chiron';

// // Test 1: Equality comparison (True)
// console.log("Is car == 'Buggati Chiron'? I predict True.");
// console.log(cars == 'Buggati Chiron'); // True

// // Test 2: Strict equality comparison (True)
// console.log("Is car === 'Buggati Chiron'? I predict True.");
// console.log(cars === 'Buggati Chiron'); // True


// // EXERCISE_24
// let car: string = 'subaru';
// let age: number = 25;
// let numbers: number[] = [1, 2, 3, 4];

// // **String Tests**

// // Test 1: Equality (True)
// console.log("Is car == 'Subaru'? I predict True.");
// console.log(car == 'Subaru'); // True (case-insensitive)

// // Test 2: Strict equality (False)
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru'); // False (case-sensitive)

// // Test 3: Inequality (True)
// console.log("Is car != 'Toyota'? I predict True.");
// console.log(car != 'Toyota'); // True

// // Test 4: Inequality (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru'); // False (case-sensitive)

// // **Lowercase Function Tests**

// // Test 5: Lowercase conversion (True)
// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

// // Test 6: Lowercase conversion (False)
// console.log("Is car === car.toLowerCase()? I predict False.");
// console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// // **Numerical Tests**

// // Test 7: Equality (True)
// console.log("Is age == 25? I predict True.");
// console.log(age == 25); // True

// //Test 8: Inequality (False)
// console.log("Is age != 30? I predict True.");
// console.log(age != 30); // True

// // Test 9: Greater than (False)
// console.log("Is age > 30? I predict False.");
// console.log(age > 30); // False

// // Test 10: Less than or equal (True)
// console.log("Is age <= 25? I predict True.");
// console.log(age <= 25); // True


// // EXERCISE_25 & EXERCISE_26
// let alienColor: string = "Red";
// if (alienColor == "Red"){
// console.log("the player just earned 5 points.");
// } else {
//     console.log(``);
// };


// // EXERCISE_27
// let alien_color: string ="green";
// // If the alien is green, print a message that the player earned 5 points.

// if(alien_color == "green"){
// console.log("the player earned 5 points.");
// }

// // • If the alien is yellow, print a message that the player earned 10 points.
// else if(alien_color == "yellow"){
// console.log("the player just earned 10 points.");
// }

// // • If the alien is red, print a message that the player earned 15 points.
// else if(alien_color == "red"){
// console.log("the player just earned 15 points.");
// }
// else{
// console.log("Please select right color")
// }
// // • Write three versions of this program, making sure
// // each message is printed for the appropriate color alien.

// // version 2
// alien_color ="red";
// if(alien_color == "green"){
// console.log("the player earned 5 points.");
// }
// else if(alien_color == "yellow"){
// console.log("the player just earned 10 points.");
// }
// else if(alien_color == "red"){
// console.log("the player just earned 15 points.");
// }
// else{
// console.log("Please select right color")
// }

// // version 3
// alien_color ="yellow";
// if(alien_color == "green"){
// console.log("the player earned 5 points.");
// }
// else if(alien_color == "yellow"){
// console.log("the player just earned 10 points.");
// }
// else if(alien_color == "red"){
// console.log("the player just earned 15 points.");
// }
// else{
// console.log("Please select right color")
// }


// // EXERCISE_28
// let age: number = 15;
// if(age<2){
// console.log("the person is a baby.")
// }

// // • If the person is at least 2 years old but less than 4, print
// // a message that the person is a toddler.

// else if(age>=2 && age <4){
// console.log("person is a toddler.")
// }

// // • If the person is at least 4 years old but less than 13,
// // print a message that the person is a kid.
// else if(age>=4 && age <13){
// console.log("person is a kid.")
// }

// // • If the person is at least 13 years old but less than 20,
// // print a message that the person is a teenager.

// else if(age>=13 && age <20){
// console.log("person is a teenager.")
// }
// // • If the person is at least 20 years old but less than 65,
// // print a message that the person is an adult.
// else if(age>=20 && age <65){
// console.log("person is a adult.")
// }
// // • If the person is age 65 or older, print a
// // message that the person is an elder
// else{
// console.log("Person is an elder.")
// }


// // EXERCISE_29
// let favorite_fruits : string [] = ['apple','orange','grapes']

// if(favorite_fruits.includes('apple')){
// console.log('I really like apple!')
// }

// if(favorite_fruits.includes('orange')){
// console.log('I really like orange!')
// }

// if(favorite_fruits.includes('mango')){
// console.log('I really like mango!')
// }

// if(favorite_fruits.includes('grapes')){
// console.log('I really like grapes!')
// }

// if(favorite_fruits.includes('bananas')){
// console.log('I really like bananas!')
// }


// // EXERCISE_30
// let users : string [] = ['nofil','babar','saba','taha','admin']

// for(let user of users){
// if (user === "admin"){
// console.log("hello admin, would you like to see a status report?")
// }
// else{
// console.log(`Hello ${user}, 'thank you for logging in again.'`)
// }
// }


// // EXERCISE_31
// let users : string [] = ['nofil','babar','saba','taha','admin']
// if(users.length === 0){
// console.log("We need to find some users! ")
// }
// // • Remove all of the usernames from your array,
// // and make sure the correct message is printed
// else{
// users = [];
// console.log("All user have been removed " + users.length)
// }


// // EXERCISE_32
// let current_users: string[] = ["nofil", "admin", "ahmed", "babar", "raza"];
// let new_users: string[] = ["fawad", "hussain", "user7", "admin", "User9"];

// new_users.forEach((newUser) => {
// if (
// current_users.some(
// (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
// )

// ) {
// console.log(`${newUser} will need to enter a new username.`);
// } else {

// console.log(`${newUser} is available.`);
// }
// });


// // EXERCISE_33
// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for loop
// for(let i = 0; i < myNumbers.length; i++){
// // now we use conditions
// if(myNumbers[i] == 1){
// console.log(`${myNumbers[i]}st`);
// }else if(myNumbers[i] == 2){
// console.log(`${myNumbers[i]}nd`);

// }else if(myNumbers[i] == 3){
// console.log(`${myNumbers[i]}rd`);

// }else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
// console.log(`${myNumbers[i]}th`);
// }
// }


// // EXERCISE_34
// let myPizza = ["Cheeze Pizza", "Pepperoni Pizza", "Vegeterian Pizza"];

// // print only names of pizza
// for (let i = 0; i < myPizza.length; i++) {
// console.log(myPizza[i]);
// }


// // EXERCISE_35
// let animals: string[] = ["dog", "elephant", "rabbit"];
// animals.forEach(animal => {
// console.log(`A ${animal} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");


// // EXERCISE_36
// function make_shirt(size: string, message: string) {
// console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt("medium", "Code is Life");


// // EXERCISE_37
// function make_shirt(size: string = "large", message: string = "RONALDO IS THE G.O.A.T") {
// console.log(`Making a ${size} T-Shirt with the message "${message}" printed on it.`);
// }

// make_shirt(); // Default large and message

// make_shirt("medium"); // Default message, medium size

// make_shirt("small", "Dive into Coding"); // Custom message, small size


// // EXERCISE_38

// function describe_city(nameOfCity: string, country: string = "Pakistan"){

// return `${nameOfCity} is in ${country}`;

// };

// // 3 cities

// let city1 = describe_city("South africa,cape town");

// let city2 = describe_city("India,delhi");

// let city3 = describe_city("Pakistan, Karachi");

// let city4 = describe_city("Dubai", "UAE");

// console.log(city1);

// console.log(city2);

// console.log(city3);

// console.log(city4);


// // EXERCISE_39

// function city_country(city: string, country: string){

// // return `"${city}, ${country}"`

// console.log(`"${city}, ${country}"`)

// }

// city_country("Karachi", "Pakistan");

// let mycities = city_country("Karachi", "Pakistan");

// console.log(mycities);

// console.log(city_country("Dubai", "UAE"));

// console.log(city_country("London", "United Kingdom"));

// console.log(city_country("Riyaz", "Saudi Aarbia"));


// // EXERCISE_40

// function myAlbum(artistName: string, albumTitle: string){

// return {artistName, albumTitle}

// }

// let album1 = myAlbum("Eminem", "Mockingbird");

// let album2 = myAlbum("Ed Sheeran", "Shape Of You");

// let album3 = myAlbum("Roddy Ricch", "The Box");

// console.log(album1);

// console.log(album2);

// console.log(album3);

// // Number of tracks

// function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){

// return {artistName, albumTitle, numberOfTracks}

// }

// let album4 = myAlbum2("Alan Walker", "Headlights", 30);

// let album5 = myAlbum2("The Weeknd", "Star Boy", 55);

// let album6 = myAlbum2("The Weeknd", "Blinding Lights", 78);

// console.log(album4);

// console.log(album5);

// console.log(album6);


// EXERCISE_41

// let magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];

// function show_magicians(){

// for(let item of magicianNames){

// console.log(item);

// }

// };


// // EXERCISE_42

// let magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];

// function show_magicians(greet: string){

// for(let item of magicianNames){

// console.log(greet, item);

// }

// };

// show_magicians("Hello, How are you Mr.");

// show_magicians("Hello, "); //2nd time calling


// // EXERCISE_43

// let magicianNames2 = ["Ayaz", "Fayaz", "Tariq", "Madad"];

// // making a copy of an array

// let magicianNamesCopy = [...magicianNames2];

// function show_magicians(greet: string){

// let withGreetings = "";

// for(let item of magicianNamesCopy){

// withGreetings += `${greet} ${item}\n`;

// }

// return withGreetings;

// };

// let myGreetings = show_magicians("Hello");

// let makeArray = myGreetings.split('\n');

// console.log(makeArray);

// // original array

// console.log(magicianNames2)


// // EXERCISE_44

// function mySandwiches(...items: string []){

// return `I want Sandwich of ${items}`;

// };

// let collection1 = mySandwiches("Ham", " Cheeze", " Lettuce"); // can add as many you wish

// let collection2 = mySandwiches("Turkey", " Swiss");

// let collection3 = mySandwiches(); // without arrgument

// console.log(collection1);

// console.log(collection2);

// console.log(collection3);


// // EXERCISE_45

// // Define a type for the additional properties
// type CarInfo = {
//     manufacturer: string;
//     model: string;
//     [key: string]: any; // This allows for additional properties with any value
// };
// // Define a function to create a car object
// function createCar(manufacturer: string, model: string, additionalInfo: { [key: string]: any } = {}): CarInfo {
//     return {
//         manufacturer,
//         model,
//         ...additionalInfo
//     };
// }
// // Call the function with required and additional information
// const car = createCar('Toyota', 'Camry', { color: 'blue', features: ['sunroof', 'leather seats'] });
// // Print the car object to ensure all information is stored correctly
// console.log(car);
