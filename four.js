//написать функцию которая из строки делает первую букву заглавную. Вход: 'test' Вывод: 'Test
let Stringe = "test"


function firstLetterToUpcase(str){
let Worse = str.split("")
let d = Worse[0].toUpperCase()
let sf = Worse.shift()
return d.concat(...Worse) 
// console.log(Worse)
// let a = str.toUpperCase()
// console.log(a)
// let words = str.split(' ')
}

console.log( firstLetterToUpcase("dksdsdadadadadadfasfgrghdghfnjredghrdf"))

