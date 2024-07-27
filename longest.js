function lengthOfLongestSubstring(s) {
    const seenChars = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (seenChars.has(currentChar)) {
            // Move the start to the right of the previous occurrence of currentChar
            start = Math.max(seenChars.get(currentChar) + 1, start);
        }
        seenChars.set(currentChar, end);

        // Update the maximum length found
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
const input = "abcabcbb";
console.log(lengthOfLongestSubstring(input)); // Output: 3

const input2 = "bbbbb";
console.log(lengthOfLongestSubstring(input2)); // Output: 1

const input3 = "pwwkew";
console.log(lengthOfLongestSubstring(input3)); 