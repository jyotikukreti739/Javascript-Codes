function generateFullNumericPyramidPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + Array.from({length: i}, (_, k) => k + 1).join(' ') + ' ' + Array.from({length: i - 1}, (_, k) => i - k - 1).join(' ');
        console.log(row);
    }
}

// Example usage:
generateFullNumericPyramidPattern(5);