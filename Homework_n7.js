console.clear()
//1-usuli
/*
function unique_arr(arr){
    let new_arr = []
    for (let i = 0; i < arr.length; i++){
        if (!new_arr.includes(arr[i])){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
console.log(unique_arr([1, 2, 2, 3, 4, 4, 5]))
*/

//2-usuli
function unique_arr(arr) {
    let new_arr = []
    let unique_elements = new Set(arr)
    for (let element of unique_elements) {
        new_arr.push(element)
    }
    return new_arr
}
console.log(unique_arr([1, 2, 2, 3, 4, 4, 5]))