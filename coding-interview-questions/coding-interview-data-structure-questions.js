//Typed arrays
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
console.log(i32View);


//Learn how a stack works
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
homeworkStack.pop();
homeworkStack.push('CS50');


//Create a stack class
function Stack() { 
    collection = [];
    this.print = () => console.log(collection);
    this.push = i => collection.push(i);
    this.pop = j => collection.pop(j);
    this.peek = () => collection[0];
    this.isEmpty = () => collection.length === 0;
    this.clear = () => collection = [];
}


//Create a queue class
function Queue () {
    collection = [];
    this.print = () => console.log(collection);
    this.enqueue = (a) => collection.push(a);
    this.dequeue = () => collection.shift();
    this.front = () => collection[0];
    this.size = () => collection.length;
    this.isEmpty = () => this.size === 0;
}


//Create a set class
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    this.add = item => {
        if (!this.has(item)) {
            collection.push(item);
            return true;
        }
        return false;
    };
}


//Remove from a set
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    this.remove = (item) => {
        let index = collection.indexOf(item);
        index !== -1 ? collection.splice(index,1) : console.log('Item not found in set');
    };
}


//Size of the set
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    this.size = ( ) => collection.length;
}


//Perform a union on two sets
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the set
    this.size = function() {
        return collection.length;
    };
    this.union = (otherSet) => {
        let unionSet = new Set();
        otherSet.values().forEach((x)=> unionSet.add(x));
        this.values().forEach((x)=> unionSet.add(x));
        return unionSet;
    };
}


//Perform an intersection on two sets of data
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    this.intersection = (otherSet) => {
        let intersected = new Set();
        otherSet.forEach((x)=> {
            if (this.has(otherSet[i])) {
                intersected.push(otherSet[i]);
            }
        });
        return intersected;
    };
}


//Perform a difference on two sets of data

function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    this.difference = (otherSet) => {
        let diff = new Set();
        otherSet.forEach((x)=> {
            if (!this.has(otherSet[i])) {
                diff.push(otherSet[i]);
            }
        });
        return diff;
    };
}


//Perform a subset check on two sets of data
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    this.subset = setB => {
        this.values().forEach((x)=> {
            if (!setB.has(x)) {
                return false;
            }
        });
        return true;
    };
}


//Create and add to sets in ES6
function checkSet() {
    var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
    set.add(['Taco','Cat','Awesome']);
    console.log(set);
    return set;
}
checkSet();


//Remove items from a set in ES6
function checkSet(){
    var set = new Set([1, 2, 3, 4, 5]);
    set.delete(2);
    set.delete(5);
    return set;
}


//Use .has and .size on an ES6 set
function checkSet(arrToBeSet, checkValue){
    let set = new Set(arrToBeSet);
    return [set.has(checkValue), set.size()];
}
checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]


//Use spread and notes for ES6 Set() integration
var checkSet = set => [...set];


//Create an ES6 JavaScript Map
//instructions are not correct: solution requires .add() method, not set()
var myMap = new Map();
myMap.add('freeCodeCamp','Awesome!');


