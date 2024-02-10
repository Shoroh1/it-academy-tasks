//1. Написать функцию, которая будет записывать в массив ряд фибоначчи начиная с N члена с длинной массива M.
// В функцию надо передать номер числа фибоначчи с которого начинается массив (N) и длину,
// которой должен быть массив (M).


function fib(n, m, arr = [0, 1]) {
    if (arr.length === m) {
        return arr.slice(n)
    }
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])

    return fib(n, m, arr)
}

console.log(fib(2, 12))