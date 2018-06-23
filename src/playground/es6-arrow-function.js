// const square = function(x) {
//   return x * x;
// };

// const squareArrow = (x) => {
//   return x * x;
// }

// console.log(squareArrow(10));


const getFirstName = (fullName) => { 
  return fullName.split(' ')[0]
}

const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Mike Smith'));
console.log(getLastName('Bakytzhan Sultanov'));

