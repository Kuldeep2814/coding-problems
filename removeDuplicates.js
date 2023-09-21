//How would you remove duplicate members from an array?

function removeDuplicatesWithIteration(inputArray) {
    const uniqueArray = [];
    const seen = {}; // To keep track of seen elements
    for (let i = 0; i < inputArray.length; i++) {
      const currentItem = inputArray[i];
      if (!seen[currentItem]) {
        uniqueArray.push(currentItem);
        seen[currentItem] = true;
      }
    }
    return uniqueArray;
  }
  
  const originalArray = [1, 2, 2, 3, 4, 4, 5, 5, 4 ];
  const uniqueArray = removeDuplicatesWithIteration(originalArray);
  console.log(uniqueArray);
  