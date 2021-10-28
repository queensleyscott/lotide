const without = function (source, itemsToRemove) {
  let newarray = []
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      newarray.push(source[i])
    }

  }
  return newarray
};


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

assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
assertEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true);
assertEqual(eqArrays(without(["1", "2", "3"], [1, "3"]), ["1", "2"] ), true);
