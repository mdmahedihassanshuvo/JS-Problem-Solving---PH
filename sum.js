const arr = [2, -5, 10, -3, 7];

function sumOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] > 0) {
            sum += arr[i];
        }       
    }
    return sum;
}

console.log(sumOfArray(arr));