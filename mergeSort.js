const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(array){
    if(array.length === 1){
        return array
    }

    // splitting the array into left and right

    const middleIndex = Math.floor(array.length / 2);

    // left 
    const left = array.slice(0, middleIndex);

    // right 
    const right = array.slice(middleIndex)


    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}

function merge(left, right){
    // comparing both arrays
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);