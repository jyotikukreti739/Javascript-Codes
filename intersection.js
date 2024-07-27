function arrayIntersection(arr1, arr2) {
    const map = {};
    const intersection = [];
    for (const element of arr1) {
        if (!map[element]) {
            map[element] = 0;
        }
        map[element]++;
    }
    // Check for common elements in the second array
    for (const element of arr2) {
        if (map[element]) {
            intersection.push(element);
            map[element]--; // Decrease the count to handle duplicates
            if (map[element] === 0) {
                delete map[element]; // Remove the element if count reaches zero
            }
        }
    }

    return intersection;
}

// Example usage
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 3, 5];

console.log(arrayIntersection(arr1, arr2));