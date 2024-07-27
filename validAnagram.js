function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}

// Example usage:
let str1 = "anagram";
let str2 = "nagaram";
console.log(isAnagram(str1, str2)); // Output: true

str1 = "rat";
str2 = "car";
console.log(isAnagram(str1, str2));