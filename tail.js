const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};


const tail = function(words) {
  let newArray = [];
  for (let i = 1; i < words.length; i++) {
    newArray.push(words[i]);
  }
  return newArray;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
const actual = tail(words).length; 
const expected = ["Lighthouse", "Labs"].length; 
assertEqual(actual, expected);

assertEqual(tail([5,6,7]).length,[6, 7].length);

