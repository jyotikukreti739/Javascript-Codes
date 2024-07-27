function compressString(str) {
    if (str.length === 0) return "";

    let compressedStr = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressedStr += str[i - 1] + count;
            count = 1;
        }
    }

    // Add the last character and its count
    compressedStr += str[str.length - 1] + count;

    // Return the compressed string only if it's shorter than the original string
    return compressedStr.length < str.length ? compressedStr : str;
}

// Example usage
const input = "aabcccccaaa";
console.log(compressString(input));