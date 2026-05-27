class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const dict = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (dict[diff] !== undefined) return [Math.min(dict[diff], i), Math.max(dict[diff], i)];
            else dict[nums[i]] = i;
        }
    }   
}

/**
 * edge cases:
 * 1. 2 <= nums.length <= 1000
 * 2. The pair of answer always exists 
 * 
 * approaches:
 * 1. brute force - nested loops
 * time - O(n^2)
 * space - O(1)
 * 
 * 2. hash map
 * time - O(n)
 * space - O(n)
 */