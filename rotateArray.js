function rotateArray(arr, positions) {
    const len = arr.length;
    if (len === 0) return arr;

    // Normalize the number of positions
    positions = positions % len;

    // Split the array into two parts and swap them
    const part1 = arr.slice(-positions);
    const part2 = arr.slice(0, len - positions);

    return part1.concat(part2);
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const positions = 2;

console.log(rotateArray(arr, positions));