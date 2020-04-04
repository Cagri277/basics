const array = [0, 2, null, undefined, 3, ''];

function countTruthy(array){
    let count = 0
    for(let i = 0; i < array.length; i++){
        if (array[i])
        count++
    }
    return count
}
console.log(countTruthy(array))