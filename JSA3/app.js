// ===============================
// ES6 TASKS COMPLETE ASSIGNMENT
// ===============================



// ======================================
// GLOBAL SCOPE
// ======================================

var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Accessible globally



// ======================================
// FUNCTION SCOPE
// ======================================

function testFunctionScope() {
  var functionVar = "Function var";
  let functionLet = "Function let";
  const functionConst = "Function const";

  console.log(functionVar);
  console.log(functionLet);
  console.log(functionConst);
}

testFunctionScope();

// console.log(functionVar); // Error
// console.log(functionLet); // Error
// console.log(functionConst); // Error



// ======================================
// BLOCK SCOPE
// ======================================

if (true) {
  var blockVar = "Block var";
  let blockLet = "Block let";
  const blockConst = "Block const";
}

console.log(blockVar);
// console.log(blockLet); // Error
// console.log(blockConst); // Error



// ======================================
// HOISTING WITH VAR
// ======================================

console.log(hoistVar); // undefined
var hoistVar = "Hoisted";



// ======================================
// HOISTING WITH LET & CONST
// ======================================

// console.log(hoistLet); // ReferenceError
let hoistLet = "Let";

// console.log(hoistConst); // ReferenceError
const hoistConst = "Const";



// ======================================
// RE-DECLARATION
// ======================================

var redeclareVar = 1;
var redeclareVar = 2;

let redeclareLet = 1;
// let redeclareLet = 2; // Error

const redeclareConst = 1;
// const redeclareConst = 2; // Error



// ======================================
// RE-ASSIGNMENT
// ======================================

var reassignVar = 10;
reassignVar = 20;
console.log(reassignVar);

let reassignLet = 30;
reassignLet = 40;
console.log(reassignLet);

const reassignConst = 50;
// reassignConst = 60; // Error



// ======================================
// TEMPORAL DEAD ZONE (TDZ)
// ======================================

{
  // console.log(tdzLet); // Error
  let tdzLet = "TDZ Let";

  // console.log(tdzConst); // Error
  const tdzConst = "TDZ Const";
}



// ======================================
// WHEN TO USE VAR, LET, CONST
// ======================================

// var example
var oldStyle = "Used in older JS";

// let example
let counter = 0;
counter++;

// const example
const pi = 3.1416;

console.log(oldStyle, counter, pi);



// ======================================
// STRING INTERPOLATION
// ======================================

const firstName = "Shani";
const lastName = "Rafiq";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);



// ======================================
// MULTI-LINE STRINGS
// ======================================

const address = `
House 123
Karachi
Pakistan
`;

console.log(address);



// ======================================
// SIMPLE EXPRESSIONS
// ======================================

const num1 = 10;
const num2 = 20;

console.log(`Sum is ${num1 + num2}`);



// ======================================
// FUNCTION CALLS
// ======================================

function multiply(a, b) {
  return a * b;
}

console.log(`Product is ${multiply(5, 4)}`);



// ======================================
// TAGGED TEMPLATE
// ======================================

function tag(strings) {
  console.log(strings);
}

tag`Hello World`;



// ======================================
// FORMATTING
// ======================================

function upperCaseTag(strings, value) {
  return `${strings[0]}${value.toUpperCase()}`;
}

console.log(upperCaseTag`Hello ${"shani"}`);



// ======================================
// CONDITIONAL LOGIC
// ======================================

const currentHour = 10;

console.log(
  `${currentHour < 12 ? "Good Morning" : "Good Afternoon"}`
);



// ======================================
// LOOPS WITH TEMPLATE LITERALS
// ======================================

const shoppingList = ["Milk", "Bread", "Eggs"];

const htmlList = `
<ul>
  ${shoppingList.map(item => `<li>${item}</li>`).join("")}
</ul>
`;

console.log(htmlList);



// ======================================
// ESCAPING BACKTICKS
// ======================================

