//  3) написать функцию которая вычисляет максимальное и минимальное значение из набора чисел.
//  Например: (1, 5, 4, 2, 44, 85, 11, 88, 6, 7, 0, 10) Ответ: мин 0 макс 88

//min = underfaind; max = underfaind
//if (min > currentValue){min = currentValue } if (max < currentValue) {max = currentValue}

const nums = [1, 5, 4, 2, 44, 85, 11, 88, 6, 7, 0, 10]

function minMax(arr) {
if (arr.length === 0) {
return []
}
    let max = arr[0]
    let min = arr[0]
    for (let index = 1; index < arr.length; index++ ){
        const currentValue = arr[index]
        if (min > currentValue){
            min = currentValue
         }

        if (max < currentValue){
             max = currentValue
        }
    }
    return [min,max]
}
// minMax(nums)
//console.log(minMax(nums))
//console.log(minMax([]))
// console.log(Math.max(...nums))
// console.log(Math.min(...nums))
console.log(minMax([-12,...nums]))
