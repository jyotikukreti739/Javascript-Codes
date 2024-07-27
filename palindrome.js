function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is the same forwards and backwards
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage
const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";

console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2));