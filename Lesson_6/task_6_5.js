function getValue(v1, v2) {
    if (v1.toString().length !== v2.toString().length) {
        console.log("Числа разной длины")
        return
    }
    let s1 = 0
    let s2 = 0
    for (let i = 0; i < v1.toString().length; i++) {
        if (v1.toString()[i] === v2.toString()[i]) {
            s1++
        }
        if (v2.toString().includes(v1.toString()[i])) {
            s2++
        }
    }
    console.log(`Совпадающих по значению и индексу: ${s1}\nСовпадающих по значению: ${s2}`)
}

getValue(3487, 3794)