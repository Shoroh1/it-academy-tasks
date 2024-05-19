function getFridays13(startDate) {
    let count = 0
    for (let i = startDate; i <= Date.now(); i.setDate(i.getDate() + 1)) {
        if(i.getDay() === 5 && i.getDate() === 13){
            count++;
        }

    }
    return count
}

console.log(`с января 2000 года по сегодня было ${getFridays13(new Date("2000-01-01"))} пятниц 13-го`)