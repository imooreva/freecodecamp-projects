//###############################################################################
//### Solutions for FCC's basic algorithm challenges, redone for the new site
//### https://beta.freecodecamp.com/en/challenges/basic-algorithm-scripting/get-set-for-our-algorithm-challenges


//#########################
//convert celsius to fahrenheit

var convertToF = (celsius) => celsius*1.8+32;

convertToF(30);


//#########################
//reverse a string

var reverseString = (str) => str.split('').reverse().join('');

reverseString("hello");


//#########################
//factorialize a number

var factorialize = (num) => {
    let result = 1, n = num;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
};

factorialize(5);


//#########################
//find the longest word in a string

let findLongestWord = (str) => {
    let splitString = str.split(" ");
    let longest = 0;

    for (let i = 0; i < splitString.length; i++) {
        if (longest < splitString[i].length) {
            longest = splitString[i].length;
        }
    }
    return longest;
};

findLongestWord("The quick brown fox jumped over the lazy dog");


//#########################
//return largest numbers in arrays

var largestOfFour = (arr) => {
    let largest = [0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
        largest[i] = arr[i].reduce((a,b)=> Math.max(a,b));
    }
    return largest;
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//#########################
//confirm the ending

var confirmEnding = (str, target) => str.substr(-(target.length)) == target;

confirmEnding("Bastian", "n");


//#########################
//repeat a string repeat a string

var repeatStringNumTimes = (str, num) => {
    if (num < 0) return "";
    let i = num, result = str;
    while (i > 1) {
        result = result.concat(str);
        i--;
    }
    return result;
};

repeatStringNumTimes("abc", 3);


//#########################
//truncate a string

var truncateString = (str, num) => num >= str.length ? str : str.slice(0, num) + '...';

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//#########################
//finders keepers

var findElement = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {    
        if (func(arr[i])) {      
            return arr[i];
        }
    }
};

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//#########################
//boo who

var booWho = (bool) => typeof bool === 'boolean';

booWho(null);


//#########################
//title case a sentence

var titleCase = (str) => {
    let splitString = str.toLowerCase().split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
    }  
    return splitString.join(' ');
};

console.log(titleCase("I'm a little tea pot"));


//#########################
//falsy bouncer

var bouncer = (arr) => arr.filter((x)=> Boolean(x) === true);

console.log(bouncer([7, "ate", "", false, 9]));


//#########################
//where do I belong

var getIndexToIns = (arr, num) => {
    let newArr = arr.sort((a, b) => a - b);
    let index = 0;

    for (i = 0; i < newArr.length; i++) {
        if (num > newArr[i]) {
            index = i + 1;
        }
    }
    return index;
};

getIndexToIns([40, 60], 50);


//#########################
//mutations

var mutation = (arr) => {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();

    for (let i = 0; i < arr2.length; i++) {
        let checkArr = arr1.indexOf(arr2[i]);
        if (checkArr === -1) {
            return false;
        }
    }
    return true;
};

mutation(["hello", "hey"]);


//#########################
//chunky monkey

var chunkArrayInGroups = (arr, size) => {
    let newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i,i + size));
        i += size;
    }  
    return newArr;
};

chunkArrayInGroups(["a", "b", "c", "d"], 2);
