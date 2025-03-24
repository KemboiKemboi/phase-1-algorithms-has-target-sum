// Function to check if two numbers in an array sum up to the target
function hasTargetSum(arr, target) {
  const seen = new Set();

  for (let num of arr) {
      const complement = target - num;
      if (seen.has(complement)) {
          return true;
      }
      seen.add(num);
  }

  return false;
}

module.exports = hasTargetSum; // Make sure to export the function

