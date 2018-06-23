
// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(55, 1));


const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lives in ' + city);
  }
};

user.printPlacesLived();


const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) =>  number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
