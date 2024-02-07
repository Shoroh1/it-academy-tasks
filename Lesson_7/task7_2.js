function stringNums(value) {
    try {
        let numsValue = value.split('').slice(0, 3).reduce((a, c) => parseInt(a) + parseInt(c), 0)
        let numsValue2 = value.split('').slice(3, 7).reduce((a, c) => parseInt(a) + parseInt(c), 0)
        console.log(numsValue)
        console.log(numsValue2)
        console.log(`Sum num first 3 num = ${numsValue} and sum num second 3 num = ${numsValue2}`)
        console.log(`${numsValue === numsValue2 ? "Да" : "Нет"} `)
    } catch (err){
        console.error(err)
    }
}


stringNums("Input your value")