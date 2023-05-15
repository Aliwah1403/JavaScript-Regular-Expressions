//.test()
let testingStr = "His name is Kevin";
let testingRegex = /Kevin/;
console.log(testingRegex.test(testingStr));

//more than one pattern
let genreString = "She loves watching romance films";
let genreRegex = /romance|romantic|love/;
let genreResult = genreRegex.test(genreString);
console.log(genreResult);
console.log(genreRegex.test("She watches romantic films"));
console.log(genreRegex.test("She watches love films"));

//ignoring cases
let caseString = "freeCodeCamp";
let caseRegex = /freeCodeCamp/i;
let caseResult = caseRegex.test("FREECODECAMP");
console.log(caseResult);
console.log(caseRegex.test("freeCODEcamp"));

// .match()
let matchString = "Regular Expressions";
let matchRegex = /expressions/i;
console.log(matchString.match(matchRegex));

//finding more than 1 match
let repeatStr = "Repeat, repeat, REPEAT";
let repeatRegex = /repeat/gi;
let repeatResult = repeatStr.match(repeatRegex);
console.log(repeatResult);

// wildcard (.)
let humStr = "I'll hum a song for you";
let hugStr = "Let me give you a hug";
let hamStr = "I like ham";
let humRegex = /hu./;
console.log(humRegex.test(humStr));
console.log(humRegex.test(hugStr));
console.log(humRegex.test(hamStr));

//character classes[]
let batStr = "bat";
let butStr = "but";
let bitStr = "bit";
let btRegex = /b[aui]t/;
console.log(batStr.match(btRegex));
console.log(butStr.match(btRegex));
console.log(bitStr.match(btRegex));

//range in character set[-]
let meatStr = "meat";
let beatStr = "beat";
let seatStr = "seat";
let veatStr = "veat";
let eatRegex = /[a-s]eat/;
console.log(meatStr.match(eatRegex));
console.log(beatStr.match(eatRegex));
console.log(seatStr.match(eatRegex));
console.log(veatStr.match(eatRegex));

//number and letter range
let mixStr = "James007";
let mixRegex = /[a-z0-9]/ig;
console.log(mixStr.match(mixRegex));

//negated set
let negTest = "The 3 amigos";
let negRegex = /[^aeiou]/ig;
let negResult = negTest.match(negRegex);
console.log(negResult);


//consecutive character
let consText = "Communicate";
let consRegex = /m+/ig;
let consResult = consText.match(consRegex);
console.log(consResult);

let footyWord = "goooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(footyWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));


let example = "titanic";
let exaRegex = /t[a-z]*?i/;
let exaResult = example.match(exaRegex);
console.log(exaResult);


let testFirst = "Mia has a dog";
let testFirstRegex = /^Mia/i;
console.log(testFirstRegex.test(testFirst));

let notFirst = "Her name is Mia";
console.log(testFirstRegex.test(notFirst));


let testEnd = "That was a very nice story";
let regexEnd = /story$/i;
console.log(regexEnd.test(testEnd));

let allItems = /\w+/;
let numberItem = "42";
let textItem = "importante"
console.log(allItems.test(numberItem));
console.log(allItems.test(textItem));