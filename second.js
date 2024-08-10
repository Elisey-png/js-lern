// 2) Задача-- 2) написать функцию которая вычисляет сумму всех чётных чисел в диапазоне от a до b включительно. 
// a = 2 b = 10  2 4 6 8 10




function letings(start,end){
    let sum = 0
    for (let curent = start; curent <= end; curent++) {
        const rest = curent % 2;
        if (rest === 0) {
        sum = sum + curent
      //  console.log(sum = curent)
        }
    }
    return sum
}


console.log(letings(2,10))
console.log(letings(2,10))
console.log(letings(2,10))







// новые знания ниже

let trues = true
let falses = false

let and = trues && trues

console.log(and) 

let andfalse = falses && falses

console.log(andfalse) 