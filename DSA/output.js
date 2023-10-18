function findMaxMin(arr){
    if (arr.length === 0){
        return null;
    }

    let max = arr[0];
    let min = arr[0];

    for (let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }

        if(arr[i] < min){
            min = arr[i];
        }
    }

    return {max, min};
}

const numbers = [4, 9, 2, 5, 1, 8];
const result = findMaxMin(numbers);
console.log(result);