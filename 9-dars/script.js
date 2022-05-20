// 1
let daraja = (a) => {
    return a ** 3
}
console.log(daraja(3));

// 2
let yigindi = (a, b) => {
    return a + b
}
console.log(yigindi(10, 20));

// 3
let ayirma = (a, b) => {
    console.log(`${a}-${b}= ${a-b} `);
}
ayirma(10, 20)

4
let darajalar = (a) => {
    console.log(`${a} ning kvadrati= ${a**2}`);
    console.log(`${a} ning kubi= ${a**3}`);
    console.log(`${a} ning to'rtinchi darajasi= ${a**4}`);
}
darajalar(5)

// 4
let darajalar1 = (a) => {
    return [a ** 2, a ** 3, a ** 4]
}
console.log(darajalar1(5))

// 5
let toq = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
toq(20)

// 5 rest
let son = (...numbers) => {
    let arr = []
    for (number of numbers) {
        if (number % 2 == 0) {
            arr.push(number)
        }
    }
    return arr
}
console.log(son(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


// 6
let juft = function(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
juft(20)

// 6
let son1 = (...numbers) => {
    let arr = []
    for (number of numbers) {
        if (number % 2 != 0) {
            arr.push(number)
        }
    }
    return arr
}
console.log(son1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// 7
let son2 = function(n) {
    let a = n
    console.log(`${n} sonining inkrementi=${++n}`);
    console.log(`${a} sonining dikrementi=${--a}`);
}
son2(20)

// 8
let boluvchi = (n) => {
    let s = 0
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i)
            s++
        }
    }
    if (s == 2) {
        console.log('tub')
    }
    return arr

}
console.log(boluvchi(20))

// 9
let amallar = (a, b, c) => {
    switch (c) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}
console.log(amallar(4, 2, '*'))

// 10 kara jadvali
let karaJadval = (a) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} x ${i}= ${a*i} `)
    }
}
karaJadval(10)


// 37-dars

// CALLBACK FUNCTION

// function lola(){
//   return 'Lola'
// }
// function barno(){
//   return 'Barno'
// }
// function umida(){
//   return 'Umida'
// }

// function hello(a){
//   console.log('Hello ' + a())
// }
// hello(lola)

let q = (a, b) => {
    return a + b
}
let a = (a, b) => {
    return a - b
}
let k = (a, b) => {
    return a * b
}
let b = (a, b) => {
    return a / b
}
let cal = (a, b, c, func) => {
    switch (c) {
        case '+':
            console.log(func(a, b))
        case '-':
            console.log(func(a, b))
        case '*':
            console.log(func(a, b))
        case '/':
            console.log(func(a, b))
    }
}
cal(10, 5, '+', k)