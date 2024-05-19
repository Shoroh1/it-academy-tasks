function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function cubeGame(count) {
    if (typeof count == "number" && count > 0) {
        const person1 = []
        const person2 = []
        let step = 1
        while (step < count) {
            person1.push(getRandom(1, 6))
            person2.push(getRandom(1, 6))
            step++
        }
        console.log(person1.join(" - "))
        console.log(person2.join(" - "))
        let p1Sum = person1.slice(0, 3).reduce((a, c) => a + c)
        let p2Sum = person2.slice(0, 3).reduce((a, c) => a + c)
        console.log(`Player ${p1Sum > p2Sum ? "1" : p1Sum === p2Sum ? "1 && 2" : "2"} won!`)
    } else {
        throw new Error("Ожидаю число больше нуля")
    }
}

cubeGame(4)
