function reverseString(str) {
    let rvrStr = '';
    console.log('Input', str);
    for (let i = str.length - 1; i >= 0; i--) {
        rvrStr += str[i];
    }
    return rvrStr;
}

const orgStr = "Jyoti Kukreti";
console.log(reverseString(orgStr)); 