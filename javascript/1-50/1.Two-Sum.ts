export const twoSum = (nums: number[], target: number): number[] => {
  const numIndices: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numIndices) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }

  return [-1, -1];
};
