console.clear()
function combine_unique(arr1, arr2) {
    let new_arr = [...arr1]
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            new_arr.push(arr2[i])
        }
    }
    return new_arr.map(String)
}
console.log(combine_unique([1, 2, 3], [100, 2, 1, 10]))


//2-usuli
/*
function mergeUnique(arrays) {
    let merged = [].concat(...arrays);
    return Array.from(new Set(merged));
}

console.log(mergeUnique([[123, 43, 12], [123, 23, 43]]));
*/