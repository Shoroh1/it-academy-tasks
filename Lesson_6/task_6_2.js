function splitNum(num, count, isDecimal = false) {
    const randomNums = []
    let remaining = num
    for (let i = 0; i < count - 1; i++) {
        let randomNum
        if (isDecimal) {
            randomNum = Number((Math.random() * remaining).toFixed(2))
        } else {
            randomNum = Math.round(Math.random() * remaining)
        }
        randomNums.push(randomNum)
        remaining -= randomNum
    }
    randomNums.push(+remaining.toFixed(2))
    return randomNums
}

console.log(splitNum(15, 3))
console.log(splitNum(15, 3, true))