//Work with nodes in a linked list
var Node = function(element){
    this.element = element; 
    this.next = null; 
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");
var Cat = new Node("Cat");
var Dog = new Node("Dog");

Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;
console.log(Kitten.next);


//Create a linked list class
function LinkedList() { 
    var length = 0; 
    var head = null; 

    var Node = function(element){
        this.element = element; 
        this.next = null; 
    }; 

    this.head = function(){
        return head;
    };

    this.size = function(){
        return length;
    };

    this.add = function(element) {
        let n = new Node(element);
        if (head === null){
            head = n;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = n;
        }
        length++;
    };
}


//Remove elements from a linked list
function LinkedList() { 
    var length = 0; 
    var head = null; 

    var Node = function(element){ 
        this.element = element; 
        this.next = null; 
    }; 

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            currentNode = head;

            while(currentNode.next){
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };
    this.remove = element => {
        let current = head,
            previous;
        if (current.element === element) {
            head = current.next;
            return length--;
        }
        while (current.next) {
            previous = current;
            current = current.next;
            if (current.element === element) {
                previous.next = current.next;
            }
        }
        length--;
    };
}


//Search within a linked list
function LinkedList() { 
    var length = 0; 
    var head = null; 

    var Node = function(element){ // {1} 
        this.element = element; 
        this.next = null; 
    }; 

    this.size = function() {
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            currentNode = head;

            while(currentNode.next){
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }; 

    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length --;
    };
    this.isEmpty = () => !head || length === 0;
    this.indexOf = elem => {
        if (!this.isEmpty()) {
            let n = head,
                i = 0;
            while (i <= length) {
                if (n.element === elem) {
                    return i;
                }
                n = n.next;
                i++;
            }
            return -1;
        }
    };
    this.elementAt = index => {
        if (!this.isEmpty()) {
            let n = head,
                i = 0;
            while (i <= length) {
                if (i === index) {
                    return n.element;
                }
                n = n.next;
                i++;
            }
            return undefined;
        }
    };
}


//Remove elements from a linked list by index
function LinkedList() { 
    var length = 0; 
    var head = null; 

    var Node = function(element){ // {1} 
        this.element = element; 
        this.next = null; 
    }; 

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            currentNode = head;

            while(currentNode.next){
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }; 
    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length --;
    };
    this.removeAt = index => {
        if (index < 0 || index >= length) return null;
        let n = head,
            i = 0,
            e = null;
        while (i <= length) {
            if (i === index) {
                e = n.element;
                this.remove(e);
                return e;
            }
            n = n.next;
            i++;
        }    
    };
}


//Add elements at a specific index in a linked list
function LinkedList() { 
    var length = 0; 
    var head = null; 

    var Node = function(element){
        this.element = element; 
        this.next = null; 
    }; 

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            currentNode = head;
            while(currentNode.next){
                currentNode  = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    this.addAt = (index, element) => {
        if (index < 0 || index >= length) return false;
        let current = head,
            previous,
            newNode = new Node(element),
            i = 0;
        if (index === 0) {
            newNode.next = current;
            head = newNode;
            return length++;
        }
        while (current.next) {
            previous = current;
            current = current.next;
            if (i === index) {
                previous.next = newNode;
                newNode.next = current;
            }
            i++;
        }
        length++;        
    };
}


//Create a doubly linked list
var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.add = element => {
        let newNode = new Node(element, null);
        let current = this.head,
            previous;
        if (current === null) {
            this.head = newNode;
            return this.length++;
        }
        while (current.next) {
            previous = current;
            current = current.next;      
        }
        this.tail = newNode;
        current.next = newNode;    
        newNode.prev = current;
        this.length++;
    };
    this.remove = element => {
        if (this.length === 0) return null;
        let current = this.head,
            previous;
        if (current.data === element) {
            current.prev = null;
            this.head = current.next;
            this.length--;
        }
        else {
            while (current) {
                previous = current;
                current = current.next;
                if (current.data === element) {
                    previous.next = current.next;
                    if (!current.next) {
                        this.tail = current.prev;
                        return this.length--;
                    }
                    this.length--;
                }
            }      
        }
    };
};


//Adjaceny list
var undirectedAdjList = {
    'James': ['Jeff'],
    'Jill': ['Jenny'],
    'Jenny': ['Jill','Jeff'],
    'Jeff': ['James', 'Jenny']
};


//Adjacency matrix
var adjMatUndirected = [
    [0,0,1,1,0],
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,0,1,1,0]
];


//Incidence matrix
var incMatUndirected = [
    [1,0,0,0],
    [1,1,0,1],
    [0,1,1,0],
    [0,0,0,1],
    [0,0,1,0]
];
