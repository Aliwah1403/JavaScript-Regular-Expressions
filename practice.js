// .test() method
let mySring = "Hello World";
let myRegex = /Hello/;
let result = myRegex.test(mySring);
console.log(result);



//matching different possibilities
let testStr = "John has a big cat";
let testRegex = /cat|dog|bird/;
let resultMult = testRegex.test(testStr);
console.log(resultMult);
console.log(testRegex.test("His pet bird is beautiful"));
console.log(testRegex.test("She has a rock"));



//ignoring cases(upper or lower) while matching
let testCase = "freeCodeCamp";
let caseRegex = /freeCodeCamp/i;
let caseResult = caseRegex.test(testCase);
console.log(caseResult);
console.log(caseRegex.test("FREEcodeCAMP"));
console.log(caseRegex.test("freeCODEcamP"));



//.match() method
let extractStr = "Extract the word 'coding' from this string";
let codingRegex = /coding/;
let extractResult = extractStr.match(codingRegex);
console.log(extractResult);



//find more than one match
//Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar
let twinkleStar = "Twinkle, twinkle ,little star";
let starRegex = /twinkle/ig;
let multiResult = twinkleStar.match(starRegex);
console.log(multiResult);



//using the wildcard period
//Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. 
//Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions";
let unRegex = /.un/;
let wildResult = unRegex.test(exampleStr);
console.log(wildResult);
console.log(unRegex.test("Let us go on a run"));
console.log(unRegex.test("the sun is out today"));
console.log(unRegex.test("coding is alot of fun"));
console.log(unRegex.test("seven days without a pun makes one weak"));
console.log(unRegex.test("there is a bug in my code"));
console.log(unRegex.test("catch me if you can"));
console.log(unRegex.test("one takes a vow to be a nun"));



//match single character with multiple possibilities
//Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex
// to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it";
let vowelRegex = /[aeiou]/ig; //the [aeiou] are the characters to match //we used i flag to ignore case and g
//flag to find repetitions

let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult);



//match all letters in the string
let quoteSample1 = "The quick brown fox jumped over the lazy dog";
let alphabetRegex = /[a-z]/ig;
let alphabetResult = quoteSample1.match(alphabetRegex);
console.log(alphabetResult);



//create a single regex that matches a range of letters between h and s,
//and a range of numbers between 2 and 6
let quoteSample2 = "Blueberry 3.14233348s are delicious";
let quoteRegex = /[h-s2-6]/ig;
let quoteResult = quoteSample2.match(quoteRegex);
console.log(quoteResult);



//Match characters that match zero or more times
let chewieQuote = "Aaaaaaaaaaaaaarrgh";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);



//match beginning of string patterns
let rickyAndCarl = "Cal and Ricky both like racing";
let calRegex = /^Cal/i;
let calResult = calRegex.test(rickyAndCarl);
console.log(calResult);



//matching ending of string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let lastResult = lastRegex.test(caboose);
console.log(lastResult);



//match all letters and numbers
let quoteSample3 = "The five boxing wizards jump quickly";
let alphabetRegexV2 = /\w/g;
let alphaResult = quoteSample3.match(alphabetRegexV2).length;
console.log(alphaResult)



//match everything but letters and numbers
let quoteSample4 = "The five boxing wizards jump quikcly";
let nonAlphabetRegex = /\W/g;
let nonAlphabetResult = quoteSample4.match(nonAlphabetRegex);
console.log(nonAlphabetResult);



//match all numbers
let testNum = "2001: A Space Odessy";
let numRegex = /\d/g;
console.log(testNum.match(numRegex));



// match all non numbers
let noNumRegex = /\D/g;
console.log(testNum.match(noNumRegex));



// Matching whitespace
let sample = "Whitespace is important in seperating words";
let countWhiteSpace = /\s/g;
let spaceResult = sample.match(countWhiteSpace);
console.log(spaceResult);

let nonWhiteSpace = /\S/g;
console.log(sample.match(nonWhiteSpace).length);



// Specify upper and lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
console.log(ohRegex.test(ohStr));



// specify only lower number of matches
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));



// specify exact number of matches
