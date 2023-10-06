function countTrueValues(arr) {
    // Use the filter method to create a new array containing 
    // only true values
    const trueValues = arr.filter((value) => value === true);
  
    // Return the length of the new array, which represents 
    // the count of true values
    return trueValues.length;
  }
  
  // Example usage:
  const myArray = [true, false, true, true, false, true];
  const count = countTrueValues(myArray);
  console.log(`Number of true values in the array: ${count}`);
  