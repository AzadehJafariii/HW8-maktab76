// Ex.8
// Write a program with the constructor called Student that includes the name and gender
// fields of the fields
// 1. Create the studObj variable from the new Student and add the age field with the
// prototype
// 2. Create the studObj2 variable from the studObj1 and change value age field to 20
// with the prototype


function Student(name , gender) {
    this.name = 'John';
    this.gender = 'Male';
}

let studObj1 = new Student();
Student.prototype.age = 15;
console.log(`studObj1.age is ${studObj1.age}`);

let studObj2 ={};
studObj2 = Object.setPrototypeOf(studObj2, studObj1);
Student.prototype.age = 20;
console.log(`studObj2.age is ${studObj2.age}`); 







