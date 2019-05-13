//Objects and properties

// a fundamental difference between arrays and objects in arrays the order really matters but in objects the order doesn't matter at all

//object literal is a container filled with properties - in the case below they are filled with value key pairs

var john = {
  firstName: 'John',
  lastName : 'Smith',
  birthYear: 1980,
  family: ['jane', 'mark', 'bob', 'emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.birthYear);
console.log(john.firstName);


// use dot notation '.' to access the value to the key (the property)

//can also retrieve the value by using brackets
console.log(john['lastName']);

// or place the value in to a variable

var x = 'birthYear';
console.log(john[x]);

//mutate the object (in this case a section of it)
john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//new Object syntax

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = '1970';
jane['lastName'] ='Smith';

console.log(jane);

//objects and methods

var gemma = {
  firstName: 'Gemma',
  lastName : 'Taylor',
  birthYear: 1980,
  family: ['jane', 'mark', 'bob', 'emily'],
  job: 'builder',
  isMarried: true,
  calcAge: function(){
    return 2018 - this.birthYear;

  }
};
//console.log(gemma.calcAge());

// to store the calculation into the object

console.log(gemma.age = gemma.calcAge());
console.log(gemma.calcAge());
console.log(gemma);





//the function calcAge is now a METHOD of the object gemma

//objects have methods
//arrays have functions to change them

//access a property from a method inside the object- use the keyword this.
// so for example - return 2018 - this.birthYear instead of return 2018 - birthYear