function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentString = '';
    
    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + Number(char); // Build the number if more than one digit
        } else if (char === '[') {
            // Push the current string and number onto the stack
            stack.push(currentString);
            stack.push(currentNum);
            // Reset the current string and number
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            // Pop the number and previous string from the stack
            let num = stack.pop();
            let prevString = stack.pop();
            // Repeat the current string `num` times and append to the previous string
            currentString = prevString + currentString.repeat(num);
        } else {
            // Append the current character to the current string
            currentString += char;
        }
    }
    
    return currentString;
}

// Example usage:
let str = "3[a]2[bc]";
console.log(decodeString(str)); // Output: "aaabcbc"

str = "3[a2[c]]";
console.log(decodeString(str)); // Output: "accaccacc"

str = "2[abc]3[cd]ef";
console.log(decodeString(str));