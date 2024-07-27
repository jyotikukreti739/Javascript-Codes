function generateNumericPyramidPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + Array.from({length: i}, (_, k) => k + 1).join(' ');
        console.log(row);
    }
}

// Example usage:
generateNumericPyramidPattern(9);