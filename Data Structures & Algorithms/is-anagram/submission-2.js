class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
        if (s.length !== t.length) return false;

        const map = new Map(); 

        for (const char of s) { 
            map.set(char, (map.get(char) || 0) + 1);
        }

        for (const char of t) {
            if (map.get(char)) { 
                map.set(char, map.get(char) - 1);
                if (map.get(char) === 0) map.delete(char);
            }
        }

        return map.size === 0 ? true : false;
    }
}

// time - O(n) where n is the length of s and t
// space - O(k) where k is the number of unique chars in "s"
