//bai tap 1
// let numbers = [];
// let n = parseInt(prompt(`Nhập số lượng kí tự:`));
// for (let i = 1; i <= n; i++) {
//   let number = parseInt(prompt(`Nhập số:`));
//   numbers.push(number);
// }

// let uniqueNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   let isUnique = true;
//   for (let j = 0; j < numbers.length; j++) {
//     if (i !== j && numbers[i] === numbers[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     uniqueNumbers.push(numbers[i]);
//   }
// }

// uniqueNumbers.sort((a, b) => b - a);

// console.log(`Số lớn nhất là: ${uniqueNumbers[0]}`);

//bai tap 2
// let numbers = [];
// let n = parseInt(prompt(`Nhập số lượng kí tự:`));
// for (let i = 1; i <= n; i++) {
//   let number = parseInt(prompt(`Nhập số:`));
//   numbers.push(number);
// }

// let uniqueNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   let isUnique = true;
//   for (let j = 0; j < numbers.length; j++) {
//     if (i !== j && numbers[i] === numbers[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     uniqueNumbers.push(numbers[i]);
//   }
// }

// let sum = 0;
// for (let i = 0; i < uniqueNumbers.length; i++) {
//   let isPrime = true;

//   for (let j = 2; j <= Math.sqrt(uniqueNumbers[i]); j++) {
//     if (uniqueNumbers[i] % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (uniqueNumbers[i] === 1) {
//     isPrime = false;
//   }
//   if (isPrime) {
//     sum += uniqueNumbers[i];
//   } else {
//     isPrime = false;
//   }
// }

// console.log(sum);

// bai tap so 3
// for (let row = 0; row <= 5; row++) {
//   for (let col = 0; col <= 6; col++) {
//     if (
//       (row === 0 && col % 3 !== 0) ||
//       (row === 1 && col % 3 === 0) ||
//       row - col === 2 ||
//       row + col === 8
//     ) {
//       document.write("*  &nbsp");
//     } else {
//       document.write("&nbsp &nbsp");
//     }
//   }
//   document.write("<br>");
// }

// bai tap 4
// const string = prompt(" Chuỗi kí tự bao gồm chữ và số ");
// const result = string.replace(/\d/g, "");
// console.log(result);

// bai tap 5
const string = prompt("Nhập chuỗi");

const stringArray = string.split(" ");

let result = "";
for (let i = 0; i < stringArray.length; i++) {
  const word = stringArray[i].split("").reverse().join("");
  result = result.concat(" ", word);
}

console.log(result);
