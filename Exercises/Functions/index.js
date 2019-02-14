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

//javascript expressions are pieces of code that always produce a value
//javascript declarations don't produce any immediate value so therefore are called statements


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