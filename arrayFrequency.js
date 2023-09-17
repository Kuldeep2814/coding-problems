// Find the frequency of element in array 
function findFrequency(arr) {
    const frequency = {};
  
    for (const element of arr) {
      if (!frequency[element]) {
        frequency[element] = 1;
      } else {
        frequency[element]++;
      }
    }
  
    return frequency;
  }
  
  const array = [1, 2, 3, 2, 4, 1, 3, 5, 1, 2, 2, 3, 5, 1];
  const frequency = findFrequency(array);
  
  console.log(frequency);
  