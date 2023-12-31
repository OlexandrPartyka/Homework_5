function findMinNumber(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

const numbers = [32, 24, 59, 13, 5, 6, 1, 3];
const minNumber = findMinNumber(numbers);
console.log("Мінімальне число в масиві:", minNumber);
