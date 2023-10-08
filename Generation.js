/*Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter" */

function generation(x, y) {
    if (x === 0) {
      return "me!";
    }
  
    const generations = Math.abs(x);
    const gender = y === "m" ? "grandfather" : "grandmother";
  
    if (x > 0) {
      if (generations === 1) {
        return y === "m" ? "son" : "daughter";
      } else {
        return "great ".repeat(generations - 2) + gender;
      }
    } else {
      if (generations === 1) {
        return y === "m" ? "father" : "mother";
      } else {
        return "great ".repeat(generations - 2) + (y === "m" ? "grandfather" : "grandmother");
      }
    }
  }
  
  // Examples
  console.log(generation(2, "f"));   // ➞ "granddaughter"
  console.log(generation(-3, "m"));  // ➞ "great grandfather"
  console.log(generation(1, "f"));   // ➞ "daughter"
  console.log(generation(0, "m"));   // ➞ "me!"
  