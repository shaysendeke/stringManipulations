//1

// function longerThanFiveChar(strToCheck) {
//     if (strToCheck.length > 5) {
//         return "long";
//     }
//     return "short";
// }

// let result = longerThanFiveChar("word");
// console.log(result);



//2

// function isAexist(someString) {

//     if (someString.indexOf("a") != -1) {
//         return [i];
//     }
//     return "not found";
// }

// isAexist("basketball")



//3

function isRexist(someString) {

    if (someString.indexOf("r") != -1) {
        return true;
    }
    return false;
}

isRexist("lerusalem")



//4

// function isCharInString(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == char) {
//             return true;
//         }
//     }
//     return false;
// }

// let result = isCharInString("jerusalem", "i");
// console.log(result);



//5

// function isCharInsideString(someString, char) {

//         if (someString.lastIndexOf(char) != -1) {
//             console.log(someString.lastIndexOf(char));
//         }
//         else {
//         console.log("not in string");
//     }
// }


// isCharInsideString("jason", "m");




//6

// function sayonarasubstr(string) {
//     return string.substr(0, 3);
// }
// var result = sayonarasubstr("sayonara");
// console.log(result);



//7


// function sayonaraFourCharFromY(string) {
//     return string.substr(2, 4);
// }
// var result = sayonaraFourCharFromY("sayonara");
// console.log(result);





//8

// function sayonaraFromYToEnd(string) {
//     return string.substr(3);
// }
// var result = sayonaraFromYToEnd("sayonara");
// console.log(result);




//9

// function isStringLongerThanIndex(string, index) {
//     if (index > string.length) {
//         return index + " is to long";
//     }
//     return string.substr(index);
// }

// let result = isStringLongerThanIndex("jonathan", 7);
// console.log(result);




//10

// function isStringLongerThanIndexAgain(string, index) {
//     if (index > string.length) {
//         return index + " is to long";
//     }
//     return string.substr(index, 3);
// }

// let result = isStringLongerThanIndexAgain("david", 2);
// console.log(result);




//11

// function getStringLengthByNumbers(string, num1, num2) {
// if (Number(num1) >= 0 ||Number(num1) > 0) {
//     return string.substr(num1, num2);
// }
// }

// var result =  getStringLengthByNumbers("shaquille", 1, 5);
// console.log(result);




//15


// function printFullName() {
//     var fullName = prompt("Please Enter Your Full Name");
//     console.log(fullName.length);

//     if (fullName.indexOf(" ") != -1) {
//         console.log("The name has a space char in it");
//     }
//     console.log(fullName.substring(0, fullName.indexOf(" ")));
//     console.log(fullName.substring(fullName.indexOf(" ") + 1));
// }

// printFullName();




//16

// function isStringsTheSameLower(string1, string2) {
//     if (string1.toLowerCase() == string2.toLowerCase()) {
//         return true;
//     }
//     return false;
// }

// var result = isStringsTheSameLower("moshe", "david");
// console.log(result);




//17

// function isStringsTheSameUpper(string1, string2) {
//     if (string1.toUpperCase() == string2.toUpperCase()) {
//         return true;
//     }
//     return false;
// }

// var result = isStringsTheSameUpper("uri", "URI");
// console.log(result);




//18

// let firstName = prompt("Enter Your First Name:");
// let lastName = prompt("Enter Your Last Name:");

// function printLongerName(firstString, secondString) {

//     if (firstString.length > secondString.length) {
//         console.log(firstString);
//     }
//     else {
//         console.log(secondString);
//     }
// }

// printLongerName(firstName, lastName);





//19


// let firstName = prompt("Enter Your First Name:");
// let lastName = prompt("Enter Your Last Name:");

// function firstContainA_lastContainAPI() {
//     if (firstName.indexOf("a") != -1) {
//         console.log("The First Name Contain The Letter 'a' ");
//     }
//     if (lastName.indexOf("api") != -1) {
//         console.log("The Last Name Contain The string 'api' ");
//     }
// }

// firstContainA_lastContainAPI(firstName, lastName);




//20 היא אותה שאלה כמו 1



//21

// function islongerThanThreeChar(countryName) {
//     if (countryName.length > 3) {
//         return "yes";
//     }
//     return "no";
// }

// let result = islongerThanThreeChar("Israel");
// console.log(result);





//22

// function isStringLongerThanSix(string, char) {
//     if (string.length > 6) {
//         return string;
//     }
//     return string.indexOf(char);
// }

// let result = isStringLongerThanSix("urirtyu", "r");
// console.log(result);




//23

// function isChar_InString(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == char) {
//             return string.indexOf(char);
//         }
//     }
//     return string;
// }

// let result = isChar_InString("urirtyu", "z");
// console.log(result);




//24

// function firstNameFirstLetterThanUpperCaseLastName(firstName, lastName) {
//     return firstName[0] + ". " + lastName.toUpperCase();

// }


// let result = firstNameFirstLetterThanUpperCaseLastName("uri", "zauda");
// console.log(result);



//25

// function getLongerNamePrintShorterNameLowerCase(firstLastName, secondLastName) {
//     if (firstLastName.length > secondLastName.length) {
//         console.log(secondLastName.toLowerCase());
//         return firstLastName;
//     }
//     console.log(firstLastName.toLowerCase());
//     return secondLastName;
// }

// let result = getLongerNamePrintShorterNameLowerCase("ZAUDA", "ZAROTYUI");
// console.log(result);





//26

// function getCharInName(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == char) {
//             return string;
            
//         }
//     }
//     return "not exist";
// }

// let result = getCharInName("uri", "z");
// console.log(result);
