//Functions exercises

function calculateAge(babyBirthYear){
  return 2019 - babyBirthYear;
};
//the value of babyBirthYear is passed to the variable when the function is called therefore babyBirthYear = 2016
var ageJordan = calculateAge(2016);
var ageMum = calculateAge(1954);

console.log(ageJordan, ageMum);


function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.')
  } else {
    console.log(firstName + ' should be already retired.')
  }
}

//when the function is called, values are added to the arguments.
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(2016, 'Jordan');
yearsUntilRetirement(1954, 'Mum');

//function declaration is slightly different

//var whatDoYouDo = function(job,firstName){
//}

//function statements and expressions

//when we write the function, we do so with the keyword
//a function expression is assigning the function to a variable name


//var whatDoYouDo = function(job,firstName)

//


function whatDoYouDo(job, firstName) {
  switch (job){
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon.'
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('driver', 'sally'));
console.log(whatDoYouDo('designer', 'clare'));
console.log(whatDoYouDo('architect', 'anthony'));

//javascript expressions are pieces of code that always produce a value - (according to udemy course but I need to check this in the o'reilly js handbook)
//javascript declarations don't produce any immediate value so therefore are called statements - (according to udemy course but I need to check this in the o'reilly js handbook)

//function expressions - In a function expression the name of the function isn't used and is instead passed to a variable. A function without a name is called an anonymous function (codecademy)

const plantNeedsWater = function(day){
  if(day ==='Wednesday'){
    return true;
  } else { return false;
  }
}

console.log(plantNeedsWater('Tuesday'));


//arrow functions

//ES5 syntax
var multiply = function(x,y){
  return x * y;
};
console.log(multiply(6,5));


//ES6 arrow function
var divide = ( x , y )=>{ return x / y;};
console.log(divide(12, 3));

//simplified arrow function

var divide2 = ( x , y) => x / y;

console.log(divide2(12,3));

//ES6 default parameters

function makeShoppingList(item1='milk',item2='bread',item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

//ES6 Arrow functions - arrow function syntax is a shorter way to write functions "fat arrow" ()=> notation (codecademy)

const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// concise body arrow functions - refactoring arrow functions

//zero parameters

//functions with one parameter don't need to be enclosed in brackets
const functionName = paramOne => {};


// using the return keyword to calculate the number of monitors needed in an office

function monitorCount(rows, columns){
  return rows * columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

//helper functions - are functions being called within another function

function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows,columns)*200
};

const totalCost = costOfMonitors(5,4);

console.log(totalCost);