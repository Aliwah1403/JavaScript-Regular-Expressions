//Regular expressions are used in programming languages to match parts of strings
//You create patterns to help you do that matching.

// If you want to find the word (the) in the string (The dog chased the cat),
// you could use the following regular expression: /the/.
// Notice that quote marks are not required within the regular expression

//JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method.
// The.test() method takes the regex, applies it to a string(which is placed inside the parentheses), 
// and returns true or false if your pattern finds something or not.

//eg
let testStr = "freeCodeCamp";
let testRegex = /free/;
console.log(testRegex.test(testStr));


//in the example above the regex tests a literal match for that string
//eg
let testStr1 = "Hello, my name is Kevin";
let testRegex1 = /Kevin/;
let resultRegex1 = testRegex1.test(testStr1);
console.log(resultRegex1)

//here, any other forms of Kevin will not match
//for example the regex (Kevin) will not match (kevin) or (KEVIN);
let wrongRegex = /kevin/;
let resultRegex = wrongRegex.test(testStr1);
console.log(resultRegex); //will show "false"



//Match a literal string with different possibilities
//You can search for multiple patterns using the OR operater (|)
//this operator matches strings either before or after it
//eg if you wanted to match the strings (yes) and (no) the regex you use is /yes|no/
//you can also search for more than two patterns -- /yes|maybe|no/
let petString = "James has a pet cat";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
console.log(petResult);
console.log(petRegex.test("John has a pet dog"));
console.log(petRegex.test("Emma has a pet rock"));



//Ignore case while matching
//You can match both uppercase and lowercase by using a flag
//here we'll use the flag that ignores cases -- the i flag
//you can use it by appending it to the regex
//eg  /ignorecase/i
//  this regex will match ignorecase, igNorecase, IgnoreCase

let myFlagString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let resultFlag = fccRegex.test("FreeCodecamp");
console.log(resultFlag);
console.log(fccRegex.test("FREECODECAMP"));



// Extract Matches
//Previously we just checked if a pattern exists or not within a string
//You can also extract the actual matches you found with the .match() method.
//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses

//EG
"Hello, World!".match(/Hello/); //will return "Hello"

let ourStr = "Regular Expressions";
let ourRegex = /Expressions/;
console.log(ourStr.match(ourRegex)); //will return "Expressions"

//the .match() syntax is different from the .test()syntax

//.match() syntax
"string".match(/regex/);

//.test() syntax
/regex/.test("string");



//Find more than the first match
//To search or extract a pattern more than once, you can use the global search flag: g.

//eg
let testStrg = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
let resultG = testStrg.match(repeatRegex);
console.log(resultG);

//YOU CAN HAVE MULTIPLE FLAGS ON YOUR REGEX
//EG
/Repeat/gi; //this will find more than first match and also ignore cases



//Matchinf anything with the wildcard period
//The wildcard character (.) will match any one character
//You can use the wildcard character just like any other character in the regex.

//For example, if you wanted to match (hug), (huh), (hut), and (hum),
// you can use the regex /hu./ to match all four words.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let hugRegex = /hu./;
console.log(hugRegex.test(hugStr));
console.log(hugRegex.test(humStr));



//Match Single Character with Multiple Possibilities
//You can search for a literal pattern with some flexibility with character classes.
//. Character classes allow you to define a group of characters you wish to match
// by placing them inside square ([ and ]) brackets
//For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this.
//The [aiu] is the character class that will only match the characters (a), (i), or (u).

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";

let bgRegex = /b[iau]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));



//Match letters of the alphabet
//Inside a character set, you can define a range of characters to match using a hyphen -
//eg matching lowercase letters a through e you would use [a-e]
let catStr = "cat"
let batStr = "bat"
let matStr = "mat"
let bgeRegex = /[a-e]at/;
console.log(batStr.match(bgeRegex));
console.log(catStr.match(bgeRegex));
console.log(matStr.match(bgeRegex));

//"mat" will not match because its not in the range of a-e



//Match numbers and letters of the alphabet
//the hyphen can also be used to match a range of numbers
//eg /[0-5]/ matches any number between 0 and 5, including 0 and 5
//its also possible to combine a range of letters and numbers in a single character set
let jennyStr = "Jenny678839";
let jenRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(jenRegex));



//Match single characters not specified
//you can create a set of characters that you dont want to match
//these are called negated character sets
//to create a negated charater set, you place a caret (^) after the opening bracket and before the characters
//you do not want to match

//eg
/[^aeiou]/ig //matches all characters that are not vowels
//in simple terms: it does not match the vowels listed

//note that characters like . ! [ @ / and white space are matched

let negSample = "3 blind mice.";
let negRegex = /[^aeiou0-9]/ig;
let negResult = negSample.match(negRegex);
console.log(negResult);



//Match characters that match one or more times
///Sometimes, you need to match a character (or group of characters) that appears one or more times in a row.
//This means it occurs at least once, and may be repeated
//You can use the (+) character
//the character or pattern has to be present consecutively

//You want to find matches when the letter s occurs one or more times in Mississippi.
// Write a regex that uses the + sign.
let difficultSpelling = "Mississipi";
let dificultRegex = /s+/g;
let difficultResult = difficultSpelling.match(dificultRegex);
console.log(difficultResult);



//Match characters that match zero or more times
//We use the asterix character (*)

//eg
let soccerWord = "goooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));



//Find characters with lazy matching
//In regex, a greedy match finds the longest possible part of a string that fits the regex pattern
// and returns it as a match

//the alternative matching is called lazy matching
//You can apply the regex /t[a-z]*i/ to the string "titanic".
//This regex is basically a pattern that starts with t, ends with i, and has some letters in between
//Regular expressions are by default greedy, so the match would return ["titani"].
//it finds the largest sub-string possible to fit the pattern

//however you can use the ? character to turn it into lazy matching
// "titanic" matched against the changed regex /t[a-z]*?i/ returns "ti"
let text = "<h1>Winter is coming</h1>";

let textRegex = /<.*?>/;
//. is a wildcard that matches everything
// * matches characters appearing zero or more times 
// ? turns it into lazy matching
//all these are matching whatever is inside <>

let textResult = text.match(textRegex);
console.log(textResult);



//match beginning string patterns
//we use a caret to search for patterns at the beginning of strings
//the caret is placed outside of a/the charatcer set

//eg
let firstString = "Ricky is first and can be found"
let firstRegex = /^Ricky/i;
console.log(firstRegex.test(firstString));

let notFirst = "You wont find Ricky";
console.log(firstRegex.test(notFirst));



//match ending string patterns
//you can search the end of strings using the dollar sign character $ at the end of the regex

//eg
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));

let noEnding = "Somwtyimes a story will have to end";
console.log(storyRegex.test(noEnding));



//match all letters and numbers
//before, to match letters and numbers we used the character set [a-z0-9]
//there is a shortcut/shorthand for this
//we can use the \w character class
//this is equal to [A-Za-z0-9_] : lower and upppercase alphabet, numbers and underscore

//eg
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));