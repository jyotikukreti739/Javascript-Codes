function findPairWithSum(arr, targetSum) {
    const seenElements = new Map();

    for (const element of arr) {
        const complement = targetSum - element;

        if (seenElements.has(complement)) {
            return [complement, element];
        }

        seenElements.set(element, true);
    }

    return null; // Return null if no pair is found
}

// Example usage
const arr = [2, 7, 11, 15];
const targetSum = 9;

const result = findPairWithSum(arr, targetSum);
if (result) {
    console.log(`Pair found: ${result[0]} + ${result[1]} = ${targetSum}`);
} else {
    console.log("No pair found with the given target sum.");
}