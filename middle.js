const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        return true
      } else {
        return false
      }
    }
  }
};

const middle = function (array) {
  let result = [];
  if (array.length <= 2 && array.length > 0) {
    return result;
  } else if (array.length % 2 === 0) {
    return result = [array[(array.length / 2) - 1], array[array.length / 2]];
  } else {
    return result = array[(array.length - 1) / 2];
  }
};

console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))