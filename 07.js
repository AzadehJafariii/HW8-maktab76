// Ex.7
// Create an object named dog from the sample object below using the prototype
// inheritance
let animal = {
speaks: true,
walk() {
console.log("Animal walks");
}
};
// let dog = {
//     __proto__: animal,
// }
// console.log(dog);

let dog2 ={};
dog2 = Object.setPrototypeOf(dog2, animal);
console.log(dog2);