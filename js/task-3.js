// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers)
// та значення (value) як параметри. Функція повинна повертати новий масив
// лише тих чисел із масиву numbers, які більші за значення value.

function filterArray(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
