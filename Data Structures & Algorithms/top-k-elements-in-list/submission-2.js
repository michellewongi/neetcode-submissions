class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = Array.from({length: nums.length + 1}, () => []);
        const freqMap = new Map();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        for (const [num, freq] of freqMap) {
            bucket[freq].push(num);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
            for (let j = 0; j < bucket[i].length; j++) {
                res.push(bucket[i][j]);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}

/**
 * nums = [1, 2],  k = 1  ? 
 * 
 * Approach:
 * A) Hash map
 * time - O(N):looping nums + O(NlogN):sorting
 * space - O(k) where k is the # of unique elements
 * 
 * B) Bucket sort
 * time - O(N)
 * space - O(N)
 * 
 */
