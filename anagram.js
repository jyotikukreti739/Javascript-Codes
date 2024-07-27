function areAnagrams(str1, str2) {
   
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    
    return sortedStr1 === sortedStr2;
}

// Example usage
const str1 = "listen";
const str2 = "silent";

if (areAnagrams(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}