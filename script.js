//A function is a group of reusable code which can be called anywhere in your program. 
//This eliminates the need of writing the same code again and again.
function myname() {
    console.log('swkr')
}
//We can pass parameters while defining a function with in paranthesis and pass arguments while invoking. 
//A function can take multiple parameters separated by comma.
// Passing parament as name
function greet(myname) {
    console.log("Hi " + myname);
}

// Calling a function with an arguments
greet("sir");
greet("mam");
greet('bro')


//The return statement is required if you want to return a value from a function.
function add(a, b) {
    var c = a + b;
    return c;
}

var result = add(55, 44);
console.log(result);


//  array is a single variable that is used to store different elements

// there are two methods to writean array
//  method1: var arr = [ ]; 
// method2: var arr = new Array(); 


// method 1
var arrname = ["syed", "waseem", "khadri", "rafai"];
console.log(arrname);

// method 2 
var newname = new Array("yaseen", "khan");
console.log(newname);

// to find the lenght of the array.
console.log(arrname.length)

// sorting the array
console.log(arrname.sort());

// printing an element.
console.log(arrname[0]);

//maring tow or more arrays

var fruits = ["apple", "mango", "papaya"];
var vegetables = ["onion", "carret"];
var mix = fruits.concat(vegetables);

console.log(mix);



// adding new elements to the array.
// push command is used to add elements.
newname.push("dr strange");
console.log(newname);

// to find the index of an element
var strng = "ironman";
console.log(strng);
var position = strng.indexOf('o');
console.log(position);


//adding new element to the array
var colors = ["Red", "Green", "yellow"];
colors.push("black");
console.log(colors);

//adding new element at the begging of the array
var colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");
console.log(colors);

//removing element from the array
var colors = ["Red", "Green", "pink"];
colors.pop();

console.log(colors);

//removing first element from the array
var colors = ["Red", "Green", "pink"];
colors.shift();

console.log(colors);

//adding or removieng element from any position in the array
var colors = ["Red", "Green", "Blue"];

// Deleting elements
colors.splice(0, 1);
console.log(colors);

//Adding elements at position one
colors.splice(1, 0, "Yellow", "Pink");
console.log(colors);

//extracting a portion of an arrray
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var newarr = fruits.slice(0, 4);

console.log(newarr);

/*OBJECTS
A JavaScript object is just a collection of properties. A property is a "key: value" pair, .
where the key is always a string, and value can be any data type, 
like strings, 
numbers,
 Booleans 
 or referrence data type like arrays,
functions, and other objects. 
And properties with their values as functions are called as methods
An object can be created with curly brackets { }.*/

//EXAMPLE

var student = {
    name: "syedwaseem",
    age: 20,
    gender: "Male",
    class:"3rd year",
    collage: "sampoorna institute of tecnology and research",
  } 
   console.log(student)
  //accessing object properties in two ways
  //dot method and bracket meathod 
  console.log(student.name);
console.log(student["gender"]); 

//We can set the new properties or update the existing one using the dot (.) or bracket ([]) notation//
var person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};

// Setting a new property
student.country = "India";
console.log(student);

// Updating existing property
student.age = 21;
console.log(student.age);

//finding objects length
console.log(Object.keys(student).length);



//thank you