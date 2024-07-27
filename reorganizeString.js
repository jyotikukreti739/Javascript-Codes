function reorganizeString(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const maxHeap = new MaxPriorityQueue({
        priority: (x) => x[1]
    });

    for (const char in charCount) {
        maxHeap.enqueue([char, charCount[char]]);
    }

    let result = '';
    let prevChar = null;
    let prevCount = 0;

    while (!maxHeap.isEmpty()) {
        let [char, count] = maxHeap.dequeue().element;

        if (prevChar && prevCount > 0) {
            maxHeap.enqueue([prevChar, prevCount]);
        }

        result += char;
        prevChar = char;
        prevCount = count - 1;
    }

    return result.length === s.length ? result : '';
}

// Usage example:
console.log(reorganizeString("aab")); // Output: "aba" (or any valid reorganization)
console.log(reorganizeString("aaab"));