class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const buckets = Array.from({length: nums.length + 1}, () => []);
        const map = new Map(); 

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [key, val] of map) {
            buckets[val].push(key);
        }

        const res = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            for (let j = 0; j < buckets[i].length; j++) {
                res.push(buckets[i][j]);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
