class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = Array.from({length: nums.length + 1}, () => []);
        const freqMap = {};

        for (const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }
        for (const num in freqMap) {
            bucket[freqMap[num]].push(num);
        }

        const res = [];
        let counter = k;
        for (let i = bucket.length - 1; i >= 0 && counter > 0; i--) {
            for (let j = 0; j < bucket[i].length; j++) {
                res.push(bucket[i][j]);
                counter--;
                if (counter === 0) return res;
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