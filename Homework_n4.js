function countWords(str) {
    let wordsCount = {}
    let symbols = new Set("?!@#$%^&*(){}[]:;|*+-/,.".split(""))
    let currentWord = ""

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (symbols.has(char) || char === " ") {
            if (currentWord !== "") {
                wordsCount[currentWord] = (wordsCount[currentWord] || 0) + 1
                currentWord = ""
            }
        } else {
            currentWord += char
            if (i === str.length - 1 || symbols.has(str[i + 1]) || str[i + 1] === " ") {
                wordsCount[currentWord] = (wordsCount[currentWord] || 0) + 1
                currentWord = ""
            }
        }
    }
    return wordsCount
}
let result = countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis illum, ratione voluptates consequuntur, distinctio dolores veritatis nemo ea dolore labore, dignissimos magnam? Dolorum commodi maxime consequuntur a unde fugit sit!")
console.log(result)
