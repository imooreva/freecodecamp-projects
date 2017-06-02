//###############################################################################
//### Solutions for FCC's basic algorithm challenges, redone for the new site
//### https://beta.freecodecamp.com/en/challenges/basic-algorithm-scripting/get-set-for-our-algorithm-challenges


//#########################
//sum all numbers in a range

var sumAll = (arr) => {
    let sumOfN = 0;
    let maxN = Math.max.apply(null, arr);
    let minN = Math.min.apply(null, arr);

    for (minN; minN <= maxN; minN++) {
        sumOfN += minN;    
    }
    return sumOfN;
};

sumAll([1, 4]);


//#########################
//diff two arrays

function diffArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        newArr.push(arguments[i]);
    }

    newArr = newArr.reduce((a, b) => a.concat(b), []);

    //Filter out values where two or more exist in newArr
    let filterOutDuplicates = (value) => {
        if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
            return value;
        }    
    };

    return newArr.filter(filterOutDuplicates);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//#########################
//check for palindromes

var palindrome = (str) => {
    let newStr = str.toLowerCase().replace(/\W|_/g, "");
    return newStr === newStr.split('').reverse().join('');  
};

palindrome("eye");


//#########################
//seek and destroy

function destroyer(arr){
    //converts the arguments into an array
    let args = Array.prototype.slice.call(arguments);
    //function to find matches in array; -1 means not found
    let check = i => args.indexOf(i,1) == -1;
    return arr.filter(check);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//#########################
//wherefore art thou

var whatIsInAName = (collection, source) => {
    let newArr = [];
    let keys = Object.keys(source);

    for (let i in collection) {
        let hasProp = true;
        let arrayObj = collection[i];
        for (var j in keys) {
            let key = keys[j];
            if (!arrayObj.hasOwnProperty(key) || arrayObj[key] !== source[key]) {
                hasProp = false;
            }
        }
        if (hasProp) {
            newArr.push(arrayObj);
        }
    }  
    return newArr;
};

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


//#########################
//spinal tap case

//first .replace() inserts space between placeholders for tests #2 and #5
//second .replace() removes non-word characters and underscores from all tests

var spinalCase = str => str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\W|_/g, "-").toLowerCase();

spinalCase('This Is Spinal Tap');


//#########################
//roman numeral converter

var convertToRoman = num => {

    //arrays in descending order works better
    let romans = [], n = num;
    let decimalNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000].reverse();
    let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'].reverse();

    for (var i = 0; i < decimalNum.length; i++) {
        while (n >= decimalNum[i]) {
            romans.push(romanNum[i]);
            n -= decimalNum[i];
        }
    }  
    return romans.join('');
};

convertToRoman(36);


//#########################
//caesers cipher

var rot13 = str => {
    let result = '';
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            if (str.charCodeAt(i) < 78) {
                c = i + 13;
                result = result + String.fromCharCode(str.charCodeAt(i) + 13);
            }
            else {
                c = i - 13;
                result = result + String.fromCharCode(str.charCodeAt(i) - 13);
            }
        }
        else {
            result = result + str[i];
        }
    }  
    return result;
};

// Change the inputs below to test
rot13("SERR PBQR PNZC");


//#########################
//pig latin

var translatePigLatin = str => {
    //tests argument using regex; returns true if it matches
    let isVowel = x => (/[aeiou]/gi).test(x);

    if (isVowel(str[0])) {
        return str + 'way';
    }
    else if (!isVowel(str)) {
        return str + 'ay';
    }  
    for (let i = 1; i < str.length; i++) {
        if (isVowel(str[i]) ) {
            return str.substr(i) + str.substr(0,i) + 'ay';
        }   
    }
};

console.log(translatePigLatin('crypt'));
console.log(translatePigLatin('bra'));


//#########################
//search and replace

var myReplace = (str, before, after) => {
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1);
    }
    return str.replace(before, after);  
};

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


//#########################
//DNA pairing

var pairElement = str => {
    let newArr = [];
    splitStr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (splitStr[i] === 'A') {
            newArr.push(['A','T']);
        }
        else if (splitStr[i] === 'T') {
            newArr.push(['T','A']);
        }
        else if (splitStr[i] === 'C') {
            newArr.push(['C','G']);
        }
        else if (splitStr[i] === 'G') {
            newArr.push(['G','C']);
        }
    }

    return newArr;
};

pairElement('GCG');


//#########################
//missing letters

var fearNotLetter = str => {
    let firstChar = str.charCodeAt(0);
    let currentChar;

    for (let i = 1; i < str.length; i++) {    
        currentChar = str.charCodeAt(i);    
        if (currentChar !== firstChar && currentChar - str.charCodeAt(i - 1) >= 2) {
            return String.fromCharCode(currentChar - 1);
        }    
    }
};

fearNotLetter("abce");


//#########################
//sorted union

