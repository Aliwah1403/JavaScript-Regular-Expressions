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