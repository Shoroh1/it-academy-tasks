// Решить используя промисы и async/await. Сделайте 3 промиса,
//     в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
//     Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

async function getProm() {
    const prom = new Promise((resolve) => {
        setTimeout(resolve, getRandomInt(1, 6) * 1000, "1")
    })
    const prom1 = new Promise((resolve) => {
        setTimeout(resolve, getRandomInt(1, 6) * 1000, "2")
    })
    const prom2 = new Promise((resolve) => {
        setTimeout(resolve, getRandomInt(1, 6) * 1000, "3")
    })
    return await Promise.race([prom, prom1, prom2])
}

//     Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.


function getNum (timeout, min, max) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout * 1000, getRandomInt(min, max))
    })
}

async function hw2 () {
    let num = await getNum(3, 1, 6)
    console.log(Math.pow(num, 2))
}


//     Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum,
//     а затем найдет сумму полученных чисел и выводит на экран.


async function run () {
    console.log(await getProm())
    await hw2()
    const [num1, num2] = await Promise.all([getNum(3, 1, 6), getNum(5, 6, 11)])
    console.log(num1 + num2)
}

run()