function uniteUnique(arr1, arr2, arr3) {  
    let newArr = [];
    let finArr = [];  
    //push arguments into newArr and flatten them out into one array  
    for (i = 0; i < arguments.length; i++) {
        newArr.push(arguments[i]);
    }   
    newArr = newArr.reduce((a, b) => a.concat(b), []);

    //push newArr elements into finArr, but check for duplicates first  
    for (j = 0; j < newArr.length; j++) {
        if (finArr.indexOf(newArr[j]) < 0) { 
            finArr.push(newArr[j]);
        }
    }  
    return finArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//#########################
//convert HTML entities

var convertHTML = str => str.replace(/&/g,"&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");

convertHTML("Dolce & Gabbana");


//#########################
//sum all odd fibonacci numbers

var sumFibs = num => {

    let newArr = [];  
    let curNum = 1;
    let lastNum = 0;

    while (curNum <= num) {
        if (curNum % 2 !== 0) {
            newArr.push(curNum);
        }
        let sumNums = curNum + lastNum;
        lastNum = curNum;
        curNum = sumNums;
    }

    return newArr.reduce((a, b) => a + b);
};

sumFibs(4);


//#########################
//sum all primes

var sumPrimes = num => {
    let newArr = [];  
    for (i = 2; i <= num; i++) {
        let isPrime = true;    
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }    
        if (isPrime) {
            newArr.push(i);
        }
    }
    return newArr.reduce((a, b) => a + b);
};

sumPrimes(10);


//#########################
//smallest common multiple

var smallestCommons = arr => {  
    //create new array
    let sortedArr = arr.sort((a,b) => a-b);
    let newArr = [];  
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }  
    //vars for comparison
    //var newArrMin = Math.min.apply(Math, newArr);
    //var newArrMax = Math.max.apply(Math, newArr);
    //var isCommonMultiple = false;

    let lowest = 0;
    let n = 1;
    let j;

    while (j !== newArr.length) {
        lowest = n * newArr[0] * newArr[1];
        for (j = 2; j < newArr.length; j++) {
            if (lowest % newArr[j] !== 0) {
                break;
            }
        }
        n++;
    }  
    return lowest;
};

smallestCommons([1,5]);


//#########################
//drop it

function dropElements(arr, func) { 
    for (let i = 0; i < arr.length; i++) {    
        if (arguments[1](arr[i])) {
            return arr.slice(i,arr.length);
        }
    }  
    return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });


//#########################
//steamroller

var steamrollArray = arr => {
    let newArr = [];
    //if array, call flatten function again on each array element
    //until it finds number or string to push into newArr.
    //http://www.sitepoint.com/recursion-functional-javascript/
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    //console.log("arg: " + arg + " / " + typeof(arg));
    let flatten = arg => (Array.isArray(arg)) ? arg.forEach(flatten) : newArr.push(arg);
    //console.log("arr: " + arr);
    arr.forEach(flatten);
    return newArr;
};

steamrollArray([1, [2], [3, [[4]]]]);


//#########################
//binary agents

var binaryAgent = str => {

    var newStr = '';
    let splitStr = str.split(' ');

    for (i = 0; i < splitStr.length; i++) {
        newStr += String.fromCharCode(parseInt(splitStr[i], 2));    
    }  
    return newStr;
};

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//#########################
//everything be true

var truthCheck = (collection, pre) => {  
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            return false;
        }
    }
    return true;
};

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//#########################
//arguments optional

function addTogether() {
    //var args = Array.from(arguments);

    let args = arguments;
    let arg1 = args[0];

    if (args.length === 1 && typeof(arg1) === "number") {
        return function(arg2) {
            if (typeof(arg2) === "number") {
                return arg1 + arg2;
            }
        };
    }
    else if (typeof(arg1) === "number" && typeof(args[1]) === "number") {
        return arg1 + args[1];
    }
}

addTogether(2,3);


//#########################
//make a person

var Person = function(firstAndLast) {
    //this.setFullName = firstAndLast;
    this.first = firstAndLast.split(' ')[0];
    this.last = firstAndLast.split(' ')[1];

    this.setFirstName = function(first) {
        this.first = first;    
    };

    this.setLastName = function(last) {
        this.last = last;
    };

    this.setFullName = function(firstLast) {
        this.first = firstLast.split(' ')[0];
        this.last = firstLast.split(' ')[1];
    };

    this.getFullName = function() {
        return this.first + ' ' + this.last;
    };
};


var bob = new Person('Bob Ross');
bob.getFullName();

Person.prototype.getFirstName = function () {
    return this.first;
};

Person.prototype.getLastName = function () {
    return this.last;
};


Person.prototype.getFullName = function() {
    return this.setFullName;
};

Person.prototype.setFirstName = function (first) {
    if (typeof first == 'string') {
        this.first = first;
    }
};

Person.prototype.setLastName = function (last) {
    if (typeof last == 'string') {
        this.last = last;
    }
};

Person.prototype.setFullName = function (firstAndLast) {
    if (typeof firstAndLast == 'string') {
        this.setFullName = last;
    }
};

