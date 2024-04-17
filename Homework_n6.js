console.clear()
function move(arr, fromIndex, toIndex) {
    let length = arr.length
    if (fromIndex < 0) {
        fromIndex = length + fromIndex
    }
    if (toIndex < 0) {
        toIndex = length + toIndex
    }
    if (fromIndex >= 0 && fromIndex < length && toIndex >= 0 && toIndex < length) {
        let element = arr.splice(fromIndex, 1)[0]
        arr.splice(toIndex, 0, element)
    }
    return arr
}

console.log(move([1,2,3,4,6,5], 5, 5))
