
//Validate US Telephone Numbers
var telephoneCheck = str => /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);


//Implement Bubble Sort
function bubbleSort(array) {
    let end = array.length - 1;
    let i = 0;
    let sorted = false;
    let current, next;
    while (!sorted) {
        i = 0;
        sorted = true;
        while (i < end) {
            if (array[i] > array[i+1]) {
                sorted = false;
                current = array[i];
                next = array[i+1];        
                array[i+1] = current;
                array[i] = next;
            }
            i++;
        }
    }  
    return array;
}