function generateInvertedNumericPyramidPattern(n) {
    for (let i = n; i >= 1; i--) {
        let row = ' '.repeat(n - i) + Array.from({length: i}, (_, k) => k + 1).join(' ');
        console.log(row);
    }
}

// Example usage:
generateInvertedNumericPyramidPattern(9);