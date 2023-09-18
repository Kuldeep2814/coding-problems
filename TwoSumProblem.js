// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// Example:
// Given array = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
    const numIndices = {}; 
  
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
  
      if (numIndices.hasOwnProperty(complement)) {
        return [numIndices[complement], i];
      }
  
      numIndices[currentNum] = i;
    }
  
    return [];
  }
  
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]
  